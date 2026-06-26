# Bar Chart Multiple — Material Description

A grouped bar chart displaying magnitude comparison of two related series by month/category. widget-code.html contains:
- Card structure (title + description + chart + legend + footer conclusion)
- Static SVG fallback (two bar groups + grid + x-axis labels + legend), with Chart.js progressive enhancement
- Custom HTML tooltip (`.chartTooltip`, index mode showing both series values for the same group)
- `chartData` + `chartConfig` dual-series data embedding
- Compact legend distinguishing two series

Reusable primitives:
- Chart.js grouped bar configuration (`interaction.mode: "index"`)
- SVG static fallback skeleton (grouped bars + grid lines + legend)
- `--chart-series-1` / `--chart-series-2` high-contrast color pair
- External tooltip handler pattern
- Three-character month abbreviation x-axis ticks

fixture.json provides sample data format.
