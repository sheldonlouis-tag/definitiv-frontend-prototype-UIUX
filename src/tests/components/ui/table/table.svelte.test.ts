import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Table } from '$lib/components/ui/table/index.js';

describe('Table Component', () => {
	it('should render without errors', async () => {
		const result = render(Table, {
			props: {}
		});
		expect(result).toBeDefined();
	});
});
