import { readable } from 'svelte/store';

export function mediaQueryStore(query: string) {
	if (typeof window === 'undefined') {
		// check if it's rendered in the dom so window is not undefined
		return readable('');
	}
	const mediaQueryList = window.matchMedia(query);

	const mediaStore = readable(mediaQueryList.matches, (set) => {
		const handleChange = () => set(mediaQueryList.matches);

		try {
			mediaQueryList.addEventListener('change', handleChange);
		} catch (_) {
			mediaQueryList.addListener(handleChange);
		}

		return () => {
			try {
				mediaQueryList.removeEventListener('change', handleChange);
			} catch (_) {
				mediaQueryList.removeListener(handleChange);
			}
		};
	});

	return mediaStore;
}
