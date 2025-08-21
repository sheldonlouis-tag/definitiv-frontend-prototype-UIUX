import type { LayoutLoad } from './$types.js';

export const load: LayoutLoad = async ({ url }: { url: URL }) => {
	// For frontend development, no authentication checks
	return {
		// Pass any auth-related data to the layout
	};
};
