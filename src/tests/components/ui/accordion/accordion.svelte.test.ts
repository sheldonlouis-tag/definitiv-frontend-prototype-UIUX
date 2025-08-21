import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Accordion } from '$lib/components/ui/accordion/index.js';

describe('Accordion Component', () => {
	it('should render without errors', async () => {
		const result = render(Accordion);
		expect(result).toBeDefined();
	});
});
