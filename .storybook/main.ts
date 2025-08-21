import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@chromatic-com/storybook',
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-vitest',
		'@storybook/addon-themes'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	viteFinal: async (config) => {
		if (config.define) {
			config.define['import.meta.vitest'] = 'undefined';
		}
		return config;
	}
};
export default config;
