import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Textarea } from '$lib/components/ui/textarea/index.js';

describe('Textarea Component', () => {
	it('should render without errors', async () => {
		const result = render(Textarea);
		expect(result).toBeDefined();
	});
});
