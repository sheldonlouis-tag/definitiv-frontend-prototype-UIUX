import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { DropdownMenu } from '$lib/components/ui/dropdown-menu/index.js';

describe('DropdownMenu Component', () => {
	it('should render without errors', async () => {
		const result = render(DropdownMenu);
		expect(result).toBeDefined();
	});
});
