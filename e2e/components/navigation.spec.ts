import { test, expect } from '@playwright/test';

test.describe('Navigation Components E2E', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should render page without navigation component errors', async ({ page }) => {
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
				error.includes('accordion') ||
				error.includes('tabs') ||
				error.includes('navigation') ||
				error.includes('breadcrumb') ||
				error.includes('Accordion') ||
				error.includes('Tabs') ||
				error.includes('Navigation') ||
				error.includes('Breadcrumb')
		);

		expect(componentErrors).toHaveLength(0);
	});

	test('should have accessible navigation structure', async ({ page }) => {
		const navElements = page.locator('nav');
		const navCount = await navElements.count();

		for (let i = 0; i < navCount; i++) {
			const nav = navElements.nth(i);
			const ariaLabel = await nav.getAttribute('aria-label');
			const ariaLabelledby = await nav.getAttribute('aria-labelledby');

			expect(ariaLabel || ariaLabelledby).toBeTruthy();
		}

		const tabLists = page.locator('[role="tablist"]');
		const tabListCount = await tabLists.count();

		for (let i = 0; i < tabListCount; i++) {
			const tabList = tabLists.nth(i);
			const tabs = tabList.locator('[role="tab"]');
			const tabCount = await tabs.count();

			expect(tabCount).toBeGreaterThan(0);

			for (let j = 0; j < tabCount; j++) {
				const tab = tabs.nth(j);
				const ariaControls = await tab.getAttribute('aria-controls');
				const ariaSelected = await tab.getAttribute('aria-selected');

				expect(ariaControls).toBeTruthy();
				expect(ariaSelected).toBeTruthy();
			}
		}
	});
});
