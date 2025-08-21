<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	/**
	 * Checkbox component stories showcasing all states and usage patterns.
	 * Checkboxes allow users to select one or more items from a set.
	 */
	const { Story } = defineMeta({
		title: 'Components/Checkbox',
		component: Checkbox,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			checked: {
				control: { type: 'boolean' }
			},
			indeterminate: {
				control: { type: 'boolean' }
			},
			disabled: {
				control: { type: 'boolean' }
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Checkbox {...args} />
{/snippet}

<Story name="Default" args={{ checked: false }} />

<Story name="Checked" args={{ checked: true }} />

<Story name="Indeterminate" args={{ indeterminate: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Disabled Checked" args={{ checked: true, disabled: true }} />

<Story name="With Label">
	{#snippet template(args: Record<string, unknown>)}
		<div class="flex items-center space-x-2">
			<Checkbox id="terms" {...args} />
			<Label for="terms">Accept terms and conditions</Label>
		</div>
	{/snippet}
</Story>

<Story name="All States">
	{#snippet template()}
		<div class="space-y-4">
			<div class="flex items-center space-x-2">
				<Checkbox id="unchecked" />
				<Label for="unchecked">Unchecked</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Checkbox id="checked" checked={true} />
				<Label for="checked">Checked</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Checkbox id="indeterminate" indeterminate={true} />
				<Label for="indeterminate">Indeterminate</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Checkbox id="disabled" disabled={true} />
				<Label for="disabled">Disabled</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Checkbox id="disabled-checked" checked={true} disabled={true} />
				<Label for="disabled-checked">Disabled Checked</Label>
			</div>
		</div>
	{/snippet}
</Story>
