import { XIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { computeLightboxSize } from '../../lib/lightboxSizing';

type ActiveImage = {
	src: string;
	alt: string;
	rect: DOMRect;
	naturalWidth: number;
	naturalHeight: number;
	sourceEl: HTMLImageElement;
};

type TargetRect = { width: number; height: number; left: number; top: number };

const EASE: [number, number, number, number] = [0.0, 0.0, 0.38, 0.9];

export const LightboxRoot = () => {
	const [active, setActive] = useState<ActiveImage | null>(null);
	const [target, setTarget] = useState<TargetRect | null>(null);
	const closeBtnRef = useRef<HTMLButtonElement>(null);
	const prefersReducedMotion = useReducedMotion();

	const computeTarget = useCallback((nw: number, nh: number) => {
		setTarget(computeLightboxSize(nw, nh, window.innerWidth, window.innerHeight));
	}, []);

	const open = useCallback(
		(img: HTMLImageElement) => {
			const nw = img.naturalWidth;
			const nh = img.naturalHeight;
			const rect = img.getBoundingClientRect();
			setActive({
				src: img.currentSrc || img.src,
				alt: img.alt,
				rect,
				naturalWidth: nw,
				naturalHeight: nh,
				sourceEl: img,
			});
			computeTarget(nw, nh);
		},
		[computeTarget]
	);

	const close = useCallback(() => {
		const el = active?.sourceEl;
		setActive(null);
		setTarget(null);
		requestAnimationFrame(() => el?.focus());
	}, [active]);

	// Event delegation — one listener handles all data-lightbox images
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const img = (e.target as Element).closest<HTMLImageElement>('[data-lightbox="true"]');
			if (!img) return;
			e.preventDefault();
			open(img);
		};
		const handleKeydown = (e: KeyboardEvent) => {
			const img = (e.target as Element).closest<HTMLImageElement>('[data-lightbox="true"]');
			if (!img) return;
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				open(img);
			}
		};
		document.body.addEventListener('click', handleClick);
		document.body.addEventListener('keydown', handleKeydown);
		return () => {
			document.body.removeEventListener('click', handleClick);
			document.body.removeEventListener('keydown', handleKeydown);
		};
	}, [open]);

	// Scroll lock + Escape while open
	useEffect(() => {
		if (!active) return;
		document.body.style.overflow = 'hidden';
		requestAnimationFrame(() => closeBtnRef.current?.focus());
		const onEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') close();
		};
		document.addEventListener('keydown', onEscape);
		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', onEscape);
		};
	}, [active, close]);

	// Recompute target on resize while open
	useEffect(() => {
		if (!active) return;
		const onResize = () => computeTarget(active.naturalWidth, active.naturalHeight);
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [active, computeTarget]);

	const duration = prefersReducedMotion ? 0 : 0.3;
	const backdropDuration = prefersReducedMotion ? 0 : 0.2;

	return (
		<AnimatePresence>
			{active && target && (
				<>
					{/* Backdrop */}
					<motion.div
						key="lb-backdrop"
						className="bg-shibui-100/80 dark:bg-shibui-900/80 fixed inset-0 z-50 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: backdropDuration }}
						onClick={close}
						aria-hidden="true"
					/>

					{/* Close button */}
					<motion.button
						key="lb-close"
						ref={closeBtnRef}
						onClick={close}
						className="rounded-1 text-shibui-400 hover:text-shibui-950 dark:hover:text-shibui-100 fixed right-4 top-4 z-[52] p-2"
						aria-label="Close lightbox"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: backdropDuration }}
					>
						<XIcon className="h-5 w-5" />
					</motion.button>

					{/* Image */}
					<div
						role="dialog"
						aria-modal="true"
						aria-label="Image lightbox"
						className="pointer-events-none fixed inset-0 z-[51]"
					>
						<motion.img
							key="lb-image"
							src={active.src}
							alt={active.alt}
							className="rounded-2 cursor-zoom-out object-contain"
							style={{ position: 'fixed', pointerEvents: 'auto' }}
							initial={{
								top: active.rect.top,
								left: active.rect.left,
								width: active.rect.width,
								height: active.rect.height,
								opacity: 1,
							}}
							animate={{
								top: target.top,
								left: target.left,
								width: target.width,
								height: target.height,
								opacity: 1,
							}}
							exit={{
								top: active.rect.top,
								left: active.rect.left,
								width: active.rect.width,
								height: active.rect.height,
								opacity: 1,
							}}
							transition={{ duration, ease: EASE }}
							onClick={close}
						/>
					</div>
				</>
			)}
		</AnimatePresence>
	);
};

export default LightboxRoot;
