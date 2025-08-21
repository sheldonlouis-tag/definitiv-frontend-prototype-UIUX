import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { ToggleGroup } from '$lib/components/ui/toggle-group/index.js';

describe('ToggleGroup Component', () => {
	it('should render without errors', async () => {
		const result = render(ToggleGroup);
		expect(result).toBeDefined();
	});
});
