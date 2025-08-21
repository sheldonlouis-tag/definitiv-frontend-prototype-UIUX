import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Command } from '$lib/components/ui/command/index.js';

describe('Command Component', () => {
	it('should render without errors', async () => {
		const result = render(Command);
		expect(result).toBeDefined();
	});
});
