[![npm version](https://badge.fury.io/js/svelte-media-query-store.svg)](https://badge.fury.io/js/svelte-media-query-store)

# Svelte Media Query Store

Provides you with a reactive store for checking CSS media queries and breakpoint matcher that keep track of the matching state of the given media queries .

## Features

- **CSS Media Queries Matcher** -
  Takes a string query, such as (min-width: 800px) and returns a readable store.
- **Breakpoint Matcher :** Takes object with breakpoint as a key and a string query as a value and observes browser changes accordingly and returns the matching breakpoint.

## Installation

```bash
$ npm i svelte-media-query-store
```

## Usage

### Breakpoint Matcher

Takes object with breakpoint as a key and a string query as a value and observes browser changes accordingly and returns the matching breakpoint.

```bash
<script lang="ts">
  import { derived } from 'svelte/store';
  import { breakpointMatcher } from './lib/store';

  const breakpoints: Record<string, string> = {
    'sm': '(min-width: 640px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 1024px)',
    'xl': '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)'
  };

  const breakpoints = breakpointMatcher(breakpoints);

  // use derived store for conditions so it can be reactive
  const isXl = derived(breakpoints, ($breakpoints) => {
    return $breakpoints === 'xl';
  });
</script>
<h1>{$breakpoints}</h1>

<h2>{$isXl}</h2>

```

### CSS Media Queries Matcher

The package takes a string query, such as (min-width: 800px) and returns a **readable store**.

#### In frontend

```bash
<script lang="ts">
  import {mediaQueryStore} from 'svelte-media-query-store';

  const isMobile = mediaQueryStore("(max-width: 600px)");
</script>

<h2>{$isMobile}</h2> <!-- subscribing to the readable store --->
```

### In Store

#### store.ts

```bash
## store.ts
import { mediaQueryStore } from 'svelte-media-query-store';

export const md = mediaQueryStore('(min-width: 768px)');

export const lg = mediaQueryStore('(min-width: 1024px)');

```

#### App.svelte

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
