import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';

describe('RangeCalendar Component', () => {
	it('should render without errors', async () => {
		const result = render(RangeCalendar);
		expect(result).toBeDefined();
	});
});
