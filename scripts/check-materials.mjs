#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const templatesDir = path.join(root, "templates");
const manifestPath = path.join(templatesDir, "manifest.json");
const requiredFiles = ["template.md", "widget-code.html", "fixture.json"];
const errors = [];

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function fail(message) {
  errors.push(message);
}

if (!exists(manifestPath)) {
  fail("Missing templates/manifest.json");
} else {
  const manifest = JSON.parse(readText(manifestPath));
  const templates = Array.isArray(manifest.templates) ? manifest.templates : [];
  const ids = new Set();
  const readyIds = new Set();

  for (const entry of templates) {
    if (!entry || typeof entry.id !== "string") {
      fail("Manifest contains an entry without a string id");
      continue;
    }
    if (ids.has(entry.id)) {
      fail(`Duplicate manifest id: ${entry.id}`);
    }
    ids.add(entry.id);

    if (entry.status === "ready") {
      readyIds.add(entry.id);
      const folder = path.join(templatesDir, entry.id);
      if (!exists(folder) || !fs.statSync(folder).isDirectory()) {
        fail(`Ready material is missing folder: templates/${entry.id}`);
        continue;
      }
      for (const file of requiredFiles) {
        if (!exists(path.join(folder, file))) {
          fail(`Ready material templates/${entry.id} is missing ${file}`);
        }
      }
    }
  }

  const folders = fs.readdirSync(templatesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith("."));

  for (const folder of folders) {
    const looksImplemented = requiredFiles.some((file) => exists(path.join(templatesDir, folder, file)));
    if (looksImplemented && !ids.has(folder)) {
      fail(`Implemented material folder is missing from manifest: templates/${folder}`);
    }
  }

  const sceneFiles = fs.readdirSync(path.join(root, "scenes"))
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(root, "scenes", name))
    .filter(exists);

  for (const filePath of sceneFiles) {
    const relative = path.relative(root, filePath);
    const text = readText(filePath);
    const afterHeading = text.split("## Reference materials")[1];
    if (!afterHeading) {
      continue;
    }
    const referenceSection = afterHeading.split("\n## ")[0];
    const matches = referenceSection.matchAll(/`(?:templates\/)?([a-z][a-z0-9]*(?:-[a-z0-9]+)+)`/g);
    for (const match of matches) {
      const id = match[1];
      if (!readyIds.has(id)) {
        fail(`${relative} references missing or non-ready material: ${id}`);
      }
    }
  }

  const catalogPath = path.join(root, "references", "material-catalog.md");
  if (exists(catalogPath)) {
    const catalog = readText(catalogPath);
    const matches = catalog.matchAll(/`templates\/([a-z][a-z0-9]*(?:-[a-z0-9]+)+)`/g);
    for (const match of matches) {
      const id = match[1];
      if (!readyIds.has(id)) {
        fail(`references/material-catalog.md references missing or non-ready material: ${id}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error("Material check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Material check passed.");
