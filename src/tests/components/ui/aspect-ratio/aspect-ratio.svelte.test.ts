import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';

describe('AspectRatio Component', () => {
	it('should render without errors', async () => {
		const result = render(AspectRatio, {
			props: {
				ratio: 16 / 9
			}
		});
		expect(result).toBeDefined();
	});
});
