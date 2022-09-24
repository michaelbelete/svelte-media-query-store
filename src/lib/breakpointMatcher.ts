import { readable } from 'svelte/store';
export const breakpointMatcher = (mediaQueries: Record<string, MediaQueryList | string>) => {
	if (typeof window === 'undefined') return readable(null); //return null if window doesn't exist

	return readable<string | null>('', (set) => {
		// extract the breakpoints
		const breakpoints = Object.keys(mediaQueries);

		// convert sizes to <string, MediaQueryList>
		// this is converted here because of window undefined issue
		Object.keys(mediaQueries).forEach(
			(mql) => (mediaQueries[mql] = window.matchMedia(mediaQueries[mql] as string))
		);

		// function that set current breakpoint
		function setCurrentBreakPoint() {
			for (const size of breakpoints) {
				// i used forEach but break doesn't work
				const mql = mediaQueries[size] as MediaQueryList;
				if (mql?.matches) {
					set(size);
				}
			}
		}

		setCurrentBreakPoint(); //set the current breakpoint for the first time
		window.addEventListener('resize', () => {
			// TODO: figure out a way to change the resize event
			setCurrentBreakPoint(); //set the current breakpoint when the size change
		});
	});
};
