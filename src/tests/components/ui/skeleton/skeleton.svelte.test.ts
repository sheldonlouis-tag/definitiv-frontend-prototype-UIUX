import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Skeleton } from '$lib/components/ui/skeleton/index.js';

describe('Skeleton Component', () => {
	it('should render without errors', async () => {
		const result = render(Skeleton);
		expect(result).toBeDefined();
	});
});
