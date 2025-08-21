import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { ContextMenu } from '$lib/components/ui/context-menu/index.js';

describe('ContextMenu Component', () => {
	it('should render without errors', async () => {
		const result = render(ContextMenu);
		expect(result).toBeDefined();
	});
});
