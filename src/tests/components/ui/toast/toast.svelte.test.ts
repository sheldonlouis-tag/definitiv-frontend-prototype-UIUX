import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Toaster } from '$lib/components/ui/sonner/index.js';

describe('Toast Component', () => {
	it('should render without errors', async () => {
		const result = render(Toaster);
		expect(result).toBeDefined();
	});
});
