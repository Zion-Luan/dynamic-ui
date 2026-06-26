---
name: dynamic-ui
description: "Show visual content inline alongside your text response — diagrams, charts, interactive demos, comparisons. Use only when a compact visual makes the answer clearer. Not for websites, apps, reports, dashboards, or slides."
description_zh: "在文字回答旁边内联展示可视化内容 — 图表、架构图、交互 demo、对比分析。仅当紧凑可视化能让回答更清晰时使用。不用于网站、应用、报告、看板或幻灯片。"
description_ja: "テキスト応答にインラインで視覚コンテンツを表示 — 図表、アーキテクチャ図、インタラクティブデモ、比較。コンパクトな視覚化が回答を明確にする場合のみ使用。Web サイト、アプリ、レポート、ダッシュボード、スライドには使用しない。"
user-invocable: true
disable-model-invocation: false
---

# dynamic-ui — Inline Visualization

## Scope

Use when a compact inline visual makes the answer clearer — diagrams, charts, interactive demos, comparisons.

Do NOT use for standalone websites, apps, long reports, dashboards, slides, or when Markdown is sufficient.

## File Map

`{{SKILL_DIR}}` is the directory containing this `SKILL.md` file.

```
{{SKILL_DIR}}/
├── SKILL.md              ← Single entrypoint (this file)
├── scenes/               ← Scene guidance (one file per scene)
│   ├── data-visualization.md
│   ├── architecture-and-flow.md
│   ├── comparison-and-decision.md
│   ├── mechanism-explanation.md
│   └── micro-interaction.md
├── references/           ← Shared contracts and material routing
│   ├── rendering-contract.md
│   ├── content-guidelines.md
│   ├── svg-guide.md
│   ├── material-catalog.md
│   └── structure-sync.md
├── tokens/
│   └── visual-tokens.md  ← Full CSS token definitions (read on demand)
├── templates/            ← Material library (reusable primitive examples)
│   ├── manifest.json
│   └── <template-id>/
│       ├── template.md   ← Material description (20-30 lines)
│       ├── widget-code.html  ← Complete working example
│       └── fixture.json  ← Sample data
└── scripts/
    └── check-materials.mjs
```

## Tool Contract

You MUST call `PureShowWidget` to render the visual. Do not pass `mode` unless the runtime requires it; never choose `panel`.

## Rendering Contract

Full contract: read `{{SKILL_DIR}}/references/rendering-contract.md` before generating `widget_code`.

Rules:
- Output order: `<style>` → content HTML/SVG → `<script>` (only when interaction needed).
- No `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`, comments, or page shell.
- Token definitions at top of `<style>`, before component selectors.
- Emit runtime color tokens inside `widget_code`; do not rely on host app CSS for generated widget readability.
- Theme contract: sandbox sets `:root[data-widget-theme="light"|"dark"]`. Generated CSS must support light defaults and dark overrides with `:root[data-widget-theme="dark"]`; optional `@media (prefers-color-scheme: dark)` may be added only as standalone fallback.
- All theme-sensitive colors must reference CSS tokens: text, axes, borders, surfaces, chart series, connectors, labels, badges. Do not put hard-coded light-only colors in component selectors or SVG attributes.
- Scripts execute after streaming completes. Load external libs in final `<script>` from allowlisted CDNs only: `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`.
- Widget must remain useful if external library fails to load.
- Root element: `data-dynamic-ui-widget` + `data-template="<id>"`. Init via stable selector, set `data-mounted="true"` before binding. Scope all DOM queries to root.
- Do NOT use `document.currentScript`, `previousElementSibling`, or sibling traversal.
- No `position: fixed`, no inline `onclick`. Use `addEventListener` in final script block.
- `window.sendPrompt('...')` only for follow-up questions requiring model reasoning. Not for local UI.
- No nested scrolling. Body text ≥14px, never below 11px.

## Visual Design

Core principles:
- **Seamless** — Users shouldn't notice where the APP ends and your widget begins.
- **Flat** — No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.
- **Compact** — Show the essential inline. Explain the rest in text.
- **Separation** — Explanatory text goes in your response; visual evidence goes in the widget.

Token source: Read `{{SKILL_DIR}}/tokens/visual-tokens.md` for full CSS definitions.

**Theme adaptation**: Every widget must be readable in both light and dark host themes. Use light values in `:root`, override only changed tokens in `:root[data-widget-theme="dark"]`, then consume tokens everywhere. Treat `dark-blue` hosts as dark. Standalone exports without `data-widget-theme` must still be readable from light defaults.

**Brand baseline**: Purple is the default. Do not infer a non-purple theme from domain wording. Use another theme only when the user explicitly requests it.

**Surfaces**: Cards, chart panels, metric blocks, tables use `--surface` (neutral). Nested regions use `--surface-muted`. Never use brand/accent/semantic colors as card fills. Focus shown by border treatment only.

**Chart series**: Same-kind sources use `--chart-series-1` through `--chart-series-4`. Overflow/Other uses `--chart-other`. Do not use random rainbow or semantic colors for ordinary sources. For 4+ sources, expand into brand-adjacent hues (blue/pink) only. Two-source charts need visibly separated steps.

