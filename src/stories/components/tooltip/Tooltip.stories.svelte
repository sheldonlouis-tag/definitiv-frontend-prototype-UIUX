<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import InfoIcon from '@lucide/svelte/icons/info';

	/**
	 * Tooltip component stories showcasing different usage patterns and configurations.
	 * Tooltips provide contextual information when users hover over or focus on elements.
	 */
	const { Story } = defineMeta({
		title: 'Components/Tooltip',
		component: Tooltip,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Tooltip {...args}>
		<TooltipTrigger>
			<Button variant="outline">Hover me</Button>
		</TooltipTrigger>
		<TooltipContent>
			<p>This is a tooltip</p>
		</TooltipContent>
	</Tooltip>
{/snippet}

<Story name="Default" />

<Story name="With Icon">
	{#snippet template()}
		<Tooltip>
			<TooltipTrigger>
				<Button variant="outline" size="icon">
					<InfoIcon class="h-4 w-4" />
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>More information</p>
			</TooltipContent>
		</Tooltip>
	{/snippet}
</Story>

<Story name="Long Content">
	{#snippet template()}
		<Tooltip>
			<TooltipTrigger>
				<Button variant="outline">Long tooltip</Button>
			</TooltipTrigger>
			<TooltipContent class="max-w-xs">
				<p>
					This is a longer tooltip with more detailed information that spans multiple lines to
					demonstrate how tooltips handle longer content.
				</p>
			</TooltipContent>
		</Tooltip>
	{/snippet}
</Story>

<Story name="On Text">
	{#snippet template()}
		<p class="text-sm">
			This is some text with a
			<Tooltip>
				<TooltipTrigger>
					<span class="cursor-help underline">tooltip trigger</span>
				</TooltipTrigger>
				<TooltipContent>
					<p>Additional context</p>
				</TooltipContent>
			</Tooltip>
			in the middle.
		</p>
	{/snippet}
</Story>

<Story name="Multiple Tooltips">
	{#snippet template()}
		<div class="flex gap-2">
			<Tooltip>
				<TooltipTrigger>
					<Button variant="outline" size="icon">
						<PlusIcon class="h-4 w-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add item</p>
				</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger>
					<Button variant="outline" size="icon">
						<InfoIcon class="h-4 w-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Show information</p>
				</TooltipContent>
			</Tooltip>
		</div>
	{/snippet}
</Story>

<Story name="Delayed Tooltip">
	{#snippet template()}
		<Tooltip delayDuration={1000}>
			<TooltipTrigger>
				<Button variant="outline">Delayed tooltip</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>This tooltip appears after 1 second</p>
			</TooltipContent>
		</Tooltip>
	{/snippet}
</Story>
