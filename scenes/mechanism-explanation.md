# Mechanism Explanation

Shared contracts: apply `references/rendering-contract.md`, `references/content-guidelines.md`, `references/svg-guide.md`, and `tokens/visual-tokens.md`. Check `references/material-catalog.md` only for reusable primitives; this scene usually needs custom composition.

## When to enter this scene

The user's intent is to **understand how something works**, involving any of the following types:

- Physical processes (heat conduction, electromagnetic fields, fluid dynamics, optics, mechanics)
- Abstract mechanisms (algorithm internals, protocol handshakes, scheduling strategies, data pipelines)
- Causal chains (the internal path by which event A leads to result B)
- Conceptual models (attention mechanisms, GC collection process, lock contention, cache coherence)
- State evolution (how internal system state changes with input/time)

Typical trigger words: principle, mechanism, how it works, internal process, under the hood, why does this happen.

**Distinction from architecture-and-flow**: The architecture scene shows "relationships between components"; the mechanism scene shows "how a single thing operates internally."

## When to reject

Do NOT generate a visualization in the following cases — reply with Markdown text instead:

- The mechanism can be explained clearly in 3 sentences with no spatial/temporal dimension
- User requests a code implementation rather than a conceptual explanation
- The concept is too abstract to visualize (e.g., a pure mathematical proof)
- Dynamic simulation is needed but the widget environment cannot support the required complexity

## Generation principles

### Core methodology: Mechanism First

**Draw the mechanism itself, not "a diagram about the mechanism"**

- Wrong approach: Drawing a box labeled "Hash Function" with an arrow pointing to "Output"
- Correct approach: Drawing a key being hash-mapped to a specific position in a bucket array, showing how collisions are stored via chaining

### Physical process vs Abstract mechanism

| Type | Visual language | Typical elements |
|------|----------------|------------------|
| Physical | Cross-sections, field lines, pressure gradients, heat flow, molecular interactions | Gradient fills, arrow fields, particles |
| Abstract | Attention matrices, scheduling queues, protocol timelines, pipeline stages | Grids, queue containers, timeline axes, pipes |

### Composition order (outside-in)

1. **Outline/boundary** — Draw the outer shape or system boundary first
2. **Internal structure** — Fill in internal components/layers
3. **Input/Output** — Annotate entry and exit paths
4. **State indicators** — Use color/size/position to express current state
5. **Labels** — Add concise labels last

### Color and meaning

- **Warm tones** (red/orange/yellow) = active / high temperature / high energy / high frequency
- **Cool tones** (blue/cyan/purple) = static / low activity / low energy / cooling
- **Gradients are used only for continuous variables** (temperature, pressure, capacity, concentration) — not for categorical distinctions
- Non-continuous category distinctions use chart-series colors or brand/accent from the token system
- Background remains neutral to let the mechanism stand out

### Annotation specifications

- Use short nouns or verb phrases (e.g., "compress", "distribute", "reclaim")
- **Explanatory text goes in the response text** — only place positioning labels in the diagram
- If numbered steps are needed, use circled numbers (1 2 3), limited to <= 6 steps

### Animation principles

- **Add animation only when the mechanism has inherent motion** (e.g., rotation, flow, oscillation)
- Prefer `stroke-dashoffset` animation (flow sensation) or `opacity` pulse (flash/activation)
- Avoid transform displacement animations (may cause layout jitter in the widget environment)
- Animations must be wrapped in `@media (prefers-reduced-motion: no-preference)`

### SVG practices

- viewBox `0 0 720 H`, width="100%", height="auto"
- Safe area >= 40 units
- Use `<defs>` to define gradients, filters, markers, and other reusable elements
- Group structures using `<g>` with semantic class/id attributes

## Reference materials

| Data relationship / Intent | Reference material | Usage notes |
|---|---|---|
| — | No dedicated template | This scene is methodology-driven; each mechanism requires custom SVG/HTML |

> Do not reference fixed templates. Each mechanism's visual representation is unique — build from scratch following the composition order and color rules above.

## Composition guidelines

1. **Identify mechanism type**: Physical or Abstract? This determines the visual language
2. **Determine key frames**: Is this a "static cross-section" or a "process sequence"?
   - Single-frame cross-section → one SVG diagram
   - Multi-stage process → 2–3 side-by-side state frames (left→right or top→bottom), or a single diagram with numbered steps
3. **Compose**: Build layer by layer following "outline → structure → I/O → state → labels"
4. **Color**: Choose warm/cool based on physical quantity or activity level; use gradients for continuous variables
5. **Simplify**: Remove details that do not aid understanding; if details are important, split into "overview + zoomed detail"
6. **Verify**: If all labels were removed, would the graphic still convey the general meaning?

## Acceptance criteria

- [ ] Draws the mechanism itself, not just "boxes + labels"
- [ ] Composition follows: outline → internal structure → I/O → state → labels
- [ ] Colors carry meaning (warm = active, cool = static, gradient = continuous variable)
- [ ] Annotations use short nouns/verb phrases; detailed explanations are in the response text
- [ ] Step numbering <= 6
- [ ] Animation is used only when the mechanism has inherent motion, wrapped in prefers-reduced-motion
- [ ] SVG viewBox format is correct, width="100%"
- [ ] Safe area >= 40 units
- [ ] No unnecessary decorative elements (every visual element conveys information)
- [ ] Graphic still conveys general structure when labels are removed
