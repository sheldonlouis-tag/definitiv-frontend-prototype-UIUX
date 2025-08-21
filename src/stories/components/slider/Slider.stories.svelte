<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Slider } from '$lib/components/ui/slider/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	/**
	 * Slider component stories showcasing different configurations and orientations.
	 * Sliders allow users to select a value or range of values by moving a handle along a track.
	 */
	const { Story } = defineMeta({
		title: 'Components/Slider',
		component: Slider,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		args: {
			type: 'single',
			value: 50,
			max: 100,
			step: 1
		},
		argTypes: {
			value: {
				control: { type: 'object' }
			},
			min: {
				control: { type: 'number' }
			},
			max: {
				control: { type: 'number' }
			},
			step: {
				control: { type: 'number' }
			},
			orientation: {
				control: { type: 'select' },
				options: ['horizontal', 'vertical']
			},
			disabled: {
				control: { type: 'boolean' }
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<div class="w-60">
		<Slider type="single" value={50} max={100} step={1} {...args} />
	</div>
{/snippet}

<Story name="Default" />

<Story name="With Range" args={{ value: [25, 75] }} />

<Story name="With Step" args={{ value: [20], step: 10 }} />

<Story name="Disabled" args={{ value: [50], disabled: true }} />

<Story name="Vertical">
	{#snippet template()}
		<div class="h-64">
			<Slider type="single" value={50} max={100} step={1} orientation="vertical" />
		</div>
	{/snippet}
</Story>

<Story name="With Label">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="volume">Volume</Label>
			<Slider type="single" id="volume" value={33} max={100} step={1} class="w-[60%]" />
		</div>
	{/snippet}
</Story>

<Story name="Price Range">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label>Price Range</Label>
			<Slider type="multiple" value={[100, 500]} max={1000} step={10} class="w-[60%]" />
			<div class="flex justify-between text-sm text-muted-foreground">
				<span>$100</span>
				<span>$500</span>
			</div>
		</div>
	{/snippet}
</Story>

<Story name="Temperature">
	{#snippet template()}
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label>Temperature: 22°C</Label>
			<Slider type="single" value={22} min={10} max={35} step={1} class="w-[60%]" />
			<div class="flex justify-between text-sm text-muted-foreground">
				<span>10°C</span>
				<span>35°C</span>
			</div>
		</div>
	{/snippet}
</Story>

<Story name="Vertical Range">
	{#snippet template()}
		<div class="flex h-64 items-center space-x-4">
			<Label>Volume</Label>
			<Slider type="multiple" value={[25, 75]} max={100} step={1} orientation="vertical" />
		</div>
	{/snippet}
</Story>
