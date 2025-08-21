<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Separator } from '$lib/components/ui/separator/index.js';

	/**
	 * Separator component stories showcasing different orientations and usage patterns.
	 * Separators are visual dividers that help organize content and create visual hierarchy.
	 */
	const { Story } = defineMeta({
		title: 'Components/Separator',
		component: Separator,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			orientation: {
				control: { type: 'select' },
				options: ['horizontal', 'vertical']
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<div class="space-y-1">
		<h4 class="text-sm leading-none font-medium">Radix Primitives</h4>
		<p class="text-sm text-muted-foreground">An open-source UI component library.</p>
	</div>
	<Separator class="my-4" {...args} />
	<div class="flex h-5 items-center space-x-4 text-sm">
		<div>Blog</div>
		<Separator orientation="vertical" />
		<div>Docs</div>
		<Separator orientation="vertical" />
		<div>Source</div>
	</div>
{/snippet}

<Story name="Default" />

<Story name="Horizontal">
	{#snippet template()}
		<div class="w-full max-w-xs space-y-4">
			<div>
				<h3 class="font-medium">Section 1</h3>
				<p class="text-sm text-muted-foreground">Content for the first section.</p>
			</div>
			<Separator />
			<div>
				<h3 class="font-medium">Section 2</h3>
				<p class="text-sm text-muted-foreground">Content for the second section.</p>
			</div>
			<Separator />
			<div>
				<h3 class="font-medium">Section 3</h3>
				<p class="text-sm text-muted-foreground">Content for the third section.</p>
			</div>
		</div>
	{/snippet}
</Story>

<Story name="Vertical">
	{#snippet template()}
		<div class="flex h-20 items-center space-x-4 text-sm">
			<div class="flex flex-col items-center">
				<div class="font-medium">Home</div>
				<div class="text-muted-foreground">Main page</div>
			</div>
			<Separator orientation="vertical" />
			<div class="flex flex-col items-center">
				<div class="font-medium">About</div>
				<div class="text-muted-foreground">Learn more</div>
			</div>
			<Separator orientation="vertical" />
			<div class="flex flex-col items-center">
				<div class="font-medium">Contact</div>
				<div class="text-muted-foreground">Get in touch</div>
			</div>
		</div>
	{/snippet}
</Story>

<Story name="In Navigation">
	{#snippet template()}
		<nav class="flex items-center space-x-4 text-sm font-medium">
			<a href="#" class="transition-colors hover:text-foreground/80">Home</a>
			<Separator orientation="vertical" class="h-4" />
			<a href="#" class="transition-colors hover:text-foreground/80">Products</a>
			<Separator orientation="vertical" class="h-4" />
			<a href="#" class="transition-colors hover:text-foreground/80">About</a>
			<Separator orientation="vertical" class="h-4" />
			<a href="#" class="transition-colors hover:text-foreground/80">Contact</a>
		</nav>
	{/snippet}
</Story>

<Story name="In Card">
	{#snippet template()}
		<div class="rounded-lg border p-6 shadow-sm">
			<div class="space-y-1">
				<h3 class="text-lg font-semibold">Account Settings</h3>
				<p class="text-sm text-muted-foreground">Manage your account preferences</p>
			</div>
			<Separator class="my-4" />
			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<span class="text-sm font-medium">Email notifications</span>
					<span class="text-sm text-muted-foreground">Enabled</span>
				</div>
				<Separator />
				<div class="flex items-center justify-between">
					<span class="text-sm font-medium">Two-factor authentication</span>
					<span class="text-sm text-muted-foreground">Disabled</span>
				</div>
				<Separator />
				<div class="flex items-center justify-between">
					<span class="text-sm font-medium">Data export</span>
					<span class="text-sm text-muted-foreground">Available</span>
				</div>
			</div>
		</div>
	{/snippet}
</Story>
