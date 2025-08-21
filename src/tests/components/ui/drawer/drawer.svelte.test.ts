import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Drawer } from '$lib/components/ui/drawer/index.js';

describe('Drawer Component', () => {
	it('should render without errors', async () => {
		const result = render(Drawer);
		expect(result).toBeDefined();
	});
});
