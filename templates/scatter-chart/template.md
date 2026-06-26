# Scatter Chart — Material Description

A scatter chart displaying correlation/clustering/outlier distribution across two numeric dimensions, with optional bubble size encoding a third dimension. widget-code.html contains:
- Card structure (title + description + scatter chart + legend + footer conclusion)
- Static SVG fallback (grid + axis titles + scatter points + legend), Chart.js progressive enhancement
- Custom HTML tooltip (point label + color dot + x/y values + optional size)
- Multi-series data model (`data[].id` + `data[].data[]`)
- Dual-axis grid + axis titles (scatter charts must label both axes)

Reusable primitives:
- Chart.js scatter configuration + nearest-point hit radius
- Optional `sizeKey` bubble size mapping (bounded radius range)
- `--chart-series-1` ~ `--chart-series-4` series coloring + `--chart-other`
- Explicit `scale.x` / `scale.y` domain constraints
- SVG static fallback (circle dots + grid + axis titles)

fixture.json provides sample data format.
