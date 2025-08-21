import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { FlexRender } from '$lib/components/ui/data-table/index.js';

describe('DataTable Component', () => {
	it('should render without errors', async () => {
		const result = render(FlexRender);
		expect(result).toBeDefined();
	});
});
