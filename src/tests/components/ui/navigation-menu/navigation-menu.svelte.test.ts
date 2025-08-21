import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { NavigationMenuRoot } from '$lib/components/ui/navigation-menu/index.js';

describe('NavigationMenu Component', () => {
	it('should render without errors', async () => {
		const result = render(NavigationMenuRoot);
		expect(result).toBeDefined();
	});
});
