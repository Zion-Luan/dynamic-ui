# Comparison & Decision

## When to enter this scene

The user's intent involves any of the following decision-oriented needs:

- Option comparison (A vs B vs C)
- Technology selection (choosing between frameworks/tools/libraries)
- Risk summary (risk level + impact + mitigation matrix)
- Decision matrix (multi-dimensional weighted scoring)
- Pros/cons analysis (advantages and disadvantages side by side)

Typical trigger words: compare, selection, which is better, difference, recommend, trade-off, comparison, decision matrix, pros and cons.

## When to reject

Do NOT generate a visualization in the following cases — reply with Markdown text instead:

- Only 1 option exists (nothing to compare against)
- Comparison dimensions <= 1 (a single sentence suffices to explain the difference)
- User requests a detailed discussion rather than a summary-style comparison
- Cannot provide a clear recommendation or differentiation focus (all options are essentially identical across all dimensions)
- Options > 4 or dimensions > 7 (information density too high — a Markdown table is more appropriate)

## Generation principles

### Layout paradigms

**Decision Matrix**: suitable for >= 3 dimensions x >= 3 options
- Rows = comparison dimensions, Columns = options
- Cells use concise markers (icon + short text), no lengthy paragraphs
- Recommended option column uses brand border-left or brand header highlight

**Decision Cards**: suitable for 2-4 options x 3-5 dimensions
- One standalone card per option, arranged horizontally
- Each card lists shared dimensions as divider-separated rows
- Recommended option uses a badge/text cue only by default; hover/focus may emphasize any inspected card
- Start from `templates/comparison-cards` when the user wants product, source, vendor, plan, framework, or solution comparison cards
- Keep row content flat: label + right-aligned value or compact bar, without nested row cards

**Pros/Cons Layout**: suitable for binary choices with only 2 options
- Left/right or top/bottom split
- Positive items use green/brand markers, negative items use muted/warning markers

### Information density constraints

- Number of options: 2–4 (filter to the most representative if exceeded)
- Comparison dimensions: 3–5 (split into core and secondary dimensions if exceeded)
- Text per cell: <= 15 words or 1 icon + keyword
- If a dimension can be normalized, use a small bar with a value label; keep qualitative dimensions as text
- Tags are summary cues only: max 1-2 per option

### Recommendation and focus

- **Must have a clear recommendation** or **differentiation focus** — if all options are equal and no recommendation is possible, do not enter this scene
- Recommended option uses brand text/badge emphasis by default; reserve card border emphasis for hover/focus or explicit selection
- Non-recommended options maintain neutral surface
- Do not render a default selected card; recommendation is a badge/text cue, while hover/focus provides inspected-state emphasis
- Append 1–2 lines of recommendation rationale below the matrix/cards

### Trade-off presentation

- Do not show only advantages (pros) — trade-offs/cons must also be displayed
- Icons may distinguish: check mark (advantage) / warning triangle (trade-off) / neutral dot (neutral)
- Avoid one-sided presentation

### Style specifications

- Card/cell backgrounds: neutral surface (`--surface` or `--surface-muted`)
- Recommendation marker: `--brand` border or badge
- Text hierarchy: title uses `--text-title`, body uses `--text-body`, annotation uses `--text-caption`
- Keep labels short: dimension names 2–5 words, option titles 6–10 words
- Use `--radius-card` for option cards; internal rows should use dividers, bars, and spacing before adding containers

### Responsiveness

- 2 options: side by side (flex-row)
- 3–4 options: auto-wrap on narrow viewports (flex-wrap) or switch to vertical stacking
- Card layout uses grid with `minmax(0, 1fr)` and switches to vertical stacking on narrow viewports

## Reference materials

| Data relationship / Intent | Reference material | Usage notes |
|---|---|---|
| Product/source/vendor/plan comparison cards | `comparison-cards` | Use for 2-4 standalone option cards with divider rows, compact bars, max 2 tags, and a concise recommendation |
| Card container styles | `architecture-elements` (block styles) | Borrow neutral/brand block border, radius, and padding specifications |

## Composition guidelines

1. **Assess options x dimensions**: Decide whether to use Matrix, Cards, or Pros/Cons layout
2. **Determine recommendation/focus**: First clarify which option is recommended or which dimension is the key differentiator
3. **Build skeleton**:
   - Matrix → `<table>` or CSS Grid
   - Cards → `<div>` flex container
   - Pros/Cons → two-column flex or grid
4. **Fill content**: Each cell uses icon + keyword, no more than 15 words
5. **Apply emphasis**: Add brand border/badge to the recommended option; bold/highlight the key differentiating dimension
6. **Add conclusion**: 1–2 lines of recommendation summary below the diagram

## Acceptance criteria

- [ ] Number of options is within the 2–4 range
- [ ] Comparison dimensions are within the 3–5 range
- [ ] A clear recommendation marker or differentiation focus exists
- [ ] Recommended option uses brand color emphasis, others remain neutral
- [ ] Both advantages and trade-offs are shown (not one-sided)
- [ ] Cell text <= 15 words
- [ ] Labels/titles are concise (dimensions 2–5 words, option titles <= 10 words)
- [ ] Cards/containers have consistent border-radius (8px)
- [ ] Layout does not overflow on narrow viewports (has flex-wrap or responsive strategy)
- [ ] 1–2 lines of recommendation rationale or conclusion below the diagram
