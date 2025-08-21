<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	/**
	 * Input component stories showcasing all input types and states.
	 * Inputs are form controls for collecting user data.
	 */
	const { Story } = defineMeta({
		title: 'Components/Input',
		component: Input,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		args: {
			placeholder: 'Enter text...'
		},
		argTypes: {
			type: {
				control: { type: 'select' },
				options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'file']
			},
			placeholder: {
				control: { type: 'text' }
			},
			disabled: {
				control: { type: 'boolean' }
			},
			value: {
				control: { type: 'text' }
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Input {...args} />
{/snippet}

<Story name="Default" />

<Story name="With Value" args={{ value: 'Sample text' }} />

<Story name="Email" args={{ type: 'email', placeholder: 'Enter email...' }} />

<Story name="Password" args={{ type: 'password', placeholder: 'Enter password...' }} />

<Story name="Number" args={{ type: 'number', placeholder: 'Enter number...' }} />

<Story name="Search" args={{ type: 'search', placeholder: 'Search...' }} />

<Story name="File" args={{ type: 'file', placeholder: undefined }} />

<Story name="Disabled" args={{ disabled: true, placeholder: 'Disabled input' }} />

<Story name="With Label">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="email">Email</Label>
			<Input type="email" id="email" placeholder="Email" />
		</div>
	{/snippet}
</Story>

<Story name="With Error">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="email-error">Email</Label>
			<Input type="email" id="email-error" placeholder="Email" aria-invalid="true" />
			<p class="text-sm text-destructive">Please enter a valid email address.</p>
		</div>
	{/snippet}
</Story>

<Story name="All Types">
	{#snippet template()}
		<div class="w-full max-w-sm space-y-4">
			<div>
				<Label for="text">Text</Label>
				<Input type="text" id="text" placeholder="Text input" />
			</div>
			<div>
				<Label for="email-all">Email</Label>
				<Input type="email" id="email-all" placeholder="Email input" />
			</div>
			<div>
				<Label for="password-all">Password</Label>
				<Input type="password" id="password-all" placeholder="Password input" />
			</div>
			<div>
				<Label for="number-all">Number</Label>
				<Input type="number" id="number-all" placeholder="Number input" />
			</div>
			<div>
				<Label for="tel">Telephone</Label>
				<Input type="tel" id="tel" placeholder="Telephone input" />
			</div>
			<div>
				<Label for="url">URL</Label>
				<Input type="url" id="url" placeholder="URL input" />
			</div>
			<div>
				<Label for="search-all">Search</Label>
				<Input type="search" id="search-all" placeholder="Search input" />
			</div>
			<div>
				<Label for="file-all">File</Label>
				<Input type="file" id="file-all" />
			</div>
		</div>
	{/snippet}
</Story>
