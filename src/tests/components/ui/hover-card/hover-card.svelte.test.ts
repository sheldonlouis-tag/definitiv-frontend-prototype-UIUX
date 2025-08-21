import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { HoverCard } from '$lib/components/ui/hover-card/index.js';

describe('HoverCard Component', () => {
	it('should render without errors', async () => {
		const result = render(HoverCard);
		expect(result).toBeDefined();
	});
});