**Diagram colors**: Default diagrams are mostly neutral: `c-neutral` structure, one optional `c-brand` focal node/path, and at most one `c-accent` or semantic state color. If steps are peers, keep them neutral; do not color nodes by order, department, or category unless that distinction is the point.

**Connectors**: Default neutral `--text-muted` or `--border`. Use `--brand`/`--accent`/semantic only when the connector carries meaning, such as a critical path, selected flow, risk, failure, or explicit comparison path. Connector color should not merely mirror the source/target node. Flowchart connectors use gentle curves/rounded L-bends, `stroke-linecap="round"`, `stroke-linejoin="round"`.

**Radius**: `--radius` (8px) default, `--radius-card` (12px) for cards, `--radius-full` (999px) for pills/circles. No ad hoc values.

**Typography**: `--text-caption` (12px), `--text-body` (14px baseline), `--text-title` (16px), `--text-metric` (32px), `--text-code` (13px). No ad hoc font sizing.

## Content Rules

Every widget needs ONE visible focal point (recommendation, critical path, bottleneck, highest value, phase boundary, risk marker). Make it obvious with position, label, or one accent color.

Copy density:
- Node labels: 2-5 words. Card titles: 6-10 words. Subtitles: ≤5 words.
- Use sentence case. Code style only for identifiers/commands/paths.

Complexity budget:
- 1 focal point, 2-5 main nodes, 2-4 options/KPI/series, 1 interaction concept.
- Horizontal tier: max 4 boxes. For 5+ items: group, wrap, or split.
- Max 2 non-neutral meaning colors without legend.
- If content exceeds budget: summarize visually, put details in response text.
- When appropriate, combine multiple chart types in one widget to increase information density.

Structure primitives (prefer these over decoration):
- Cards with dividers, tags for status, simple SVG connectors, bars/dots/labels for data, tables for 3+ dimensions.

Avoid: hero sections, slide navigation, export buttons, kanban/editor controls, decorative illustration.

Data honesty: Label estimates as estimates. Round consistently. Show units. Never render maps — use bar/table/matrix by region instead.

## SVG Fundamentals

Full SVG geometry contract: read `{{SKILL_DIR}}/references/svg-guide.md` when the output contains SVG, connectors, flowcharts, architecture diagrams, structural diagrams, or mechanism illustrations.

ViewBox: Prefer `viewBox="0 0 720 H"`, `width="100%"`, `height="auto"`. Safe area ≥40 design units.

Text sizing: 14px for labels (est. 8px/char Latin), 12px for metadata (7px/char). Node width ≥ max(title_chars×8, subtitle_chars×7) + 24px padding. Chinese labels: keep shorter than available width.

Connectors: `fill="none"` on every path/polyline. Route around unrelated nodes. Stop at node edges. Max 2 connector styles per diagram.

Common checks before output:
- Compute viewBox height from lowest element + padding.
- All content inside x=0..720.
- Every text label fits with padding.
- No connector passes through unrelated nodes.
- Flowchart nodes use rounded rectangles; diamonds/polygons use softened paths.

## Reference Workflow

Before generating `widget_code`:

1. Decide whether an inline visual is clearer than Markdown. If not, skip the widget.
2. Read `references/rendering-contract.md` and `references/content-guidelines.md`.
3. Route to one scene file from the table below.
4. Read `tokens/visual-tokens.md` for runtime token values and color limits.
5. Check `references/material-catalog.md` and `templates/manifest.json` before writing custom HTML, SVG, or chart code.
6. If borrowing a material, read that material's `template.md`; use `widget-code.html` and `fixture.json` as examples, not rigid output.
7. If generating a custom fragment, keep the concrete reason clear: no ready material fits, a material avoid rule applies, the scene is mechanism-driven, or a mixed composition is clearer.
8. If generating SVG, also apply `references/svg-guide.md`.

Materials are examples. You may mix CSS, layout, fallback, tooltip, and interaction patterns from multiple materials when that fits the user's intent better than a single fixed template.

## Scene Router

Read the user's intent, then route to ONE scene file:

| User intent | Scene file |
|---|---|
| Numeric trends, magnitude comparison, composition/proportion, distribution, flow intensity, heatmap density | `scenes/data-visualization.md` |
| Module relationships, dependency maps, flowcharts, state transitions, call chains, schedules | `scenes/architecture-and-flow.md` |
| Option comparison, tech selection, risk summary, decision matrix | `scenes/comparison-and-decision.md` |
| Explain principles, physical/abstract mechanisms, causal chains | `scenes/mechanism-explanation.md` |
| Local interaction demos, parameter switching, state changes | `scenes/micro-interaction.md` |

Workflow:
1. Determine if a compact visual is clearer than Markdown. If not, skip.
2. Route to the matching scene file.
3. Follow scene guidance: read generation principles, check available materials, compose output.
4. Apply the shared hard gates from `references/` and the token contract from `tokens/visual-tokens.md`.
5. Materials in `templates/<id>/widget-code.html` are reference — take CSS classes, layout patterns, fallback, tooltip, and interaction structures as needed. You can mix from multiple materials.
