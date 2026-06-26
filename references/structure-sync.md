# Structure Sync

This package is a Dynamic UI skill/spec package, not a runnable frontend app. Its output remains a PureShowWidget `widget_code` fragment.

## Layer Responsibilities

`SKILL.md` is the runtime entrypoint. It decides whether a compact inline visual is useful, routes to one scene, and applies the hard gates.

`scenes/` defines scene-specific generation guidance: when to enter, when to reject, available materials, composition rules, and acceptance criteria.

`references/` defines shared contracts. These files keep runtime, content, SVG, material selection, and sync rules out of the scene files.

`tokens/visual-tokens.md` is the source of truth for runtime color, radius, spacing, typography, chart series, and diagram classes.

`templates/` stores reusable materials. Materials are working examples that can be borrowed or mixed; they are not frontend components and not mandatory fixed layouts.

`templates/manifest.json` is the machine-readable ready-material list. A `ready` entry must match a real folder.

## Ready Material File Contract

Every ready material folder must contain:

```text
template.md
widget-code.html
fixture.json
```

`template.md` should document:
- What primitives are reusable.
- When to use and avoid the material.
- Expected data shape.
- Visual and interaction limits.
- Tooltip, hover, legend, fallback, or selection behavior.
- Boundary cases such as null values, empty data, long labels, dense data, missing libraries, and unsupported scales.
- Implementation assumptions.
- Acceptance checks.

`widget-code.html` should:
- Start with `<style>`.
- Include content after styles.
- End with `<script>` only when needed.
- Avoid full HTML page shells.
- Use `data-dynamic-ui-widget` and `data-template="<template-id>"`.
- Use a stable root selector.
- Preserve fallback and required interaction behavior.

`fixture.json` should:
- Be small and realistic.
- Match the documented data shape.
- Avoid private or production data.

## Cross-File Sync

When adding, renaming, removing, or changing the routing intent of a material, update these surfaces together:

1. `templates/<template-id>/template.md`
2. `templates/<template-id>/widget-code.html`
3. `templates/<template-id>/fixture.json`
4. `templates/manifest.json`
5. `references/material-catalog.md`
6. Relevant `scenes/*.md`
7. `templates/README.md`

Do not mark a material `ready` if the folder or required files are missing.

## Validation

Run:

```bash
node scripts/check-materials.mjs
```

The check verifies:
- Manifest ids are unique.
- Every ready manifest entry has a folder and the three required files.
- Every implemented material folder appears in the manifest.
- Material references in scenes and `references/material-catalog.md` point to existing manifest entries.
