<script lang="ts">
	export let as = 'h3';
</script>

<svelte:element
	this={as}
	class={`text-4 font-black tracking-tight mbe-8 mbs-14 first-of-type:mbs-0 dark:font-extrabold ${
		$$props.class || ''
	}`}
>
	<slot />
</svelte:element>
