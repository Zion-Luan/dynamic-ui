# Gantt Chart — Material Description

A Gantt chart displaying project task scheduling, progress, dependencies, and critical path. widget-code.html contains:
- Card structure (title + description + left task column + right timeline grid + footer conclusion)
- Static HTML/SVG implementation (no external libraries), JS for tooltip, dependency arrow routing, and resize
- Task bars (brand-colored critical path + faded non-critical tasks)
- Dependency connector lines (rounded connectors, no arrowheads/endpoint markers)
- Today line + weekend/holiday gray overlay

Reusable primitives:
- Left task rail + right timeline grid dual-column layout
- `--chart-series-1` / `--brand` critical path color + non-critical fade
- Dependency line routing (finish-to-start, endpoints extending below task bars)
- Today marker line (single-color vertical line, hidden when out of range)
- Hover/focus popup (color dot + task name + owner + dates + progress + status)

fixture.json provides sample data format.
