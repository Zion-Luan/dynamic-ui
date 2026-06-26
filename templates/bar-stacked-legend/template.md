# Stacked Bar Chart With Legend — Material Description

A stacked bar chart displaying the total and proportional breakdown of two components within each category. widget-code.html contains:
- Card structure (title + description + stacked bar chart + legend + footer conclusion)
- Static HTML fallback (stacked bars + grid + legend), with Chart.js progressive enhancement
- Rounded stacking behavior (bottom segment owns bottom corners, top segment owns top corners)
- Custom HTML tooltip (one row per segment, circular color dot + value)
- `seriesKeys` order defining the stacking sequence

Reusable primitives:
- Chart.js stacked bar configuration (`scales.x.stacked: true`)
- Rounded stacked bar visual effect
- `--chart-series-1` (bottom segment) / `--chart-series-2` (top segment) color scheme
- Legend synchronized with stacking order
- External tooltip handler + x-position clamp

fixture.json provides sample data format.
