<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group/index.js';
	import BoldIcon from '@lucide/svelte/icons/bold';
	import ItalicIcon from '@lucide/svelte/icons/italic';
	import UnderlineIcon from '@lucide/svelte/icons/underline';
	import AlignLeftIcon from '@lucide/svelte/icons/align-left';
	import AlignCenterIcon from '@lucide/svelte/icons/align-center';
	import AlignRightIcon from '@lucide/svelte/icons/align-right';

	/**
	 * ToggleGroup component stories showcasing different types and configurations.
	 * Toggle groups allow users to select one or multiple items from a set of related options.
	 */
	const { Story } = defineMeta({
		title: 'Components/ToggleGroup',
		component: ToggleGroup,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'outline']
			},
			size: {
				control: { type: 'select' },
				options: ['default', 'sm', 'lg']
			},
			type: {
				control: { type: 'select' },
				options: ['single', 'multiple']
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<ToggleGroup type="multiple" {...args}>
		<ToggleGroupItem value="a">A</ToggleGroupItem>
		<ToggleGroupItem value="b">B</ToggleGroupItem>
		<ToggleGroupItem value="c">C</ToggleGroupItem>
	</ToggleGroup>
{/snippet}

<Story name="Default" args={{ type: 'multiple' }} />

<Story name="Single">
	{#snippet template()}
		<ToggleGroup type="single">
			<ToggleGroupItem value="left">Left</ToggleGroupItem>
			<ToggleGroupItem value="center">Center</ToggleGroupItem>
			<ToggleGroupItem value="right">Right</ToggleGroupItem>
		</ToggleGroup>
	{/snippet}
</Story>

<Story name="Outline">
	{#snippet template()}
		<ToggleGroup type="multiple" variant="outline">
			<ToggleGroupItem value="bold">Bold</ToggleGroupItem>
			<ToggleGroupItem value="italic">Italic</ToggleGroupItem>
			<ToggleGroupItem value="underline">Underline</ToggleGroupItem>
		</ToggleGroup>
	{/snippet}
</Story>

<Story name="Small">
	{#snippet template()}
		<ToggleGroup type="single" size="sm">
			<ToggleGroupItem value="xs">XS</ToggleGroupItem>
			<ToggleGroupItem value="sm">SM</ToggleGroupItem>
			<ToggleGroupItem value="md">MD</ToggleGroupItem>
			<ToggleGroupItem value="lg">LG</ToggleGroupItem>
		</ToggleGroup>
	{/snippet}
</Story>

<Story name="Large">
	{#snippet template()}
		<ToggleGroup type="single" size="lg">
			<ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
			<ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
			<ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
		</ToggleGroup>
	{/snippet}
</Story>

<Story name="Text Formatting">
	{#snippet template()}
		<ToggleGroup type="multiple" variant="outline">
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<BoldIcon class="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<ItalicIcon class="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Toggle underline">
				<UnderlineIcon class="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	{/snippet}
</Story>

<Story name="Text Alignment">
	{#snippet template()}
		<ToggleGroup type="single" variant="outline">
			<ToggleGroupItem value="left" aria-label="Align left">
				<AlignLeftIcon class="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<AlignCenterIcon class="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right">
				<AlignRightIcon class="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	{/snippet}
</Story>

<Story name="Disabled">
	{#snippet template()}
		<ToggleGroup type="single" disabled>
			<ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
			<ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
			<ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
		</ToggleGroup>
	{/snippet}
</Story>
