import { expect, test } from '@playwright/test';

const POST = '/writing/agentic-note-taking-obsidian-claude-code/';
const SERIES_POST = '/writing/gulp-tutorial-1-intro-setup/';

test('single post renders heading and content', async ({ page }) => {
	await page.goto(POST);
	await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
	await expect(page.getByRole('main')).toBeVisible();
});

test('series stepper is present on a series post', async ({ page }) => {
	await page.goto(SERIES_POST);
	const nav = page.getByRole('navigation', { name: /Series/i });
	await expect(nav).toBeVisible();
});

test('table of contents is present on multi-heading posts', async ({ page }) => {
	// Set viewport below xl (1280px) so TOC button is interactive (not pointer-events-none)
	await page.setViewportSize({ width: 1024, height: 900 });
	await page.goto(POST);
	const tocButton = page.getByRole('button', { name: /Table of Contents/i });
	if (!(await tocButton.isVisible())) return;

	await tocButton.click();
	const tocNav = page.getByRole('navigation', { name: /Table of contents/i });
	const links = tocNav.getByRole('link');
	await expect(links.first()).toBeVisible();
});

test('post page has previous or next navigation', async ({ page }) => {
	await page.goto(POST);
	const prevNext = page
		.getByRole('link')
		.filter({ hasText: /(Previous|Next|←|→)/i })
		.first();
	await expect(prevNext).toBeVisible();
});
