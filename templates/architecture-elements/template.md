# Architecture Elements — Material Description

A reusable element palette for architecture and framework diagrams, providing a consistent visual vocabulary rather than a fixed architecture layout. widget-code.html contains:
- Neutral module blocks (gray, for general systems/services/storage)
- Brand module blocks (purple, for the single focal capability, AI concept, or recommended path)
- Boundary blocks (for runtime/ownership/deployment scopes)
- External blocks (for users/third-party systems/upstream-downstream entities)
- Connector line styles (neutral solid dependency, neutral dashed weak dependency, brand dashed primary path, labeled edges)

Reusable primitives:
- `.neutral-module` block style — for general modules
- `.brand-module` block style — for focal modules (one per diagram)
- `.boundary` block style — for scopes/boundaries (no more than 2-3 levels of nesting)
- `.external` block style — for external entities
- SVG connector path styles — neutral by default; brand/accent/semantic only for labeled focus, state, or comparison paths
- Connection endpoints are hidden by default; show port dots only when the port itself is the concept being explained

When generating architecture diagrams, freely compose layouts from these elements rather than copying a fixed structure. Keep most blocks and connectors neutral; use color as meaning, not decoration.

fixture.json provides sample data format.
