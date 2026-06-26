# Data Visualization

## When to enter this scene

The user's intent involves **expressing numerical relationships** of any of the following types:

- Trends (time-series changes, growth/decay)
- Comparisons (grouped contrasts, rankings)
- Composition (proportions, stacked breakdown)
- Distribution (scatter, density)
- Correlation (multi-dimensional profiles, radar)
- Flow (directional paths, traffic distribution)
- Intensity (heatmaps, density matrices)
- Funnel (conversion rates, stage attrition)

Typical trigger words: trend chart, bar chart, pie chart, funnel chart, heatmap, comparison chart, visualize data, chart, plot.

## When to reject

Do NOT generate a visualization in the following cases — reply with Markdown text instead:

- Data points <= 2 with no comparative dimension (a single sentence suffices)
- User is asking for a single value (e.g., "what is xx")
- Data lacks a clear quantitative source and relies entirely on guesswork
- User explicitly requests plain text/table output

## Generation principles

### Chart.js loading and initialization

1. Load via UMD: `<script src="https://cdn.jsdelivr.net/npm/chart.js@4"></script>`, placed before the final script at the bottom of the widget
2. Canvas must be wrapped in a container with **explicit height** and `position: relative`
3. Chart instantiation config must include:
   ```js
   responsive: true,
   maintainAspectRatio: false
   ```
4. Default height: `clamp(220px, 32vw, 360px)`; maximum height 600px
5. Each widget may contain at most **2 canvases**

### Visible fallback

- Before `<script>` executes, retain a visible HTML/SVG fallback (e.g., a simple data table or text summary)
- Hide the fallback only after the chart is successfully created (`fallbackEl.style.display = 'none'`)

### Tooltip

- Disable Chart.js built-in canvas tooltip: `plugins.tooltip.enabled = false`
- Use an `external` handler to render an HTML tooltip (Shadcn-like styling)
- Tooltip DOM must reside inside the widget root; placement is constrained within chart bounds

### Animation

- Initial render animation: 120–220ms
- Hover transitions: <=120ms

### Color palette

- Series colors use `--chart-series-1` through `--chart-series-4` in order
- Beyond 4 series or an "other" category, use `--chart-other`
- Same data source uses brand chart-series color scale; >=4 sources may extend to brand-adjacent hues (blue/pink) — arbitrary colors are not allowed
- Two-series charts must ensure sufficient visual separation between colors

### Root selector

Initialize using a stable root selector:
```js
document.querySelector('[data-dynamic-ui-widget][data-template="..."]:not([data-mounted])')
```

## Reference materials

| Data relationship / Intent | Reference material | Usage notes |
|---|---|---|
| Trend (time series) | `line-trend` | Line + area gradient; multi-series overlay |
| Comparison — grouped | `bar-chart-multiple` | Grouped bar chart; suitable for 2-4 groups x multiple categories |
| Composition — stacked | `bar-stacked-legend` | Stacked bar chart + legend; shows contribution of each part |
| Composition — donut | `pie-donut-text` | Donut chart + center text; <=5 categories |
| Composition — label list | `pie-chart-label-list` | Pie chart + right-side label list; for many categories |
| Correlation / scatter | `scatter-chart` | Scatter plot; shows relationship between two variables |
| Multi-dimensional profile — legend | `radar-chart-legend` | Radar chart + legend; suitable for person/product profiles |
| Multi-dimensional profile — minimal | `radar-chart-lines-only` | Lines-only radar chart; <=3 dimension comparison |
| Intensity / density | `heatmap-chart` | Heatmap; rows/columns + color scale expressing density values |
| Funnel / conversion | `funnel-bar-chart` | Funnel bar chart; stage-by-stage attrition visualization |
| Flow / direction | `sankey-chart` | Sankey diagram; shows traffic paths and allocation |

## Composition guidelines

1. **Prefer a single chart**: If one material can fully express the user's intent, use that material's layout + interaction pattern directly
2. **Mixing is allowed**: The model may extract CSS patterns and interaction approaches from multiple materials to combine — it is not required to pick only one
3. **Supporting text**: Retain 1-2 lines of key insight text above or below the chart (e.g., max value, inflection point)
4. **Legend placement**: Embed the legend inline when data series <= 3; place it in a separate bottom or right-side area when > 3
5. **Number formatting**: Use abbreviations for large numbers (1.2K, 3.4M); percentages retain one decimal place

## Acceptance criteria

- [ ] Chart.js loaded correctly from CDN, no local dependencies
- [ ] Canvas container has explicit height and `position: relative`
- [ ] `responsive: true` + `maintainAspectRatio: false` are both set
- [ ] Visible fallback content exists, hidden only after chart creation
- [ ] Tooltip uses HTML external handler, not canvas built-in
- [ ] Series colors use CSS variables `--chart-series-*`, no hardcoded colors
- [ ] Animation durations comply with constraints (initial 120-220ms, hover <=120ms)
- [ ] Height does not exceed 600px
- [ ] Canvas count per widget <= 2
- [ ] Root selector uses the `[data-dynamic-ui-widget][data-template]:not([data-mounted])` pattern
