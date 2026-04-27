---
# SI-2060
title: Extend colors-japan.json with kanji, hiragana, RGB, CMYK
status: completed
type: task
priority: normal
created_at: 2026-04-26T12:02:32Z
updated_at: 2026-04-27T13:52:58Z
---

Extend each of the 250 entries in `src/data/colors-japan.json` with original Japanese name (kanji), reading (hiragana), and book-printed RGB + CMYK values from _Traditional Colors of Japan_ by Nobyoshi Hamada. Faithful transcription from book photographs (algorithmic CMYK conversion would not match the book's print process). Future swatch UI redesign will consume these fields.

## Data shape

```json
{
  "id": "1",
  "name": "Pink",
  "kanji": "撫子色",
  "hiragana": "なでしこいろ",
  "description": "...",
  "color": "#DC9FB4",
  "rgb": { "r": 220, "g": 159, "b": 180 },
  "cmyk": { "c": 2, "m": 43, "y": 3, "k": 0 }
}
```

- Existing fields (`id`, `name`, `description`, `color`) untouched per user constraint.
- Multi-name entries keep `・` separator as printed (e.g. #6 `桑染・桑の実色`).
- Skip Munsell row from book.

## Files

- `src/data/colors-japan.json` — add 4 fields per entry.
- `src/utils/pick-two-random-colors.ts` — extend `Color` interface.

## Todo

- [x] Update `Color` TS interface in `pick-two-random-colors.ts`
- [ ] Transcribe + apply batch 1 (entries 1-25, photo 1)
- [ ] Transcribe + apply batch 2 (entries 26-50, photo 2)
- [ ] Transcribe + apply batch 3 (entries 51-75, photo 3)
- [ ] Transcribe + apply batch 4 (entries 76-100, photo 4)
- [ ] Transcribe + apply batch 5 (entries 101-125, photo 5)
- [ ] Transcribe + apply batch 6 (entries 126-150, photo 6)
- [ ] Transcribe + apply batch 7 (entries 151-175, photo 7)
- [ ] Transcribe + apply batch 8 (entries 176-200, photo 8)
- [ ] Transcribe + apply batch 9 (entries 201-225, photo 9)
- [ ] Transcribe + apply batch 10 (entries 226-250, photo 10)
- [ ] Validate JSON parses, count stays at 250
- [ ] Run `pnpm build`
- [ ] Report uncertain entries for user review
