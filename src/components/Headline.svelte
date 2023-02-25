<script lang="ts">
	export let as = 'h2';
</script>

<svelte:element
	this={as}
	class={`text-5 font-black tracking-tight mbe-10 mbs-16 first-of-type:mbs-0 dark:font-extrabold ${
		$$props.class || ''
	}`}
>
	<slot />
</svelte:element>
