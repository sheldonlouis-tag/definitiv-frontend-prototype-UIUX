import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Carousel } from '$lib/components/ui/carousel/index.js';

describe('Carousel Component', () => {
	it('should render without errors', async () => {
		const result = render(Carousel);
		expect(result).toBeDefined();
	});
});
