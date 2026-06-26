# Pie Chart Donut with Text — Material Description

A donut chart with a center metric display, where sectors represent category proportions. widget-code.html contains:
- Card structure (title + description + donut chart + center metric + legend + footer conclusion)
- Static SVG fallback (donut sectors + center value + legend), Chart.js progressive enhancement
- Custom HTML tooltip (circular color dot + category label + value)
- `chartData` with fill token direct binding to sector colors
- Center area displaying total sum value + unit label

Reusable primitives:
- Chart.js doughnut configuration with color-only hover feedback
- SVG donut static fallback (`stroke-dasharray` sector rendering, no visible segment gaps)
- `--chart-series-1` ~ `--chart-series-4` sector color scheme + `--chart-other`
- Center metric typography (large number + label below)
- Compact legend (must display when 3+ sectors)

fixture.json provides sample data format.
