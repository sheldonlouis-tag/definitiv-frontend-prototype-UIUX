import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Checkbox } from '$lib/components/ui/checkbox/index.js';

describe('Checkbox Component', () => {
	it('should render without errors', async () => {
		const result = render(Checkbox);
		expect(result).toBeDefined();
	});
});
