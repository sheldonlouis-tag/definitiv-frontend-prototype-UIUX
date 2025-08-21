import type { TestRunnerConfig } from '@storybook/test-runner';
import { expect } from '@storybook/test';

const config: TestRunnerConfig = {
	async postVisit(page) {
		const elementHandler = await page.$('#storybook-root');
		const innerHTML = await elementHandler?.innerHTML();
		expect(innerHTML).toBeTruthy();
	}
};

export default config;
