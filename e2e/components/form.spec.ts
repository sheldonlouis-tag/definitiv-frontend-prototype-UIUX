import { test, expect } from '@playwright/test';

test.describe('Form Component E2E', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should render page without form errors', async ({ page }) => {
		await expect(page.locator('h1')).toBeVisible();

		const errors: string[] = [];
		page.on('console', (msg) => {
			if (msg.type() === 'error') {
				errors.push(msg.text());
			}
		});

		await page.waitForTimeout(1000);

		const componentErrors = errors.filter(
			(error) => error.includes('form') || error.includes('Form') || error.includes('field')
		);

		expect(componentErrors).toHaveLength(0);
	});

	test('should have proper form accessibility', async ({ page }) => {
		await expect(page.locator('html')).toHaveAttribute('lang');

		const forms = page.locator('form');
		const formCount = await forms.count();

		for (let i = 0; i < formCount; i++) {
			const form = forms.nth(i);
			const inputs = form.locator('input, select, textarea');
			const inputCount = await inputs.count();

			for (let j = 0; j < inputCount; j++) {
				const input = inputs.nth(j);
				const id = await input.getAttribute('id');
				if (id) {
					const label = page.locator(`label[for="${id}"]`);
					await expect(label).toBeVisible();
				}
			}
		}
	});
});
