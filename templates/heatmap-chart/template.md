# Heatmap Chart — Material Description

A calendar heatmap displaying activity intensity distribution across time cells (similar to GitHub contribution graph). widget-code.html contains:
- Card structure (title + description + SVG heatmap grid + month/week axes + legend + footer conclusion)
- Pure static SVG implementation (no Chart.js), JS only for tooltip and legend interaction
- 5-level intensity color scale (empty → low → medium → high → peak)
- Interactive legend (hover highlights matching level, click locks filter)
- Custom HTML tooltip (color dot + date + count + level label)

Reusable primitives:
- 5-level `levelStyles` color scale system (`--surface-muted` → `--chart-series-1`)
- SVG rectangular cell grid layout (columns = weeks, rows = weekdays)
- `data-level` attribute-driven CSS interaction (dim/highlight)
- Less → More compact legend bar
- `color-mix(in srgb, ...)` intermediate intensity color generation

fixture.json provides sample data format.
