import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { RadioGroup } from '$lib/components/ui/radio-group/index.js';

describe('RadioGroup Component', () => {
	it('should render without errors', async () => {
		const result = render(RadioGroup);
		expect(result).toBeDefined();
	});
});
