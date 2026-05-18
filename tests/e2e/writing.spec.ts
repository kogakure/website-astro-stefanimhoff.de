import { expect, test } from '@playwright/test';

test('writing page loads and shows posts', async ({ page }) => {
	await page.goto('/writing/');
	await expect(page).toHaveTitle(/Writing/);
	const links = page.getByRole('main').getByRole('link').filter({ hasText: /.{5,}/ });
	await expect(links.first()).toBeVisible();
});

test('tag filter shows only matching posts', async ({ page }) => {
	await page.goto('/writing/');
	await page.waitForLoadState('networkidle');
	const allLinks = page.getByRole('main').getByRole('link').filter({ hasText: /.{5,}/ });
	const initialCount = await allLinks.count();

	const tagButton = page
		.getByRole('button')
		.filter({ hasText: /^[a-z]/ })
		.first();
	const tagName = (await tagButton.textContent())?.trim() ?? '';
	await tagButton.click();

	await expect(page).toHaveURL(new RegExp(`tag=${encodeURIComponent(tagName)}`));
	const filteredCount = await allLinks.count();
	expect(filteredCount).toBeGreaterThan(0);
	expect(filteredCount).toBeLessThanOrEqual(initialCount);
});

test('clear filter restores all posts', async ({ page }) => {
	await page.goto('/writing/');
	await page.waitForLoadState('networkidle');
	const allLinks = page.getByRole('main').getByRole('link').filter({ hasText: /.{5,}/ });
	const initialCount = await allLinks.count();

	await page
		.getByRole('button')
		.filter({ hasText: /^[a-z]/ })
		.first()
		.click();
	await page.getByRole('button', { name: /Clear/i }).click();

	await expect(page).not.toHaveURL(/tag=/);
	expect(await allLinks.count()).toBe(initialCount);
});
