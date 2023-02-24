<script>
	import { onDestroy, onMount } from 'svelte';

	let observer;
	let isDarkMode = false;

	const checkDarkMode = () => {
		isDarkMode = document.documentElement.classList.contains('dark');
	};

	onMount(() => {
		checkDarkMode();

		observer = new MutationObserver(() => {
			checkDarkMode();
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});
	});

	onDestroy(() => {
		observer.disconnect();
	});
</script>

<div class={!isDarkMode && 'hidden'}>
	<slot name="dark" />
</div>
<div class={isDarkMode && 'hidden'}>
	<slot name="light" />
</div>
