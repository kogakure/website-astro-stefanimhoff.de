<script lang="ts">
	export let as = 'h1';
</script>

<svelte:element
	this={as}
	class={`text-7 font-black tracking-tight mbe-13 dark:font-extrabold ${$$props.class || ''}`}
>
	<slot />
</svelte:element>
