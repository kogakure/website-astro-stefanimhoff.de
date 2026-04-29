'use client';

import { useEffect, useRef } from 'react';
import { getPreviewUrl } from '../../utils/preview-url';

const FALLBACK_URL = getPreviewUrl();

export const HoverPreview = () => {
	const imgRef = useRef<HTMLImageElement>(null);
	const activeUrlRef = useRef<string | null>(null);
	const targetX = useRef(0);
	const targetY = useRef(0);
	const currentX = useRef(0);
	const currentY = useRef(0);
	const rafId = useRef<number | null>(null);

	useEffect(() => {
		if (
			matchMedia('(pointer: coarse)').matches ||
			matchMedia('(prefers-reduced-motion: reduce)').matches
		) {
			return;
		}

		const img = imgRef.current;
		if (!img) return;

		const hide = () => {
			activeUrlRef.current = null;
			img.style.setProperty('view-transition-name', '');
			img.classList.remove('opacity-100');
			img.classList.add('opacity-0');
		};

		const loop = () => {
			currentX.current += (targetX.current - currentX.current) * 0.18;
			currentY.current += (targetY.current - currentY.current) * 0.18;
			img.style.transform = `translate3d(${currentX.current}px,${currentY.current}px,0)`;
			rafId.current = requestAnimationFrame(loop);
		};

		const onMouseMove = (e: MouseEvent) => {
			targetX.current = e.clientX + 20;
			targetY.current = e.clientY + 20;
		};

		const onMouseOver = (e: MouseEvent) => {
			const anchor = (e.target as Element).closest('[data-hover-preview]');
			if (!anchor) return;
			const url = (anchor as HTMLElement).dataset.hoverPreview ?? null;
			if (url && url !== activeUrlRef.current) {
				activeUrlRef.current = url;
				img.src = url;
				img.style.setProperty(
					'view-transition-name',
					url !== FALLBACK_URL ? 'post-cover' : ''
				);
				img.classList.remove('opacity-0');
				img.classList.add('opacity-100');
				if (!rafId.current) rafId.current = requestAnimationFrame(loop);
			}
		};

		const onMouseOut = (e: MouseEvent) => {
			const anchor = (e.target as Element).closest('[data-hover-preview]');
			if (!anchor) return;
			hide();
		};

		// Hide immediately when navigating away from a post with no cover.
		// For real covers, keep visible so the view transition can morph it.
		const onBeforePreparation = () => {
			if (!img.style.getPropertyValue('view-transition-name')) hide();
		};

		// Always reset after the new page is fully loaded.
		const onPageLoad = () => hide();

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseover', onMouseOver);
		document.addEventListener('mouseout', onMouseOut);
		document.addEventListener('astro:before-preparation', onBeforePreparation);
		document.addEventListener('astro:page-load', onPageLoad);

		return () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseover', onMouseOver);
			document.removeEventListener('mouseout', onMouseOut);
			document.removeEventListener('astro:before-preparation', onBeforePreparation);
			document.removeEventListener('astro:page-load', onPageLoad);
			if (rafId.current) cancelAnimationFrame(rafId.current);
		};
	}, []);

	return (
		<img
			ref={imgRef}
			alt=""
			aria-hidden="true"
			className="pointer-events-none fixed start-0 top-0 z-50 aspect-video w-[400px] rounded-md opacity-0 shadow-xl transition-opacity duration-150"
			decoding="async"
			loading="lazy"
		/>
	);
};

export default HoverPreview;
