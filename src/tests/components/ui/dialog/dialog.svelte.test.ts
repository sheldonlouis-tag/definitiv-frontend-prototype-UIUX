import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Dialog } from '$lib/components/ui/dialog/index.js';

describe('Dialog Component', () => {
	it('should render without errors', async () => {
		const result = render(Dialog);
		expect(result).toBeDefined();
	});
});
