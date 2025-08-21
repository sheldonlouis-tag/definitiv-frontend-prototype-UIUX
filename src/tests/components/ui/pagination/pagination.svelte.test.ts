import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Pagination } from '$lib/components/ui/pagination/index.js';

describe('Pagination Component', () => {
	it('should render without errors', async () => {
		const result = render(Pagination);
		expect(result).toBeDefined();
	});
});
