#!/usr/bin/env node
// Extracts the compiled Tailwind stylesheet for design-sync's cssEntry.
// This site has no dist/_astro/*.css bundle — Astro inlines the entire
// compiled stylesheet as a <style> block on every page (verified identical
// across pages). Run `pnpm build` first, then this script.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const html = readFileSync('dist/index.html', 'utf8');
const matches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]);
const css = matches.reduce((a, b) => (b.length > a.length ? b : a), '');

if (css.length < 10000) {
	console.error(`[extract-css] suspiciously small stylesheet (${css.length} bytes) — did the build change?`);
	process.exit(1);
}

mkdirSync('.design-sync/.cache', { recursive: true });
writeFileSync('.design-sync/.cache/compiled.css', css);
console.error(`[extract-css] wrote .design-sync/.cache/compiled.css (${css.length} bytes)`);
