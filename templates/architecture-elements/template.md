# Architecture Elements — Material Description

A reusable element palette for architecture and framework diagrams, providing a consistent visual vocabulary rather than a fixed architecture layout. widget-code.html contains:
- Neutral module blocks (gray, for general systems/services/storage)
- Brand module blocks (purple, for core capabilities/AI concepts/recommended paths)
- Boundary blocks (for runtime/ownership/deployment scopes)
- External blocks (for users/third-party systems/upstream-downstream entities)
- Connector line styles (solid dependency, dashed primary path, dotted optional relationship, labeled edges)

Reusable primitives:
- `.neutral-module` block style — for general modules
- `.brand-module` block style — for focal modules (one per diagram)
- `.boundary` block style — for scopes/boundaries (no more than 2-3 levels of nesting)
- `.external` block style — for external entities
- SVG connector path styles (solid/dashed, neutral/brand colors)
- Port dots (handle-like connection points)

When generating architecture diagrams, freely compose layouts from these elements rather than copying a fixed structure.

fixture.json provides sample data format.
