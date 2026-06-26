# Pie Chart Label List — Material Description

A pie chart with category labels displayed inside sectors, suitable for proportion display with short labels. widget-code.html contains:
- Card structure (title + description + square pie chart + footer conclusion)
- Static SVG fallback (pie sectors + embedded white text labels), Chart.js progressive enhancement
- Custom HTML tooltip (circular color dot + category + value)
- White text labels inside sectors (equivalent to Recharts LabelList behavior)
- `chartData` with fill token direct binding
- Seamless sectors with color-only hover feedback

Reusable primitives:
- Chart.js pie + datalabels plugin configuration (embedded labels)
- SVG pie fallback skeleton (sectors + centered text)
- `--chart-series-1` ~ `--chart-series-4` + `--chart-other` color scheme
- Square centered chart layout (`aspect-square max-h-[250px]`)
- Small sectors automatically omit labels, tooltip as fallback

fixture.json provides sample data format.
