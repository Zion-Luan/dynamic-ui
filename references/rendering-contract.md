# Rendering Contract

This file is the hard runtime contract for Dynamic UI widgets. It is intentionally narrow: it protects the host runtime, theme readability, and first paint. Scene files decide what to draw.

## Hard Gates

Every `widget_code` must:
- Be an inline fragment only: `<style>` first, content HTML/SVG second, final `<script>` only when needed.
- Exclude `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`, meta tags, comments, routers, export flows, page shells, and app shells.
- Define required CSS tokens at the top of the first `<style>` block before component selectors.
- Stay useful when external JavaScript fails, including chart libraries.
- Use `data-dynamic-ui-widget` and `data-template="<id-or-custom-scene>"` on the root element.
- Initialize with a stable root selector and scope all DOM reads/writes to that root.
- Set `data-mounted="true"` before binding events or loading libraries.
- Avoid `document.currentScript`, `previousElementSibling`, sibling traversal, global selectors, inline event handlers, and `position: fixed`.

## Theme Contract

The host exposes theme through:

```css
:root[data-widget-theme="light"]
:root[data-widget-theme="dark"]
```

Generate light defaults in `:root`, add dark overrides in `:root[data-widget-theme="dark"]`, and consume tokens everywhere. All theme-sensitive colors must reference tokens: text, axes, borders, surfaces, chart marks, legend swatches, labels, badges, connectors, and SVG fills/strokes.

Do not put hard-coded light-only colors such as `#fff`, `#000`, `#333`, or `rgba(0,0,0,...)` inside component selectors or SVG attributes unless defining tokens.

## Script Safety

Use one final script block. Bind events with `addEventListener` or event delegation inside the root.

Allowed local behavior:
- Toggle, filter, sort, step, hover, focus, inspect, or simple calculations.

Use `window.sendPrompt('...')` only when the next action requires model reasoning or a new assistant response. Do not use it for local UI behavior.

## Chart Runtime

Chart.js is allowed only as progressive enhancement:
- Load from `https://cdn.jsdelivr.net/npm/chart.js@4` in the final script phase.
- Put `<canvas>` inside a wrapper with explicit height and `position: relative`.
- Use `responsive: true` and `maintainAspectRatio: false`.
- Keep a visible HTML/SVG fallback or readable KPI summary before the script runs.
- Hide fallback only after the chart instance is created.
- Disable the default Chart.js canvas tooltip for shadcn-like charts and use a widget-scoped HTML tooltip.
- Keep tooltip DOM inside the widget root and clamp placement within chart bounds.
- Use at most two canvases in one inline widget.

## Motion

Motion is optional. Use it only when it clarifies state, flow, or interaction.

Prefer `transform`, `opacity`, `stroke-dashoffset`, or `animation-play-state`. Wrap continuous or decorative motion in `@media (prefers-reduced-motion: no-preference)`. Keep chart first-render animation around 120-220ms and hover/active transitions at or below 120ms.

Avoid heavy filters, blur, glow, 3D transforms, physics engines, long loops, and layout animations that repeatedly change widget height.

## Flexible Choices

These are not hard gates:
- Exact layout skeleton.
- Whether one or multiple materials are mixed.
- Whether the final visual is SVG, HTML, canvas-enhanced, or a custom fragment.
- Whether a chart is static when the scene does not need hover inspection.

Keep those choices in the scene file and material guidance.
