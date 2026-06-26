# Content Guidelines

The widget should make one thing clearer. It should not replace the assistant response.

## When To Visualize

Use a widget when one of these is true:
- Relationships matter: systems, modules, dependencies, flows, lifecycle, ownership.
- Magnitudes matter: metrics, trends, proportions, trade-offs, risk levels.
- Choice matters: compare options and surface a recommendation or differentiator.
- Interaction helps: one local control reveals a state change or trade-off.

Do not use a widget when:
- The answer is a short fact or one-step command.
- Markdown is easier to scan.
- There is no visible focal point.
- The visual would be decorative rather than explanatory.

## Focal Point

Every widget needs one visible focal point:
- A recommended option.
- A critical path.
- A bottleneck.
- A highest or lowest value.
- A phase boundary.
- A risk or decision marker.

Make the focal point obvious with position, label, or one meaning color. Do not rely on color alone.

## Complexity Budget

Default budget:
- 1 focal point.
- 2-5 main nodes for architecture or flow diagrams.
- 2-4 options in comparison cards or matrices.
- 3-5 dimensions in comparison views.
- 2-4 KPI cards or chart series.
- 1 local interaction concept.
- 1 neutral structure plus 1-2 meaning colors.
- Max 4 full-size boxes in one horizontal tier.

If a request exceeds the budget, group related items, show an overview, and move detail to the normal response text. Do not cram a full report, app surface, or dense dashboard into one inline widget.

## Copy Rules

- Node labels: 2-5 words.
- Connector labels: 1-3 words; omit obvious labels.
- Card titles: 6-10 words.
- Subtitles: 5 words or fewer, or an equally short Chinese phrase.
- Keep assumptions, caveats, and longer explanation in the assistant response.
- Use sentence case except identifiers, commands, paths, and short mono tags.

## Structure First

Prefer:
- Cards with dividers.
- Tags for status/category.
- Simple SVG connectors.
- Bars, dots, swatches, and direct labels for data.
- Tables only when comparing 3+ dimensions.

Avoid:
- Hero sections.
- Slide navigation.
- Export buttons.
- Kanban/editor controls.
- Decorative illustration that does not encode information.
- Nested cards inside cards.

## Data Honesty

- Label estimates as estimates.
- Round displayed values consistently.
- Show units next to numbers.
- Avoid precise-looking values when the source is approximate.
- Do not render maps. Geographic data should become a bar chart, ranking table, matrix, compact list, or composition chart by region.
