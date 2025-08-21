import { test, expect } from '@playwright/test';

test.describe('Interactive Components E2E', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should render page without interactive component errors', async ({ page }) => {
		await expect(page.locator('h1')).toBeVisible();

		const errors: string[] = [];
		page.on('console', (msg) => {
			if (msg.type() === 'error') {
				errors.push(msg.text());
			}
		});

		await page.waitForTimeout(1000);

		const componentErrors = errors.filter(
			(error) =>
				error.includes('button') ||
				error.includes('checkbox') ||
				error.includes('switch') ||
				error.includes('radio') ||
				error.includes('slider') ||
				error.includes('Button') ||
				error.includes('Checkbox') ||
				error.includes('Switch')
		);

		expect(componentErrors).toHaveLength(0);
	});

	test('should have accessible interactive elements', async ({ page }) => {
		const buttons = page.locator('button');
		const buttonCount = await buttons.count();

		for (let i = 0; i < buttonCount; i++) {
			const button = buttons.nth(i);
			const ariaLabel = await button.getAttribute('aria-label');
			const textContent = await button.textContent();

			expect(ariaLabel || textContent).toBeTruthy();
		}

		const inputs = page.locator('input');
		const inputCount = await inputs.count();

		for (let i = 0; i < inputCount; i++) {
			const input = inputs.nth(i);
			const type = await input.getAttribute('type');

			if (type === 'checkbox' || type === 'radio') {
				const id = await input.getAttribute('id');
				if (id) {
					const label = page.locator(`label[for="${id}"]`);
					await expect(label).toBeVisible();
				}
			}
		}
	});
});
