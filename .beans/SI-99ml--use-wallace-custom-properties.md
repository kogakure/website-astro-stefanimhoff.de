---
# SI-99ml
title: Use Wallace Custom Properties
status: draft
type: task
priority: normal
created_at: 2026-04-22T18:11:51Z
updated_at: 2026-04-22T18:14:10Z
parent: SI-vl2o
---

https://www.projectwallace.com/custom-property-inspector

This analyzer attempts to deeply analyze your CSS Custom Properties. Use it to detect potential bugs or find opportunities to lower your total CSS footprint.
Catch potential bugs

- Which custom properties are declared but never used in a var()?
- Which custom properties are used in a var() but were never declared?
- Which properties were registered with @property but never used?
- Todo: does the type declared in @property (like <color> or <length>) match up with the way this custom property is used?

Detect unused code

- Which custom properties are declared but never used in a var()? Unused code should be removed to decrease CSS filesize
- Which properties were registered with @property but never used?
