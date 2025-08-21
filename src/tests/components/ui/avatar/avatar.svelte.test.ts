import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Avatar } from '$lib/components/ui/avatar/index.js';

describe('Avatar Component', () => {
	it('should render without errors', async () => {
		const result = render(Avatar);
		expect(result).toBeDefined();
	});
});
