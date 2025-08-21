import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Input } from '$lib/components/ui/input/index.js';

describe('Input Component', () => {
	it('should render without errors', async () => {
		const result = render(Input);
		expect(result).toBeDefined();
	});
});
