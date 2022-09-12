# Svelte Media Query Store

Provide a reactive store to check media query in svelte.

## Usage

If you're seeing this, you've probably already done this step. Congrats!

```bash
<script>
    import { mediaQueryStore } from '$lib/mediaQueryStore';

    const isMobile = mediaQueryStore('(max-width: 600px');
</script>

<h2>{{ $isMobile }}</h2>
```

## Not finished
