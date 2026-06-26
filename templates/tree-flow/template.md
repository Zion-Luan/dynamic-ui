# Tree Flow — Material Description

A horizontal node tree/flowchart displaying hierarchical and directional relationships between modules (React Flow style). widget-code.html contains:
- Pure static SVG implementation (no JS dependencies), with background grid
- Node blocks (neutral regular nodes + brand focal nodes) with clean edges and no visible handle dots
- Smoothstep rounded orthogonal connector lines (not straight diagonals)
- Animated dashed stroke animation (`prefers-reduced-motion` compatible)
- Optional edge labels (1-3 words, pill style)

Reusable primitives:
- SVG `viewBox="0 0 720 H"` canvas convention
- Node styles (neutral gray + brand purple, rounded rectangles without visible handles)
- Smoothstep edge path drawing pattern (rounded orthogonal paths)
- `--brand` primary connection + `--text-muted` secondary connection
- `animated` dashed stroke-dashoffset CSS animation
- Left-to-right default direction (unless explicitly requested top-to-bottom)

fixture.json provides sample data format (nodes + edges arrays).
