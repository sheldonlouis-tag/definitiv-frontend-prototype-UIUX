import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Card } from '$lib/components/ui/card/index.js';

describe('Card Component', () => {
	it('should render without errors', async () => {
		const result = render(Card, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
