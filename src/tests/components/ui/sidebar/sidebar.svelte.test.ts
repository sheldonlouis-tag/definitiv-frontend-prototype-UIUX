import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { SidebarProvider } from '$lib/components/ui/sidebar/index.js';

describe('Sidebar Component', () => {
	it('should render without errors', async () => {
		const result = render(SidebarProvider, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
