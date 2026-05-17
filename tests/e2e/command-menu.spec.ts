import { expect, test } from '@playwright/test';

// CommandMenu is client:idle — hydrates via requestIdleCallback after networkidle.
// Poll until window.openCommandMenu is defined (set during hydration) before opening.
const openMenu = async (page: import('@playwright/test').Page) => {
	await page.waitForFunction(() => typeof (window as any).openCommandMenu === 'function', {
		timeout: 10_000,
	});
	await page.evaluate(() => document.dispatchEvent(new Event('command-menu:open')));
};

test('command menu opens and closes on Escape', async ({ page }) => {
	await page.goto('/');
	await openMenu(page);
	const dialog = page.getByRole('dialog', { name: /Command menu/i });
	await expect(dialog).toBeVisible();

	await page.keyboard.press('Escape');
	await expect(dialog).not.toBeVisible();
});

test('command menu navigates to writing page', async ({ page }) => {
	await page.goto('/');
	await openMenu(page);
	await expect(page.getByRole('dialog', { name: /Command menu/i })).toBeVisible();

	await page.getByRole('option', { name: /Writing/i }).click();
	await expect(page).toHaveURL('/writing/');
});

test('command menu search mode renders input', async ({ page }) => {
	await page.goto('/');
	await openMenu(page);
	await expect(page.getByRole('dialog', { name: /Command menu/i })).toBeVisible();

	await page.getByRole('option', { name: /Search/i }).click();
	await expect(page.getByPlaceholder(/Search/i)).toBeVisible();
});
