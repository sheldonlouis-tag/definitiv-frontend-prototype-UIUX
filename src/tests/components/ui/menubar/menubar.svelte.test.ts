import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Menubar } from '$lib/components/ui/menubar/index.js';

describe('Menubar Component', () => {
	it('should render without errors', async () => {
		const result = render(Menubar);
		expect(result).toBeDefined();
	});
});
