# Material Catalog

Use this catalog before generating or composing a Dynamic UI widget. Materials are reusable examples, not rigid templates.

The goal is balanced control:
- Do check existing materials before custom drawing.
- Do borrow layout, CSS, interaction, tooltip, fallback, and token patterns.
- Do mix materials when that better fits the user's intent.
- Do generate custom fragments when no material fits, when a scene is methodology-driven, or when forcing a material would misrepresent the content.

## Selection Rule

Choose materials by user intent, not by loose topic keywords:

1. Parse what the user wants to express: trend, grouped magnitude, correlation, schedule, funnel, flow, heatmap, part-to-whole, profile, node relationship, option comparison, or local interaction.
2. Check this catalog and `templates/manifest.json`.
3. Confirm the candidate material folder exists and has `template.md`, `widget-code.html`, and `fixture.json`.
4. Read the selected material's `template.md` before borrowing from `widget-code.html` or `fixture.json`.
5. If no material fits, generate from the scene plus `references/*` contracts.

Invalid custom reasons:
- "Handwritten is faster."
- "This is simple."
- "A custom SVG is lighter."
- "I already know how to draw this."

Valid custom reasons:
- No ready material matches the intent.
- Every plausible material has an avoid rule or data boundary conflict.
- The scene is mechanism-driven and needs a unique diagram.
- Combining two material primitives is clearer than forcing one complete material.
- Markdown is clearer than a widget.

## Ready Materials

| Intent | Material | Use when | Avoid when |
|---|---|---|---|
| Trend over time | `templates/line-trend` | Continuous change across time points | Only one current value matters |
| Grouped magnitude comparison | `templates/bar-chart-multiple` | Two to four related series need comparison across the same x-axis | Continuous trend shape or stacked composition is the main story |
| Correlation scatter plot | `templates/scatter-chart` | Two numeric measures need correlation, clustering, or outlier inspection | Trend, exact category ranking, date/string scales, or thousands of points are required |
| Project schedule Gantt | `templates/gantt-chart` | Task timing, progress, dependencies, and critical path need one compact schedule view | Drag editing, resource allocation, baseline comparison, or more than eight tasks are required |
| Pipeline conversion bars | `templates/funnel-bar-chart` | Ordered stages need drop-off and baseline conversion context | Stages are independent categories, negative values matter, or a decorative funnel body is required |
| Flow magnitude Sankey | `templates/sankey-chart` | Weighted movement between staged nodes needs node/link inspection | Exact ranking, cyclic graphs, bidirectional edges, or dense many-to-many networks are required |
| Calendar activity heatmap | `templates/heatmap-chart` | Activity intensity should be scanned across row/column bins | Exact ranking, continuous trend shape, or multiple peer sources are the main story |
| Composition with center metric | `templates/pie-donut-text` | Category share should wrap around one meaningful total | Exact ranking or negative values are the main story |
| Stacked part-to-whole | `templates/bar-stacked-legend` | Series contribute to each category total | Direct side-by-side comparison matters more than totals |
| Part-to-whole label list | `templates/pie-chart-label-list` | A small category set needs slice labels in a compact pie chart | Exact ranking, long labels, center totals, or more than five categories are required |
| Radar profile comparison | `templates/radar-chart-legend` | Two peer sources need filled shape comparison across a small dimension set | Exact value ranking, long labels, or trend over time is the main story |
| Outline radar comparison | `templates/radar-chart-lines-only` | Two peer sources need no-fill shape comparison | Filled areas, exact value ranking, long labels, or trend over time is the main story |
| Option comparison cards | `templates/comparison-cards` | Two to four products, vendors, plans, sources, frameworks, or solution options need side-by-side trade-offs | A dense table, long prose, or more than four options is required |
| Horizontal node tree | `templates/tree-flow` | Modules, workflow nodes, or dependencies need a left-to-right hierarchy | Numeric magnitude, editable canvas behavior, drag/drop, zoom, or dense many-to-many relationships are required |
| Architecture primitives | `templates/architecture-elements` | Architecture or framework diagrams need reusable blocks, boundaries, and connector vocabulary | The final answer should render only the palette, or the intent is charting, exact ERD detail, or dense many-to-many relationships |

## Priority

When a prompt could match multiple materials:

1. Prefer the material that explains the focal point with the least transformation.
2. Prefer scene composition over a near-miss material.
3. Prefer prose over a widget when there is no visible focal point.
4. Keep explanation in the response text and keep the widget visual-first.
