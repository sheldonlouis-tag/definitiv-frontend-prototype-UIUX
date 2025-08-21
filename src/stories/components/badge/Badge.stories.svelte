<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import CheckIcon from '@lucide/svelte/icons/check';
	import XIcon from '@lucide/svelte/icons/x';

	/**
	 * Badge component stories showcasing all variants and usage patterns.
	 * Badges are used to display small pieces of information like status, categories, or counts.
	 */
	const { Story } = defineMeta({
		title: 'Components/Badge',
		component: Badge,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		args: {
			children: 'Badge'
		},
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'secondary', 'destructive', 'outline']
			},
			href: {
				control: { type: 'text' }
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Badge {...args}>{args.children}</Badge>
{/snippet}

<Story name="Default" />

<Story name="Secondary" args={{ variant: 'secondary', children: 'Secondary' }} />

<Story name="Destructive" args={{ variant: 'destructive', children: 'Destructive' }} />

<Story name="Outline" args={{ variant: 'outline', children: 'Outline' }} />

<Story name="With Icon">
	{#snippet template(args: Record<string, unknown>)}
		<Badge {...args}>
			<CheckIcon class="mr-1 h-3 w-3" />
			Verified
		</Badge>
	{/snippet}
</Story>

<Story name="As Link" args={{ href: '#', children: 'Link Badge' }} />

<Story name="All Variants">
	{#snippet template()}
		<div class="flex flex-wrap gap-2">
			<Badge>Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
	{/snippet}
</Story>

<Story name="With Icons">
	{#snippet template()}
		<div class="flex flex-wrap gap-2">
			<Badge>
				<CheckIcon class="mr-1 h-3 w-3" />
				Success
			</Badge>
			<Badge variant="destructive">
				<XIcon class="mr-1 h-3 w-3" />
				Error
			</Badge>
			<Badge variant="outline">
				<CheckIcon class="mr-1 h-3 w-3" />
				Verified
			</Badge>
		</div>
	{/snippet}
</Story>
