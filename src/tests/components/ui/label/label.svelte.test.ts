import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Label } from '$lib/components/ui/label/index.js';

describe('Label Component', () => {
	it('should render without errors', async () => {
		const result = render(Label, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
