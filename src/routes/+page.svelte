<script lang="ts">
	import { mediaQueryStore } from '$lib/mediaQueryStore';

	const isMobile = mediaQueryStore('(max-width: 768px)');
</script>

<h1>Svelte Media Query Store</h1>
<h2>{$isMobile}</h2>
