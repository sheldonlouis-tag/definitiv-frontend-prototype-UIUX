import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Progress } from '$lib/components/ui/progress/index.js';

describe('Progress Component', () => {
	it('should render without errors', async () => {
		const result = render(Progress, {
			props: {
				value: 50
			}
		});
		expect(result).toBeDefined();
	});
});
