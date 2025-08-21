import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { ResizablePaneGroup } from '$lib/components/ui/resizable/index.js';

describe('Resizable Component', () => {
	it('should render without errors', async () => {
		const result = render(ResizablePaneGroup);
		expect(result).toBeDefined();
	});
});
