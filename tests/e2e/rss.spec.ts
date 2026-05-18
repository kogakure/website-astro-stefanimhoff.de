import { expect, test } from '@playwright/test';

test('RSS feed returns valid XML', async ({ request }) => {
	const response = await request.get('/rss.xml');
	expect(response.status()).toBe(200);
	expect(response.headers()['content-type']).toMatch(/xml/);
	const body = await response.text();
	expect(body).toContain('<?xml');
	expect(body).toContain('<channel>');
});

test('RSS feed has no broken empty link labels from AppleTVFlag', async ({ request }) => {
	const response = await request.get('/rss.xml');
	const body = await response.text();
	// AppleTVFlag fix: must not produce <a href="...">[]</a> (empty bracket content in anchor)
	expect(body).not.toMatch(/>(\[\s*\])<\/a>/);
});

test('haiku RSS feed returns valid XML', async ({ request }) => {
	const response = await request.get('/rss-haiku.xml');
	expect(response.status()).toBe(200);
	const body = await response.text();
	expect(body).toContain('<?xml');
});
