[![npm version](https://badge.fury.io/js/svelte-media-query-store.svg)](https://badge.fury.io/js/svelte-media-query-store)

# Svelte Media Query Store

Provide a reactive store to check media query in svelte.

## Installation

```bash
$ npm i svelte-media-query-store
```

## Usage

The package takes a string query, such as (min-width: 800px) and returns a **readable store**.

### In frontend

```bash
<script lang="ts">
  import {mediaQueryStore} from 'svelte-media-query-store/mediaQueryStore';

  const isMobile = mediaQueryStore("(max-width: 600px)");
</script>

<h2>{$isMobile}</h2> <!-- subscribing to the readable store --->
```

## In Store

### store.ts

```bash
## store.ts
import { mediaQueryStore } from 'svelte-media-query-store/mediaQueryStore';

export const md = mediaQueryStore('(min-width: 768px)');

export const lg = mediaQueryStore('(min-width: 1024px)');

```

### App.svelte

```bash
<script lang="ts">
  import { md,lg } from '$lib/store'; //
</script>

<h2>md: {$md}</h2>
<h2>lg: {$lg}</h2>

```

## Example

https://stackblitz.com/edit/vitejs-vite-xdvbuz?file=src/App.svelte

## Author

- Michael Belete [https://github.com/michaelbelete]
