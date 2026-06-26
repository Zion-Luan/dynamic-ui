# Sankey Chart — Material Description

A Sankey diagram displaying weighted flow distribution across 2-4 stages. widget-code.html contains:
- Card structure (title + description + SVG Sankey body + node labels + footer conclusion)
- Inline SVG implementation with vanilla JS layout/rendering; no external chart library
- Node columns + tapered weighted-width flow ribbons (cubic bezier paths)
- Hover linkage (highlights related nodes/flow bands, fades other elements)
- CSS hover/focus transitions for linked-node inspection

Reusable primitives:
- SVG Sankey layout pattern (nodes array + links array, d3-sankey style)
- Weighted stroke-width flow bands (with minimum readable width)
- Source node colors display at most 7 colors in order: `--brand`, `--chart-series-2`, `--accent`, `--chart-series-4`, `--accent-2`, `--warning`, `--chart-other`
- Outcome node colors display at most 7 colors in order: `--chart-series-4`, `--accent`, `--warning`, `--chart-series-2`, `--chart-series-3`, `--accent-2`, `--chart-other`
- These Sankey-specific source/outcome sequences take precedence over the generic chart-series order; do not introduce an 8th color
- Source and outcome node rectangles must use solid `currentColor` fills; do not tint them with transparent `color-mix()` fills
- Flow ribbon gradients use the standard stage-based 40%/70% treatment: source -> landing uses source 70% and landing/brand 40%; landing -> outcome uses landing/brand 40% and outcome 70%
- Node hover linkage (connected nodes/links remain, others dim)
- `nodeWidth` / `nodePadding` layout parameters

fixture.json provides sample data format.
