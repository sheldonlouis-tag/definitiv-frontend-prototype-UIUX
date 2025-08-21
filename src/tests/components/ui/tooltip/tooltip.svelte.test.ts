import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { TooltipProvider } from '$lib/components/ui/tooltip/index.js';

describe('Tooltip Component', () => {
	it('should render without errors', async () => {
		const result = render(TooltipProvider);
		expect(result).toBeDefined();
	});
});
