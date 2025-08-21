import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Separator } from '$lib/components/ui/separator/index.js';

describe('Separator Component', () => {
	it('should render without errors', async () => {
		const result = render(Separator);
		expect(result).toBeDefined();
	});
});
