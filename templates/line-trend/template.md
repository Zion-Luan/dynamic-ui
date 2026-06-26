# Line Trend Chart — Material Description

A single-series line chart displaying trend changes over continuous time points. widget-code.html contains:
- Card structure (title + time range description + chart body + footer conclusion)
- Static SVG fallback (with trend line, grid, data nodes), Chart.js progressive enhancement
- Custom HTML tooltip (`.chartTooltip`, circular color dot + label + value)
- `chartData` + `chartConfig` data embedding pattern
- Footer trend summary + detail explanation

Reusable primitives:
- Chart.js line chart configuration pattern (`tooltip.enabled: false` + external handler)
- SVG static fallback skeleton (line + grid + node dots)
- `--chart-series-1` primary series color token
- `clamp(220px, 32vw, 320px)` chart height constraint
- `[data-dynamic-ui-widget][data-template]` root node targeting pattern

fixture.json provides sample data format.
