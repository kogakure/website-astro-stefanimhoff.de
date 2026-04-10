## Philosophy

The palette is austere by design—Koko. Like sumi ink on handmade paper, the system finds its richness in restraint: a single hue (crimson), a near-black, and a warm-neutral ground. Additional tones exist only as functional necessities, never as decoration. This is a palette that does not tire the eye, one that rewards sustained viewing—the chromatic equivalent of a shibui object.

## Primary Palette

| Name                         | Kanji | Hex       | RGB                  | OKLCH                        | Usage                                                                                                 |
| ---------------------------- | ----- | --------- | -------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Beni** (Crimson, deep red) | 紅    | `#900B20` | `rgb(144, 11, 32)`   | `oklch(0.4174 0.1615 21.95)` | Accent, logo, links, emphasis. The single point of colour in the system.                              |
| **Sumi** (Ink/inkstick)      | 墨    | `#0E0D0C` | `rgb(14, 13, 12)`    | `oklch(0.1599 0.0027 67.63)` | Primary text, headings, high-contrast elements. Not a pure black — it carries the warmth of aged ink. |
| **Washi** (Japanese paper)   | 和紙  | `#E6E6E6` | `rgb(230, 230, 230)` | `oklch(0.9249 0 0)`          | Primary background. The color of unbleached paper under soft light.                                   |

## Secondary/Neutral Palette

| Name                               | Kanji | Hex       | RGB                  | OKLCH                         | Usage                                                                                                         |
| ---------------------------------- | ----- | --------- | -------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Kiri** (Fog/mist)                | 霧    | `#F2F2F0` | `rgb(242, 242, 240)` | `oklch(0.9606 0.0027 106.45)` | Lighter background for cards, alternating sections, hover states. The "lighter grey" visible on the homepage. |
| **Usuzumi** (Thin ink/diluted ink) | 薄墨  | `#C8C8C4` | `rgb(200, 200, 196)` | `oklch(83.2% 0.0055 107deg)`  | The pale grey left when *sumi* ink (墨) is heavily diluted with water on *washi paper*                        |
| **Hai** (Ash)                      | 灰    | `#A0A09C` | `rgb(160, 160, 156)` | `oklch(0.7046 0.0057 106.55)` | Muted text, captions, disabled states, secondary information.                                                 |
| **Nezumi** (Mouse/rat)             | 鼠    | `#6B6B67` | `rgb(107, 107, 103)` | `oklch(0.5265 0.0062 106.61)` | Mid-tone for borders, dividers, subtle UI elements.                                                           |
| **Yoru** (Night)                   | 夜    | `#1A1918` | `rgb(26, 25, 24)`    | `oklch(0.2142 0.0025 67.69)`  | Dark surface for inverted sections, footer, or dark-mode base.                                                |

## Accent Tints (Beni Scale)

For interactive states (hover, active, visited), derive tints and shades from the primary crimson:

| Name                                | Kanji | Hex       | RGB                  | OKLCH                        | Usage                                                                     |
| ----------------------------------- | ----- | --------- | -------------------- | ---------------------------- | ------------------------------------------------------------------------- |
| **Beni Light** (Pale crimson)       | 薄紅  | `#B83A4E` | `rgb(184, 58, 78)`   | `oklch(0.5366 0.1614 15.32)` | Hover state for links on light backgrounds.                               |
| **Beni muted** (Astringent crimson) | 渋紅  | `#C75566` | `rgb(199, 85, 102)`  | `oklch(59.9% 0.146 13.5deg)` | Visited links, secondary buttons, subtle emphasis, inactive accent states |
| **Beni Pale** (Crimson-white)       | 紅白  | `#F2D5DA` | `rgb(242, 213, 218)` | `oklch(0.8985 0.0329 6)`     | Subtle highlight, selection background, tag backgrounds.                  |
| **Beni Dark** (Deep crimson)        | 深紅  | `#6A0818` | `rgb(106, 8, 24)`    | `oklch(0.3368 0.1279 20.74)` | Active/pressed state, dark-mode accent.                                   |

## Usage Ratios

Follow the **70/25/5** principle:

- **70%**—Washi (`#E6E6E6`) or Kiri (`#F2F2F0`) as the dominant ground.
- **25%**—Sumi (`#0E0D0C`) for text and structural elements.
- **5%**—Beni (`#900B20`) as the sole chromatic accent. Use it sparingly so it retains its power—like the seal of a Hanko pressed once onto a page.

## Contrast Specifications (WCAG 2.1)

| Foreground      | Background      | Ratio   | AA       | AAA                                |
| --------------- | --------------- | ------- | -------- | ---------------------------------- |
| Sumi `#0E0D0C`  | Washi `#E6E6E6` | 15,5:1  | ✓ Pass   | ✓ Pass                             |
| Beni `#900B20`  | Washi `#E6E6E6` | 7,46:1  | ✓ Pass   | ✓ Pass                             |
| Sumi `#0E0D0C`  | Kiri `#F2F2F0`  | ~16,8:1 | ✓ Pass   | ✓ Pass                             |
| Beni `#900B20`  | Kiri `#F2F2F0`  | ~8,1:1  | ✓ Pass   | ✓ Pass                             |
| Beni `#900B20`  | Sumi `#0E0D0C`  | 2,08:1  | ✗ Fail   | ✗ Fail                             |
| Washi `#E6E6E6` | Sumi `#0E0D0C`  | 15,5:1  | ✓ Pass   | ✓ Pass                             |
| Washi `#E6E6E6` | Yoru `#1A1918`  | ~13,4:1 | ✓ Pass   | ✓ Pass                             |
| Hai `#A0A09C`   | Washi `#E6E6E6` | ~2,7:1  | ✗ (text) | Use for large text/decorative only |

**Rule:** Never set Beni text directly on Sumi or near-black backgrounds. For crimson-on-dark contexts, use Beni Light (`#B83A4E`) or switch to Washi for the text. Verify all pairings meet ≥ 4.5:1 for body text and ≥ 3:1 for large text (≥ 18px or ≥ 14px bold).

## CMYK & Pantone (Print)

| Name            | CMYK                   | Pantone (nearest)       |
| --------------- | ---------------------- | ----------------------- |
| Beni `#900B20`  | `C:22 M:100 Y:86 K:17` | `Pantone 187 C`         |
| Sumi `#0E0D0C`  | `C:67 M:58 Y:53 K:76`  | `Pantone Black 6 C`     |
| Washi `#E6E6E6` | `C:0 M:0 Y:0 K:10`     | `Pantone Cool Gray 1 C` |
