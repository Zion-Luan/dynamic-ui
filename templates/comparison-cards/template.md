# Comparison Cards - Material Description

A clean comparison card group for 2-4 options across shared decision dimensions. widget-code.html contains:
- Three standalone option cards arranged horizontally with one neutral summary footer
- Card header primitives (badge, title, metadata)
- Compact comparison rows using dividers instead of nested row containers
- Numeric/text rows aligned to the right; measurable rows use short horizontal bars
- Tag row limited to 1-2 quick takeaways per option and aligned to the same content baseline as the header and metric rows
- Recommended state is shown through badge text; hover/focus can emphasize any card

Reusable primitives:
- Responsive card grid for 2-4 options
- Clean card header with badge, title, and metadata
- Divider-based metric rows that avoid card-inside-card nesting
- Right-aligned value slots that can show text or a compact bar
- Hover/focus border using `--brand` with neutral card fill
- Mobile stacking with preserved row rhythm and readable body text

Use when:
- Comparing products, plans, vendors, sources, models, frameworks, or solution options
- The user needs a concise recommendation or clear differentiation focus
- There are 2-4 options and 3-5 shared dimensions

Avoid when:
- There is only one option
- The comparison has more than 4 options or more than 7 dimensions
- Exact numeric matrix analysis is more important than decision readability
- The design would require more than 2 tags per option
- A plain Markdown table is sufficient

fixture.json provides the expected data shape.
