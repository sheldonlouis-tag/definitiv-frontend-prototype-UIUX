import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Popover } from '$lib/components/ui/popover/index.js';

describe('Popover Component', () => {
	it('should render without errors', async () => {
		const result = render(Popover);
		expect(result).toBeDefined();
	});
});
