import type { Preview } from '@storybook/sveltekit';
import '../src/app.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		themes: {
			default: 'light',
			list: [
				{
					name: 'light',
					class: '',
					color: '#ffffff'
				},
				{
					name: 'dark',
					class: 'dark',
					color: '#0f0f23'
				}
			]
		}
	}
};

export default preview;
