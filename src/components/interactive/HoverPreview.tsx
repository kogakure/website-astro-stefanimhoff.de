'use client';

import { useEffect, useRef } from 'react';
import { getPreviewUrl } from '../../utils/preview-url';

const FALLBACK_URL = getPreviewUrl();

export const HoverPreview = () => {
	const imgRef = useRef<HTMLImageElement>(null);
	const activeUrlRef = useRef<string | null>(null);
	const cloneRef = useRef<HTMLImageElement | null>(null);
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

		const onBeforePreparation = () => {
			const url = activeUrlRef.current;
			if (!url || url === FALLBACK_URL) {
				hide();
				return;
			}
			// Place a non-persisted clone at the exact screen position of the
			// floating img so the view transition captures it in the old-state
			// screenshot and morphs it into the article cover.
			const rect = img.getBoundingClientRect();
			const clone = document.createElement('img');
			clone.src = img.src;
			clone.setAttribute('alt', '');
			clone.style.cssText = [
				'position:fixed',
				`left:${rect.left}px`,
				`top:${rect.top}px`,
				`width:${rect.width}px`,
				`height:${rect.height}px`,
				'view-transition-name:post-cover',
				'pointer-events:none',
				'border-radius:0.375rem',
				'z-index:50',
				'object-fit:cover',
			].join(';');
			document.body.appendChild(clone);
			cloneRef.current = clone;
			// Hide and clear VTN on the persisted img to avoid name conflicts.
			hide();
		};

		const onPageLoad = () => {
			cloneRef.current?.remove();
			cloneRef.current = null;
			hide();
		};

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
			className="w-100 pointer-events-none fixed start-0 top-0 z-50 aspect-video rounded-md opacity-0 shadow-xl transition-opacity duration-150"
			decoding="async"
			loading="lazy"
		/>
	);
};

export default HoverPreview;
