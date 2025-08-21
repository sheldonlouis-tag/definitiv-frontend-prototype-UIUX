import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { AlertDialog } from '$lib/components/ui/alert-dialog/index.js';

describe('AlertDialog Component', () => {
	it('should render without errors', async () => {
		const result = render(AlertDialog);
		expect(result).toBeDefined();
	});
});
