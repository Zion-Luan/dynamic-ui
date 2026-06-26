# Micro Interaction

Shared contracts: apply `references/rendering-contract.md`, `references/content-guidelines.md`, `references/material-catalog.md`, and `tokens/visual-tokens.md`.

## When to enter this scene

The user's intent involves a **locally interactive demonstration**:

- Parameter toggling (toggle between different configs/states to see effects)
- State change display (before/after, step-by-step)
- Data filtering/sorting (switching perspectives on existing data)
- Local animation demos (hover effects, expand/collapse)
- Interactive comparison (tab-switching between different views)

Typical trigger words: interactive demo, toggle to see, clickable, toggle, operable, interactive, demo, try it out.

**Distinction from data-visualization**: Data-viz focuses on chart rendering; micro-interaction focuses on user-operable UI fragments.

## When to reject

Do NOT generate an interactive widget in the following cases — use Markdown or static visualization instead:

- Content can be fully conveyed without user interaction
- Multi-page navigation is needed (widget environment does not support routing)
- Interaction logic depends on external APIs or real-time data sources
- Form submission/persistent storage is required
- Interaction concepts > 1 independent control group (complexity overflow)

## Generation principles

### Core constraint: ONE Control Concept

Each widget contains only **one local control concept**:

- One toggle (on/off)
- One slider (continuous value adjustment)
- One tab group (view switching)
- One stepper (step forward/backward)
- One filter (select/deselect filtering)

Do not combine multiple independent interaction concepts in the same widget.

### JavaScript state management

- Use widget-internal JavaScript to manage local state (filter, sort, toggle, step, highlight)
- All state changes are reflected via DOM manipulation, no framework dependency
- State is stored in closure variables or `data-*` attributes

### sendPrompt usage rules

```js
window.sendPrompt('...')
```

- **Use only for**: Follow-up questions that require model reasoning (e.g., "explain the detailed principle behind this option")
- **Do NOT use for**: Local UI behaviors (tab switching, expand/collapse, data filtering)
- Decision criterion: Does the result of this action require LLM involvement? If not → handle with local JS

### Streaming compatibility

- **Do NOT use `display:none` to hide content** — all content must be visible during the streaming phase
- Initial state must render as fully visible HTML (e.g., the first step of a stepper, the default tab panel)
- The final `<script>` block handles interaction enhancement (progressive enhancement pattern)
- If JS does not execute, the widget should still display meaningful static content

### Event binding specifications

```javascript
// Correct: bind uniformly in the final script block
const root = document.querySelector('[data-dynamic-ui-widget][data-template="..."]:not([data-mounted])');
root.querySelectorAll('[data-action]').forEach(el => {
  el.addEventListener('click', handleAction);
});

// Wrong: inline onclick
// <button onclick="toggle()">  ← prohibited
```

- No inline event handlers (`onclick`, `onchange`, etc.)
- One final `<script>` block handles all event binding
- Use `querySelectorAll` + `addEventListener` pattern
- Prefer event delegation (listen on container, dispatch via `e.target.closest('[data-action]')`)

### Animation specifications

- Preferred properties: `transform`, `opacity`, `stroke-dashoffset`
- Transition duration: 80–200ms
- Must be wrapped in `@media (prefers-reduced-motion: no-preference)`:

```css
@media (prefers-reduced-motion: no-preference) {
  .panel { transition: opacity 150ms ease, transform 150ms ease; }
}
```

- Prohibited: `height` auto transition (poor performance), layout-triggering animations
- Collapse/expand uses `max-height` + `overflow: hidden` or `grid-template-rows: 0fr/1fr`

### Accessibility

- Interactive elements must have a `role` or semantic HTML tag (`<button>`, `<input>`)
- Tab groups use `role="tablist"` + `role="tab"` + `aria-selected`
- Toggles use `<button aria-pressed="true/false">`
- Keyboard reachable: focusable elements are reachable via Tab

## Reference materials

| Data relationship / Intent | Reference material | Usage notes |
|---|---|---|
| — | No dedicated template | This scene is custom-built per specific interaction requirement using HTML/JS fragments |

## Composition guidelines

1. **Determine interaction type**: What control does the user need? (toggle / slider / tabs / stepper / filter)
2. **Design initial state**: Render a fully visible default view (meaningful even without JS)
3. **Plan state changes**: List user actions → corresponding DOM changes (which elements show/hide/highlight)
4. **Write HTML**:
   - All panels/state content are rendered in the DOM
   - Inactive panels are controlled via class for opacity/visibility (not display:none)
   - Interactive controls carry `data-action` attributes
5. **Write Script**:
   - Get root → bind events → manage state → update DOM
   - After execution, set `root.setAttribute('data-mounted', '')`
6. **Add animation**: Add transitions only at state-switch points, wrapped in reduced-motion media query

## Acceptance criteria

- [ ] Widget contains only one interaction control concept
- [ ] No inline event handlers (onclick/onchange etc.)
- [ ] Single final script block handles all event binding
- [ ] Uses querySelectorAll + addEventListener pattern
- [ ] Initial state is fully visible (streaming-friendly)
- [ ] No display:none used for content hiding
- [ ] sendPrompt is used only for scenarios requiring model reasoning
- [ ] Animations use transform/opacity, wrapped in prefers-reduced-motion
- [ ] Widget displays meaningful static content without JS
- [ ] Interactive elements have correct ARIA attributes or semantic HTML
- [ ] Root selector uses the `[data-dynamic-ui-widget][data-template]:not([data-mounted])` pattern
- [ ] Script sets the `data-mounted` attribute after execution
