<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger,
		SelectGroup,
		SelectSeparator,
		SelectGroupHeading
	} from '$lib/components/ui/select/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	/**
	 * Select component stories showcasing different configurations and usage patterns.
	 * Selects allow users to choose one option from a list of choices.
	 */
	const { Story } = defineMeta({
		title: 'Components/Select',
		component: Select,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Select type="single" {...args}>
		<SelectTrigger class="w-[180px]">Select a fruit</SelectTrigger>
		<SelectContent>
			<SelectItem value="apple">Apple</SelectItem>
			<SelectItem value="banana">Banana</SelectItem>
			<SelectItem value="blueberry">Blueberry</SelectItem>
			<SelectItem value="grapes">Grapes</SelectItem>
			<SelectItem value="pineapple">Pineapple</SelectItem>
		</SelectContent>
	</Select>
{/snippet}

<Story name="Default" />

<Story name="With Label">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="fruit-select">Fruit</Label>
			<Select type="single">
				<SelectTrigger id="fruit-select">Select a fruit</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="blueberry">Blueberry</SelectItem>
					<SelectItem value="grapes">Grapes</SelectItem>
					<SelectItem value="pineapple">Pineapple</SelectItem>
				</SelectContent>
			</Select>
		</div>
	{/snippet}
</Story>

<Story name="With Groups">
	{#snippet template()}
		<Select type="single">
			<SelectTrigger class="w-[280px]">Select a timezone</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectGroupHeading>North America</SelectGroupHeading>
					<SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
					<SelectItem value="cst">Central Standard Time (CST)</SelectItem>
					<SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
					<SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectGroupHeading>Europe & Africa</SelectGroupHeading>
					<SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
					<SelectItem value="cet">Central European Time (CET)</SelectItem>
					<SelectItem value="eet">Eastern European Time (EET)</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectGroupHeading>Asia</SelectGroupHeading>
					<SelectItem value="ist">India Standard Time (IST)</SelectItem>
					<SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
					<SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	{/snippet}
</Story>

<Story name="Small Size">
	{#snippet template()}
		<Select type="single">
			<SelectTrigger size="sm" class="w-[180px]">Small select</SelectTrigger>
			<SelectContent>
				<SelectItem value="option1">Option 1</SelectItem>
				<SelectItem value="option2">Option 2</SelectItem>
				<SelectItem value="option3">Option 3</SelectItem>
			</SelectContent>
		</Select>
	{/snippet}
</Story>

<Story name="Disabled">
	{#snippet template()}
		<Select type="single" disabled>
			<SelectTrigger class="w-[180px]">Disabled select</SelectTrigger>
			<SelectContent>
				<SelectItem value="option1">Option 1</SelectItem>
				<SelectItem value="option2">Option 2</SelectItem>
				<SelectItem value="option3">Option 3</SelectItem>
			</SelectContent>
		</Select>
	{/snippet}
</Story>
