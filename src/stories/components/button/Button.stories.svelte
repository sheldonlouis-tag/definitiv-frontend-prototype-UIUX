<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button } from '$lib/components/ui/button/index.js';
	import PlusIcon from '@lucide/svelte/icons/plus';

	/**
	 * Button component stories showcasing all variants, sizes, and states.
	 * The Button component is built on top of the HTML button element with additional styling variants.
	 */
	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		args: {
			children: 'Button'
		},
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
			},
			size: {
				control: { type: 'select' },
				options: ['default', 'sm', 'lg', 'icon']
			},
			disabled: {
				control: { type: 'boolean' }
			},
			href: {
				control: { type: 'text' }
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Button {...args}>{args.children}</Button>
{/snippet}

<Story name="Default" />

<Story name="Secondary" args={{ variant: 'secondary' }} />

<Story name="Destructive" args={{ variant: 'destructive' }} />

<Story name="Outline" args={{ variant: 'outline' }} />

<Story name="Ghost" args={{ variant: 'ghost' }} />

<Story name="Link" args={{ variant: 'link' }} />

<Story name="Small" args={{ size: 'sm', children: 'Small' }} />

<Story name="Large" args={{ size: 'lg', children: 'Large' }} />

<Story name="Icon" args={{ variant: 'outline', size: 'icon' }}>
	{#snippet template(args: Record<string, unknown>)}
		<Button {...args}>
			<PlusIcon class="h-4 w-4" />
		</Button>
	{/snippet}
</Story>

<Story name="With Icon">
	{#snippet template(args: Record<string, unknown>)}
		<Button {...args}>
			<PlusIcon class="mr-2 h-4 w-4" />
			Add Item
		</Button>
	{/snippet}
</Story>

<Story name="Disabled" args={{ disabled: true }} />

<Story name="As Link" args={{ href: '#', children: 'Link Button' }} />

<Story name="All Variants">
	{#snippet template()}
		<div class="flex flex-wrap gap-4">
			<Button>Default</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="link">Link</Button>
		</div>
	{/snippet}
</Story>

<Story name="All Sizes">
	{#snippet template()}
		<div class="flex items-center gap-4">
			<Button size="sm">Small</Button>
			<Button>Default</Button>
			<Button size="lg">Large</Button>
			<Button size="icon" variant="outline">
				<PlusIcon class="h-4 w-4" />
			</Button>
		</div>
	{/snippet}
</Story>
