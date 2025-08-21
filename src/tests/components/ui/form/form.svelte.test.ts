import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Control } from '$lib/components/ui/form/index.js';

describe('Form Component', () => {
	it('should render without errors', async () => {
		const result = render(Control);
		expect(result).toBeDefined();
	});
});
