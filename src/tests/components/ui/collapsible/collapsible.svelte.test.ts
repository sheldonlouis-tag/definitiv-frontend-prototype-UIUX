import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Collapsible } from '$lib/components/ui/collapsible/index.js';

describe('Collapsible Component', () => {
	it('should render without errors', async () => {
		const result = render(Collapsible);
		expect(result).toBeDefined();
	});
});
