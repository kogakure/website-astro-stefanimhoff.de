import { expect, test } from '@playwright/test';

test('theme toggle changes color scheme class', async ({ page }) => {
	await page.goto('/');
	const html = page.locator('html');
	const initialDark = await html.evaluate((el) => el.classList.contains('dark'));

	// ThemeToggle uses aria-label="Switch color theme"
	await page.getByRole('button', { name: /Switch color theme/i }).click();
	const afterDark = await html.evaluate((el) => el.classList.contains('dark'));

	expect(afterDark).toBe(!initialDark);
});

test('theme persists across page navigation', async ({ page }) => {
	await page.goto('/');
	// Force dark mode via localStorage before navigating
	await page.evaluate(() => {
		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	});

	await page.goto('/writing/');
	const isDark = await page.locator('html').evaluate((el) => el.classList.contains('dark'));
	expect(isDark).toBe(true);
});
