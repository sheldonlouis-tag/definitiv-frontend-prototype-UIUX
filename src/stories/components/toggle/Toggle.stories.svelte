<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Toggle } from '$lib/components/ui/toggle/index.js';
	import BoldIcon from '@lucide/svelte/icons/bold';
	import ItalicIcon from '@lucide/svelte/icons/italic';
	import UnderlineIcon from '@lucide/svelte/icons/underline';

	/**
	 * Toggle component stories showcasing all variants, sizes, and states.
	 * Toggles are two-state buttons that can be either on or off.
	 */
	const { Story } = defineMeta({
		title: 'Components/Toggle',
		component: Toggle,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		args: {
			children: 'Toggle'
		},
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'outline']
			},
			size: {
				control: { type: 'select' },
				options: ['default', 'sm', 'lg']
			},
			pressed: {
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
	<Toggle {...args}>{args.children}</Toggle>
{/snippet}

<Story name="Default" />

<Story name="Outline" args={{ variant: 'outline', children: 'Outline' }} />

<Story name="Pressed" args={{ pressed: true, children: 'Pressed' }} />

<Story name="Disabled" args={{ disabled: true, children: 'Disabled' }} />

<Story name="Small" args={{ size: 'sm', children: 'Small' }} />

<Story name="Large" args={{ size: 'lg', children: 'Large' }} />

<Story name="With Icon">
	{#snippet template()}
		<Toggle variant="outline">
			<BoldIcon class="h-4 w-4" />
		</Toggle>
	{/snippet}
</Story>

<Story name="All Variants">
	{#snippet template()}
		<div class="flex items-center gap-2">
			<Toggle>Default</Toggle>
			<Toggle variant="outline">Outline</Toggle>
			<Toggle pressed={true}>Pressed</Toggle>
			<Toggle disabled={true}>Disabled</Toggle>
		</div>
	{/snippet}
</Story>

<Story name="All Sizes">
	{#snippet template()}
		<div class="flex items-center gap-2">
			<Toggle size="sm">Small</Toggle>
			<Toggle>Default</Toggle>
			<Toggle size="lg">Large</Toggle>
		</div>
	{/snippet}
</Story>

<Story name="Text Formatting">
	{#snippet template()}
		<div class="flex items-center gap-1">
			<Toggle variant="outline" aria-label="Toggle bold">
				<BoldIcon class="h-4 w-4" />
			</Toggle>
			<Toggle variant="outline" aria-label="Toggle italic">
				<ItalicIcon class="h-4 w-4" />
			</Toggle>
			<Toggle variant="outline" aria-label="Toggle underline">
				<UnderlineIcon class="h-4 w-4" />
			</Toggle>
		</div>
	{/snippet}
</Story>
