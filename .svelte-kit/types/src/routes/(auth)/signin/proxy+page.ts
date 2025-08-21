// @ts-nocheck
export const prerender = false;
export const ssr = true;
export const csr = true;

import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export const load = async ({ url }: Parameters<PageLoad>[0]) => {
	// Check if user is already authenticated via URL parameter
	const isAuthenticated = url.searchParams.get('auth') === 'true';
	
	// If user is authenticated, redirect to dashboard
	if (isAuthenticated) {
		throw redirect(302, '/');
	}
	
	return {};
};
