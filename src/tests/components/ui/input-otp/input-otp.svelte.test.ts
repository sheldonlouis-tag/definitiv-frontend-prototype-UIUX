import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { InputOTP } from '$lib/components/ui/input-otp/index.js';

describe('InputOTP Component', () => {
	it('should render without errors', async () => {
		const result = render(InputOTP);
		expect(result).toBeDefined();
	});
});
