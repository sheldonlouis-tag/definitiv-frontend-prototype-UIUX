import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Badge } from '$lib/components/ui/badge/index.js';

describe('Badge Component', () => {
	it('should render without errors', async () => {
		const result = render(Badge, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
