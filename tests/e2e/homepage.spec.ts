import { expect, test } from '@playwright/test';

test('page title and meta', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Stefan Imhoff/);
});

test('About section label and content are visible', async ({ page }) => {
	await page.goto('/');
	// SectionLabel "About" must render immediately — not behind a hidden motion island
	await expect(page.getByText('About').first()).toBeVisible();
	// Static body copy from the About MDX must also be visible immediately
	await expect(page.getByText(/Nearly two decades/i)).toBeVisible();
});

test('navigation links are present', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: /Writing/i }).first()).toBeVisible();
	await expect(page.getByRole('link', { name: /Work/i }).first()).toBeVisible();
});

test('skip to main content link is first focusable element', async ({ page }) => {
	await page.goto('/');
	await page.keyboard.press('Tab');
	const focused = page.locator(':focus');
	await expect(focused).toContainText(/Skip to main content/i);
});
