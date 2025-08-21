import { test, expect } from '@playwright/test';

test.describe('Calendar Component E2E', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should render page without calendar component errors', async ({ page }) => {
		await expect(page.locator('h1')).toBeVisible();

		const errors: string[] = [];
		page.on('console', (msg) => {
			if (msg.type() === 'error') {
				errors.push(msg.text());
			}
		});

		await page.waitForTimeout(1000);

		const componentErrors = errors.filter(
			(error) => error.includes('calendar') || error.includes('Calendar')
		);

		expect(componentErrors).toHaveLength(0);
	});

	test('should have accessible page structure', async ({ page }) => {
		await expect(page.locator('html')).toHaveAttribute('lang');
		await expect(page.locator('h1')).toBeVisible();
	});
});
