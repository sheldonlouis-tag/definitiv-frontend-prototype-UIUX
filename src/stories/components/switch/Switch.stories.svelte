<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	/**
	 * Switch component stories showcasing different states and usage patterns.
	 * Switches are toggle controls that allow users to turn options on or off.
	 */
	const { Story } = defineMeta({
		title: 'Components/Switch',
		component: Switch,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		args: {
			checked: false
		},
		argTypes: {
			checked: {
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
	<Switch {...args} />
{/snippet}

<Story name="Default" />

<Story name="Checked" args={{ checked: true }} />

<Story name="Disabled" args={{ disabled: true }} />

<Story name="Disabled Checked" args={{ checked: true, disabled: true }} />

<Story name="With Label">
	{#snippet template()}
		<div class="flex items-center space-x-2">
			<Switch id="airplane-mode" />
			<Label for="airplane-mode">Airplane Mode</Label>
		</div>
	{/snippet}
</Story>

<Story name="All States">
	{#snippet template()}
		<div class="space-y-4">
			<div class="flex items-center space-x-2">
				<Switch id="unchecked" />
				<Label for="unchecked">Unchecked</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Switch id="checked" checked={true} />
				<Label for="checked">Checked</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Switch id="disabled" disabled={true} />
				<Label for="disabled">Disabled</Label>
			</div>
			<div class="flex items-center space-x-2">
				<Switch id="disabled-checked" checked={true} disabled={true} />
				<Label for="disabled-checked">Disabled Checked</Label>
			</div>
		</div>
	{/snippet}
</Story>

<Story name="Settings">
	{#snippet template()}
		<div class="space-y-6">
			<div>
				<h3 class="text-lg font-medium">Notifications</h3>
				<p class="text-sm text-muted-foreground">Configure your notification preferences.</p>
			</div>
			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<div class="space-y-0.5">
						<Label for="marketing">Marketing emails</Label>
						<p class="text-sm text-muted-foreground">
							Receive emails about new products and features.
						</p>
					</div>
					<Switch id="marketing" />
				</div>
				<div class="flex items-center justify-between">
					<div class="space-y-0.5">
						<Label for="security">Security emails</Label>
						<p class="text-sm text-muted-foreground">
							Receive emails about product updates and improvements.
						</p>
					</div>
					<Switch id="security" checked={true} />
				</div>
				<div class="flex items-center justify-between">
					<div class="space-y-0.5">
						<Label for="updates">Product updates</Label>
						<p class="text-sm text-muted-foreground">
							Receive emails about product updates and improvements.
						</p>
					</div>
					<Switch id="updates" />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
