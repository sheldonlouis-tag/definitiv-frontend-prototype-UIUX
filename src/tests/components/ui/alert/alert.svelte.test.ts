import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Alert } from '$lib/components/ui/alert/index.js';

describe('Alert Component', () => {
	it('should render without errors', async () => {
		const result = render(Alert, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
