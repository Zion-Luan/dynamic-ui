# Templates — Material Library

This directory contains reusable widget materials. Each template provides a complete working example (`widget-code.html`) that the model can reference for CSS classes, layout patterns, interaction structures, and data visualization approaches. The current library includes chart, diagram, and comparison-card materials.

Templates are **materials**, not rigid constraints. The model may:
- Reference one material and adapt it
- Mix CSS/interaction patterns from multiple materials
- Generate a fully custom fragment when no material is relevant

## File Contract

Every template folder contains:

| File | Purpose |
|---|---|
| `template.md` | Material description (~20-30 lines): what's inside and what primitives are reusable |
| `widget-code.html` | Complete working fragment (style + content + optional script) |
| `fixture.json` | Sample data for browser testing |

## Machine-Readable Inventory

See `manifest.json` for the full list with `id`, `status`, `kind`, `scene`, and `intent` fields.
