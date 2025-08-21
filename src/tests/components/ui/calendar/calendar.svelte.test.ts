import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Calendar } from '$lib/components/ui/calendar/index.js';

describe('Calendar Component', () => {
	it('should render without errors', async () => {
		const result = render(Calendar);
		expect(result).toBeDefined();
	});
});
