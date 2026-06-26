# Funnel Bar Chart — Material Description

A funnel bar chart using horizontal bars to represent conversion rates and baseline percentages across ordered pipeline stages. widget-code.html contains:
- Card structure (title + description + stage flow label column + horizontal bar chart + footer conclusion)
- Static SVG fallback (horizontal bars + grid + stage labels + arrows), with Chart.js progressive enhancement
- Centered stage label column + gray down-arrows indicating flow direction
- Single brand color intensity gradient (darkest at first stage, progressively fading)
- Custom HTML tooltip (stage name + value + baseline percentage)

Reusable primitives:
- Chart.js horizontal bar configuration (indexAxis: 'y')
- Single-hue intensity gradient scale (`--chart-series-1` as base color, fading per stage)
- Percentage calculation mode with first row as 100% baseline
- Centered stage flow column + arrow connector visual
- Vertical grid lines (0% / 25% / 50% / 75% / 100%)

fixture.json provides sample data format.
