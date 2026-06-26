# Templates - Material Library

This directory contains reusable widget materials. Each template provides a complete working example (`widget-code.html`) that the model can reference for CSS classes, layout patterns, interaction structures, and data visualization approaches. The current library includes chart, diagram, and comparison-card materials.

Templates are **materials**, not rigid constraints. The model may:
- Reference one material and adapt it
- Mix CSS/interaction patterns from multiple materials
- Generate a fully custom fragment when no material is relevant or when forcing one material would distort the user's intent

## File Contract

Every ready template folder contains:

| File | Purpose |
|---|---|
| `template.md` | Material description, use/avoid rules, data shape, reusable primitives, edge cases, assumptions, and acceptance checks |
| `widget-code.html` | Complete PureShowWidget-compatible fragment: style first, content second, optional script last |
| `fixture.json` | Small realistic sample data for browser testing and tuning |

`widget-code.html` must use `data-dynamic-ui-widget` and `data-template="<template-id>"`, initialize through a stable root selector, preserve visible fallback behavior, and avoid full HTML page shells.

Chart materials treat Chart.js as progressive enhancement. They must remain useful if Chart.js or the CDN fails, and tooltip behavior declared in `template.md` should not be silently dropped while adapting the material.

## Current Materials

- `line-trend`
- `bar-chart-multiple`
- `scatter-chart`
- `gantt-chart`
- `funnel-bar-chart`
- `sankey-chart`
- `heatmap-chart`
- `pie-donut-text`
- `bar-stacked-legend`
- `pie-chart-label-list`
- `radar-chart-legend`
- `radar-chart-lines-only`
- `comparison-cards`
- `tree-flow`
- `architecture-elements`

Use `references/material-catalog.md` for semantic routing and use/avoid boundaries. Use `manifest.json` as the machine-readable ready-material inventory.

## Machine-Readable Inventory

See `manifest.json` for the full list with `id`, `status`, `kind`, `scene`, and `intent` fields.

## Cross-File Sync

When adding, renaming, removing, or changing the intent of a material, update the material folder, `manifest.json`, `references/material-catalog.md`, relevant `scenes/*.md`, and this README together. Do not leave a ready manifest entry without a real implemented folder.

Run `node scripts/check-materials.mjs` after sync-sensitive edits.
