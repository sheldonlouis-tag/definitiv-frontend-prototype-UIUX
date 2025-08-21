import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Sheet } from '$lib/components/ui/sheet/index.js';

describe('Sheet Component', () => {
	it('should render without errors', async () => {
		const result = render(Sheet);
		expect(result).toBeDefined();
	});
});
