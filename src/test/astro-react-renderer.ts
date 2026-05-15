// Minimal React server renderer for AstroContainer tests.
// Avoids the astro:react:opts virtual module dependency from @astrojs/react/server.js,
// which is unavailable in Vitest's module loading context.
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const reactTypeof = Symbol.for('react.element');
const reactTransitionalTypeof = Symbol.for('react.transitional.element');

export const reactRenderer = {
	name: '@astrojs/react',
	check: async (Component: unknown) => {
		// Astro component factories must not be treated as React components
		if ((Component as Record<string, unknown>)?.isAstroComponentFactory) return false;

		if (typeof Component === 'object' && Component !== null) {
			const sym = (Component as Record<string, unknown>)['$$typeof'];
			if (typeof sym === 'symbol') {
				return sym === reactTypeof || sym === reactTransitionalTypeof;
			}
		}
		if (typeof Component !== 'function') return false;
		try {
			const result = (Component as () => unknown)();
			if (result === null || result === undefined) return false;
			const el = result as Record<string, unknown>;
			return el['$$typeof'] === reactTypeof || el['$$typeof'] === reactTransitionalTypeof;
		} catch {
			return false;
		}
	},
	renderToStaticMarkup: async (
		Component: React.ElementType,
		props: Record<string, unknown>,
		slots: Record<string, string> | null
	) => {
		const children = slots?.default
			? React.createElement('astro-slot', {
					dangerouslySetInnerHTML: { __html: slots.default },
				})
			: undefined;
		const element = React.createElement(Component, props as React.Attributes, children);
		const html = ReactDOMServer.renderToStaticMarkup(element);
		return { html };
	},
	supportsAstroStaticSlot: true,
};
