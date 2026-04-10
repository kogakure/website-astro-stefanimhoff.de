## Regular

| Element | Change                                                      |
| ------- | ----------------------------------------------------------- |
| Text    | Text in Sumi (`#0E0D0C`), set in Switzer Bold, no underline |
| Arrow   | Crimson arrow (→) in Beni (`#900B20`)                       |

## On Hover

| Element | Change                                                       |
| ------- | ------------------------------------------------------------ |
| Text    | Shift to Beni (`#900B20`) — the entire label becomes crimson |
| Arrow   | Translate 4 px to the right (`⁠`transform: translateX(4px)`) |
| Timing  | 200 ms, ⁠`--ease-enter`                                      |

This creates a clear hover state: the text "lights up" in crimson and the arrow nudges forward, suggesting forward motion. It's a single-colour state (everything becomes Beni) rather than a mixed state, which keeps it clean.

## On Active/Pressed

| Element | Change                |
| ------- | --------------------- |
| Text    | Beni Dark (`#6A0818`) |
| Arrow   | Beni Dark (`#6A0818`) |

The whole link darkens momentarily to confirm the click.
