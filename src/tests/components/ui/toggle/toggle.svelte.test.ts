import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Toggle } from '$lib/components/ui/toggle/index.js';

describe('Toggle Component', () => {
	it('should render without errors', async () => {
		const result = render(Toggle, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
