## The Scaling Principle

| Element             | Web size | Ratio to body                   | Print size (anchored at 10 pt) |
| ------------------- | -------- | ------------------------------- | ------------------------------ |
| **Paragraph**       | 18 px    | 1× (base)                       | **10 pt**                      |
| **Caption**         | 14 px    | 0,78×                           | **8 pt**                       |
| **Footnote**        | 10 px    | 0,56×                           | **6,5 pt**                     |
| **H3**              | 72 px    | 4×                              | **24 pt**                      |
| **H2**              | 72 px    | 4× (differentiated by tracking) | **30 pt**                      |
| **H1**              | 144 px   | 8×                              | **48 pt**                      |
| **H0** (Hero/Cover) | 516 px   | 28,7×                           | **72 pt** (cover page only)    |

## Spacing & Margins for A4

| Token       | Web (px) | Print (mm) | Use on A4                  |
| ----------- | -------- | ---------- | -------------------------- |
| ⁠`space-1`  | 4 px     | **1 mm**   | Hairline gaps              |
| ⁠`space-2`  | 8 px     | **2 mm**   | Tight element spacing      |
| ⁠`space-3`  | 12 px    | **3 mm**   | Component padding          |
| ⁠`space-4`  | 16 px    | **4 mm**   | Standard internal padding  |
| ⁠`space-6`  | 24 px    | **6 mm**   | Gutters between columns    |
| ⁠`space-8`  | 32 px    | **8 mm**   | Section padding            |
| ⁠`space-12` | 48 px    | **12 mm**  | Between typographic blocks |
| ⁠`space-16` | 64 px    | **16 mm**  | Major section breaks       |
| ⁠`space-24` | 96 px    | **24 mm**  | Page-level breathing room  |
| ⁠`space-32` | 128 px   | **32 mm**  | Maximum vertical *ma*      |

## A4 Page Margins

| Margin                    | Value               | Rationale                                              |
| ------------------------- | ------------------- | ------------------------------------------------------ |
| **Top**                   | 24 mm (⁠`space-24`) | Generous head margin — the page breathes.              |
| **Bottom**                | 20 mm               | Slightly less than top to ground the content.          |
| **Inside** (binding edge) | 24 mm               | Accounts for binding + clear space.                    |
| **Outside**               | 16 mm (`⁠space-16`) | Narrower than inside — creates asymmetry (_Fukinsei_). |

This gives a **live area of 170 × 253 mm**—comfortable for a 2- or 3-column grid.
