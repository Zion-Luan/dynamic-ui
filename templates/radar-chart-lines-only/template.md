# Radar Chart Lines Only — Material Description

An outline-only radar chart without filled areas, displaying shape comparison of two series (clearer separation). widget-code.html contains:
- Card structure (title + description + square radar chart + legend + footer conclusion)
- Static SVG fallback (polygon grid + angle labels + outline polylines + legend), Chart.js progressive enhancement
- Custom HTML tooltip (one row per series, color dot + label + value)
- Unfilled polygons (`fill: false`), stroke lines only
- No radial spokes (matching Shadcn `PolarGrid radialLines={false}`)

Reusable primitives:
- Chart.js radar configuration (`fill: false` + polygon grid)
- SVG radar outline fallback (stroke polygon only, no fill)
- `--chart-series-1` / `--chart-series-2` color pair
- Hover node style (surface fill + series-colored stroke)
- Differs from `radar-chart-legend` only in the fill property

fixture.json provides sample data format.
