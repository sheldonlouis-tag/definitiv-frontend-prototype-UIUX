import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Breadcrumb } from '$lib/components/ui/breadcrumb/index.js';

describe('Breadcrumb Component', () => {
	it('should render without errors', async () => {
		const result = render(Breadcrumb);
		expect(result).toBeDefined();
	});
});
