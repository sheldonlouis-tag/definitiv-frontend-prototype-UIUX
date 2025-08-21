<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';

	/**
	 * Label component stories showcasing different usage patterns.
	 * Labels provide accessible names for form controls.
	 */
	const { Story } = defineMeta({
		title: 'Components/Label',
		component: Label,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		args: {
			children: 'Label'
		},
		argTypes: {
			for: {
				control: { type: 'text' }
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Label {...args}>{args.children}</Label>
{/snippet}

<Story name="Default" />

<Story name="With Input">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="email">Email</Label>
			<Input type="email" id="email" placeholder="Email" />
		</div>
	{/snippet}
</Story>

<Story name="With Checkbox">
	{#snippet template()}
		<div class="flex items-center space-x-2">
			<Checkbox id="terms" />
			<Label for="terms">Accept terms and conditions</Label>
		</div>
	{/snippet}
</Story>

<Story name="Required">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="required">
				Required Field
				<span class="text-destructive">*</span>
			</Label>
			<Input type="text" id="required" placeholder="This field is required" />
		</div>
	{/snippet}
</Story>

<Story name="Disabled">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="disabled">Disabled Field</Label>
			<Input type="text" id="disabled" placeholder="Disabled input" disabled />
		</div>
	{/snippet}
</Story>
