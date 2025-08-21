import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Select } from '$lib/components/ui/select/index.js';

describe('Select Component', () => {
	it('should render without errors', async () => {
		const result = render(Select);
		expect(result).toBeDefined();
	});
});
