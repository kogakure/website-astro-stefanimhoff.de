<script>
	const currentDate = new Date();
	const isoDate = currentDate.toISOString();
	const currentYear = currentDate.getFullYear();
</script>

<time datetime={isoDate}>2006–{currentYear}</time>
