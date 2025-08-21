import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { ChartContainer } from '$lib/components/ui/chart/index.js';

describe('Chart Component', () => {
	it('should render without errors', async () => {
		const result = render(ChartContainer, {
			config: {}
		});
		expect(result).toBeDefined();
	});
});
