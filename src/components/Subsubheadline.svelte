<script lang="ts">
	export let as = 'h4';
</script>

<svelte:element
	this={as}
	class={`text-3 font-black tracking-tight mbe-5 mbs-14 first-of-type:mbs-0 dark:font-extrabold ${
		$$props.class || ''
	}`}
>
	<slot />
</svelte:element>
