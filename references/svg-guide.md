# SVG Guide

Use this guide whenever `widget_code` contains SVG, connectors, flowcharts, architecture diagrams, structural diagrams, or mechanism illustrations.

## ViewBox And Safe Area

Do:
- Prefer `viewBox="0 0 720 H"` for architecture, flow, and structural diagrams.
- Use `width="100%"` and `height="auto"` unless a wrapper intentionally controls height.
- Keep a safe area of at least 40 design units or 6% of the viewBox width, whichever is larger.
- Set `H` from the lowest visible shape, text baseline, or connector plus bottom padding.
- Keep all visible content inside `x=0..720` and the computed `H`.

Do not:
- Use negative coordinates.
- Shrink the viewBox to hide long labels.
- Leave large unexplained blank space below the final element.
- Depend on clipping or background fills to hide invalid geometry.

## Text Sizing

SVG text does not wrap automatically.

Rules:
- Use 14px for normal SVG labels and 12px for metadata/subtitles.
- Estimate Latin text at roughly 8px per character for 14px, and 7px for 12px.
- Keep Chinese labels shorter than the available node width rather than relying on exact wrapping.
- Add at least 24px horizontal padding inside nodes.
- Use `<tspan>` only for deliberate short two-line labels, not paragraph text.

Node width rule:

```text
width >= max(title_chars * 8, subtitle_chars * 7) + 24
```

Increase the estimate by 30-50% for code-like strings, math symbols, long identifiers, or mixed scripts.

## Connectors

Do:
- Add `fill="none"` to connector `<path>` and `<polyline>` elements.
- Route connectors around unrelated nodes and labels.
- Stop connectors at node edges or visible ports.
- Use gentle curves or rounded L-bends where possible.
- Set `stroke-linecap="round"` and `stroke-linejoin="round"`.
- Use tokenized neutral connector colors by default: `--text-muted` or `--border`.
- Use `--brand`, `--accent`, or semantic strokes only when the connector itself carries focus, status, risk, or comparison meaning.

Do not:
- Let arrows pass through unrelated boxes or labels.
- Hide line intersections with node fills.
- Use hard 90-degree turns when a rounded bend communicates the same route.
- Use more than two connector styles in one compact diagram unless there is a concise legend.
- Apply diagram node classes such as `c-brand` or `c-warning` to connector paths.

## Flowchart Geometry

Checklist:
- Keep most flows to 3-5 main steps.
- Use one main direction, usually left-to-right or top-to-bottom.
- Keep at least 60px between sequential nodes when arrows need labels or turns.
- Use rounded rectangles for process nodes.
- Use pill shapes for start/end nodes.
- Make decision or special shapes softened: rounded-corner paths, capsules, ellipses, or subtly rounded custom paths.
- Prefer a stepper or linear flow with a return marker for cycles; avoid dense rings.

## Structural Geometry

Checklist:
- Use larger rounded rectangles for containers and smaller rectangles for inner regions.
- Keep at least 20px padding between container edges and inner regions.
- Use no more than 2-3 nesting levels.
- Put external inputs/outputs outside the container.
- Use `c-neutral` for most containers and nodes.
- Use `c-brand`, `c-accent`, or semantic classes only for labeled focus/status meaning.

## Final SVG Checks

Before output:
- The rightmost visible element is inside the safe area.
- The lowest visible element and text baseline fit inside `H`.
- Every text label fits with padding.
- Every connector has a purpose and avoids unrelated nodes.
- Every connector path/polyline has `fill="none"`.
- Same-tier boxes fit within the viewBox before connectors are added.
- The diagram remains readable at inline chat width.
