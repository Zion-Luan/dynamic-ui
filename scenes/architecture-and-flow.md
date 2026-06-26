# Architecture & Flow

## When to enter this scene

The user's intent involves visualizing any of the following structural relationships:

- Module relationships (how system components are organized and depend on each other)
- Dependency graphs (reference directions between packages/services/classes)
- Flowcharts (business processes, algorithm steps, decision branches)
- State transitions (state machines, lifecycle changes)
- Call chains (request propagation paths across services)
- Schedule progress (task timelines, Gantt charts)

Typical trigger words: architecture diagram, flowchart, dependency graph, call chain, state machine, Gantt chart, timeline, flow, diagram.

## When to reject

Do NOT generate a visualization in the following cases — reply with Markdown text instead:

- Nodes <= 2 with a single relationship (a sentence suffices)
- Pure linear list with no branching or parallelism (a Markdown ordered list is clearer)
- User requests a code implementation rather than a visual representation
- Relationships are too complex (>20 nodes) making single-screen readability impossible — in this case, suggest layering or an interactive approach

## Generation principles

### SVG canvas specification

- Preferred viewBox: `0 0 720 H` (H calculated based on content), set `width="100%"` + `height="auto"`
- Safe area: >= 40 design units from edges or 6% of viewBox width (whichever is larger)
- Do not use fixed pixel width; ensure responsive scaling

### Text size and node width

| Purpose | Font size | Estimated width |
|---------|-----------|-----------------|
| Labels/titles | 14px | ~8px/char |
| Metadata/annotations | 12px | ~7px/char |

Node width calculation: `max(title_chars * 8, subtitle_chars * 7) + 24`

### Flowchart rules

- Main path: 3–5 steps, maintain a single direction (horizontal or vertical, never mixed)
- Spacing between nodes >= 60px
- Process nodes use rounded rectangles (rx=8)
- Decision nodes use softened diamonds (rounded corners rather than sharp points)
- Start/end nodes use pill shapes

### Connector specifications

- `fill="none"`, use `stroke` rather than solid fill
- Paths route around unrelated nodes, never crossing through them
- Use gentle curves or rounded L-bends (`stroke-linejoin="round"`, `stroke-linecap="round"`)
- Connector colors:
  - Default: `--text-muted` or `--border-default` (neutral)
  - Use `--brand` or `--accent` **only** for paths with semantic meaning

### Structural containers

- Grouping containers use larger rounded rects with internal padding >= 20px
- Maximum 2–3 nesting levels; beyond that, split into multiple diagrams or use expand/collapse
- Container borders use dashed style to differentiate from node solid lines

### Label conciseness

- Node labels: 2–5 words
- Connector labels: 1–3 words (obvious relationships may be omitted)
- Detailed explanations go in the response text outside the diagram

## Reference materials

| Data relationship / Intent | Reference material | Usage notes |
|---|---|---|
| Module/dependency tree | `tree-flow` | Horizontal node-tree layout; suitable for dependency hierarchies <= 4 levels |
| System/cloud/service architecture | `architecture-diagram` | Complete skeleton with boundaries, request path, async/auth paths, external systems, data layer, legend, and summary cards |
| Module components and boundaries | `architecture-elements` | Provides neutral/brand/boundary/external block styles + connector styles (neutral solid, brand dashed, neutral dashed, labeled edge) |
| Schedule/timeline | `gantt-chart` | Timeline + bar layout; suitable for task/milestone progress display |

### architecture-elements detailed style reference

- **Block types**: neutral (regular module), brand (core module), boundary (logical boundary container), external (external system)
- **Connector types**: neutral solid (standard call), brand dashed (highlighted data flow), neutral dashed (weak dependency), labeled edge (annotated connection)

### architecture-diagram detailed layout reference

- **Role taxonomy**: external actor/system, edge/gateway, runtime service, async queue/message bus, data store, observability/audit store, boundary/container.
- **Layering order**: background grid and boundaries first, connectors second, nodes and labels last. This keeps arrows behind boxes.
- **Connector routing**: start/end at node edges or visible ports, use rounded L-bends for multi-hop paths, and avoid unrelated nodes.
- **Masking rule**: node boxes must use opaque token surfaces so connectors behind nodes do not show through.
- **Spacing rule**: leave at least 40 design units between vertically stacked service boxes when inserting a queue/message bus in the gap.
- **Legend rule**: place legends outside all region, cluster, data, or security boundaries; expand viewBox height if needed.

## Composition guidelines

1. **Determine direction**: First decide whether information flows top-to-bottom (hierarchy/process) or left-to-right (time/dependency chain)
2. **Select primary material**:
   - Hierarchical relationships → `tree-flow` as skeleton
   - Complete system/cloud/service architecture → `architecture-diagram` as skeleton
   - Component palette or custom framework diagram → `architecture-elements` as primitives
   - Time dimension → `gantt-chart` as skeleton
3. **Mix styles**: You may render `tree-flow` nodes using `architecture-elements` block styles; you may attach a simplified flow below a Gantt chart
4. **Color restraint**: Use at most 3 semantic colors across the entire diagram (neutral + brand + 1 accent) to avoid a rainbow effect
5. **Legend**: If more than 2 connector styles or more than 2 block styles are used, add a concise legend outside all boundary boxes

## Acceptance criteria

- [ ] viewBox uses `0 0 720 H` format, width="100%"
- [ ] Safe area >= 40 units or 6% of viewBox width
- [ ] Text font sizes use only 14px (labels) and 12px (metadata)
- [ ] Node width >= estimated text width + 24
- [ ] Flow steps <= 5 (main path); node spacing >= 60px
- [ ] Connectors have fill="none", use round linejoin/linecap
- [ ] Connectors do not cross through unrelated nodes
- [ ] Node fills are opaque enough to mask connectors drawn behind them
- [ ] Legend, when present, sits outside all boundary boxes
- [ ] Semantic colors are used correctly (neutral as default, brand only for highlighted paths)
- [ ] Nesting levels <= 3
- [ ] Node labels <= 5 words, connector labels <= 3 words
