import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Button } from '$lib/components/ui/button/index.js';

describe('Button Component', () => {
	it('should render without errors', async () => {
		const result = render(Button, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
