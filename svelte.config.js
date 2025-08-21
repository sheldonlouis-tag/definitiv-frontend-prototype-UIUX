import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: { 
		adapter: adapter({
			// Change output directory to match Netlify expectation
			pages: 'dist',
			assets: 'dist',
			// Enable SPA fallback to handle all routes
			fallback: 'index.html',
			// Disable strict mode to allow dynamic routes
			strict: false,
			// Additional prerender options
			precompress: false
		}),
		// Configure prerender options
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn'
		}
	}
};

export default config;
