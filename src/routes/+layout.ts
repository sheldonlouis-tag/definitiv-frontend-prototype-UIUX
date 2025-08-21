import type { LayoutLoad } from './$types.js';

// Enable prerendering for static content but allow fallback for dynamic routes
export const prerender = 'auto';
export const ssr = true;
export const csr = true;

export const load: LayoutLoad = async ({ url }: { url: URL }) => {
	// For frontend development, no authentication checks
	// All routes are accessible directly
	return {
		isAuthenticated: true // Always return true for development
	};
};
