import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

describe('ScrollArea Component', () => {
	it('should render without errors', async () => {
		const result = render(ScrollArea, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
