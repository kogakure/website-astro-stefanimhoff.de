import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { Window } from 'happy-dom';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { axe } from '@/test/a11y';
import { reactRenderer } from '@/test/astro-react-renderer';

import Breadcrumb from './Breadcrumb.astro';
import DesignSystemNav from './DesignSystemNav.astro';
import Logo from './Logo.astro';
import MainNavigation from './MainNavigation.astro';
import PageFooter from './PageFooter.astro';
import PageHeader from './PageHeader.astro';
import PageTitle from './PageTitle.astro';
import PrevNextNavigation from './PrevNextNavigation.astro';
import Scripts from './Scripts.astro';
import ThemeProvider from './ThemeProvider.astro';
import ThemeToggle from './ThemeToggle.astro';
import WorkContent from './work/WorkContent.astro';
import WorkItemFeatured from './work/WorkItemFeatured.astro';
import WorkItemFullBleed from './work/WorkItemFullBleed.astro';
import WorkItemGallery2 from './work/WorkItemGallery2.astro';
import WorkItemGallery2Stagger from './work/WorkItemGallery2Stagger.astro';
import WorkItemGallery3 from './work/WorkItemGallery3.astro';
import WorkItemGallery3Stagger from './work/WorkItemGallery3Stagger.astro';
import WorkItemImageInset from './work/WorkItemImageInset.astro';
import WorkItemTextOnly from './work/WorkItemTextOnly.astro';

let win: InstanceType<typeof Window>;
let container: Awaited<ReturnType<typeof AstroContainer.create>>;

beforeAll(async () => {
	win = new Window({ url: 'http://localhost/' });
	win.happyDOM.settings.navigation.disableChildFrameNavigation = true;
	(global as Record<string, unknown>).window = win;
	(global as Record<string, unknown>).document = win.document;
	Object.defineProperty(global, 'navigator', { value: win.navigator, configurable: true });

	container = await AstroContainer.create();
	container.addServerRenderer({ renderer: reactRenderer });
});

afterAll(async () => {
	await win.happyDOM.close();
});

async function render(
	Component: Parameters<typeof container.renderToString>[0],
	options: Parameters<typeof container.renderToString>[1] = {}
): Promise<Element> {
	const html = await container.renderToString(Component, {
		request: new Request('http://localhost/'),
		...options,
	});
	const wrapper = document.createElement('div');
	wrapper.innerHTML = html;
	return wrapper;
}

// Minimal mock for CollectionEntry<'work'> shape
const mockWorkEntry = {
	id: 'test-work',
	slug: 'test-work',
	collection: 'work',
	data: {
		title: 'Test Project',
		date: new Date('2024-01-01'),
		categories: ['Design'],
		intro: 'A test project showcasing design work.',
		images: [
			{ src: '/assets/images/work/img1.webp', alt: 'Project screenshot' },
			{ src: '/assets/images/work/img2.webp', alt: 'Detail view' },
			{ src: '/assets/images/work/img3.webp', alt: 'Mobile view' },
		],
		image: { src: '/assets/images/work/img1.webp', aspectRatio: 1.5 },
	},
};

describe('site components — axe', () => {
	it('Logo has no a11y violations', async () => {
		const el = await render(Logo);
		expect(await axe(el)).toHaveNoViolations();
	});

	it('PageFooter has no a11y violations', async () => {
		const el = await render(PageFooter);
		expect(await axe(el)).toHaveNoViolations();
	});

	it('ThemeToggle has no a11y violations', async () => {
		const el = await render(ThemeToggle);
		expect(await axe(el)).toHaveNoViolations();
	});

	it('ThemeProvider has no a11y violations', async () => {
		const el = await render(ThemeProvider);
		expect(await axe(el)).toHaveNoViolations();
	});

	it('Scripts has no a11y violations', async () => {
		const el = await render(Scripts);
		expect(await axe(el)).toHaveNoViolations();
	});

	it('PageTitle has no a11y violations', async () => {
		const el = await render(PageTitle, { slots: { default: 'About Stefan Imhoff' } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('Breadcrumb has no a11y violations', async () => {
		const el = await render(Breadcrumb, {
			props: {
				items: [
					{ label: 'Home', href: '/' },
					{ label: 'Writing', href: '/writing/' },
					{ label: 'Current Page' },
				],
			},
		});
		expect(await axe(el)).toHaveNoViolations();
	});

	it('DesignSystemNav has no a11y violations', async () => {
		const el = await render(DesignSystemNav, { props: { currentSlug: 'colors' } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('MainNavigation has no a11y violations', async () => {
		const el = await render(MainNavigation);
		expect(await axe(el)).toHaveNoViolations();
	});

	it('PageHeader has no a11y violations', async () => {
		const el = await render(PageHeader);
		expect(await axe(el)).toHaveNoViolations();
	});

	it('PrevNextNavigation (with both prev and next) has no a11y violations', async () => {
		const el = await render(PrevNextNavigation, {
			props: {
				prev: { href: '/writing/previous-post/', title: 'Previous Post Title' },
				next: { href: '/writing/next-post/', title: 'Next Post Title' },
			},
		});
		expect(await axe(el)).toHaveNoViolations();
	});

	it('PrevNextNavigation (prev only) has no a11y violations', async () => {
		const el = await render(PrevNextNavigation, {
			props: { prev: { href: '/writing/previous-post/', title: 'Previous Post' } },
		});
		expect(await axe(el)).toHaveNoViolations();
	});

	it('PrevNextNavigation (next only) has no a11y violations', async () => {
		const el = await render(PrevNextNavigation, {
			props: { next: { href: '/writing/next-post/', title: 'Next Post' } },
		});
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkContent has no a11y violations', async () => {
		const el = await render(WorkContent, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkItemTextOnly has no a11y violations', async () => {
		const el = await render(WorkItemTextOnly, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkItemFullBleed has no a11y violations', async () => {
		const el = await render(WorkItemFullBleed, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkItemImageInset has no a11y violations', async () => {
		const el = await render(WorkItemImageInset, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkItemGallery2 has no a11y violations', async () => {
		const el = await render(WorkItemGallery2, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkItemGallery2Stagger has no a11y violations', async () => {
		const el = await render(WorkItemGallery2Stagger, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkItemGallery3 has no a11y violations', async () => {
		const el = await render(WorkItemGallery3, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkItemGallery3Stagger has no a11y violations', async () => {
		const el = await render(WorkItemGallery3Stagger, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});

	it('WorkItemFeatured has no a11y violations', async () => {
		const el = await render(WorkItemFeatured, { props: { entry: mockWorkEntry } });
		expect(await axe(el)).toHaveNoViolations();
	});
});
