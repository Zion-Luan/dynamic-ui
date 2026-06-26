# Radar Chart With Legend — Material Description

A filled-area radar chart displaying shape comparison of two series across multiple dimensions. widget-code.html contains:
- Card structure (title + description + square radar chart + legend + footer conclusion)
- Static SVG fallback (polar grid + angle labels + semi-transparent polygon areas + legend), Chart.js progressive enhancement
- Custom HTML tooltip (one row per series, color dot + label + value)
- Dual-series semi-transparent filled polygons (primary series slightly more opaque)
- `angleDataKey` defining the dimension axis

Reusable primitives:
- Chart.js radar configuration (`fill: true` + semi-transparent background color)
- SVG polar grid (polygon rings + angle labels)
- `--chart-series-1` / `--chart-series-2` color pair
- `axis: "xy"` two-dimensional hit testing (prevents diametrically opposite points from stealing tooltip)
- Square centered layout (`aspect-square max-h-[250px]`)

fixture.json provides sample data format.
