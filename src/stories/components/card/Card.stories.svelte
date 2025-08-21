<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter,
		CardAction
	} from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	/**
	 * Card component stories showcasing different layouts and compositions.
	 * Cards are flexible containers for grouping related content and actions.
	 */
	const { Story } = defineMeta({
		title: 'Components/Card',
		component: Card,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Card {...args} class="w-[350px]">
		<CardContent>
			<p>Card content goes here.</p>
		</CardContent>
	</Card>
{/snippet}

<Story name="Default" />

<Story name="With Header">
	{#snippet template()}
		<Card class="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card content goes here.</p>
			</CardContent>
		</Card>
	{/snippet}
</Story>

<Story name="With Footer">
	{#snippet template()}
		<Card class="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card content goes here.</p>
			</CardContent>
			<CardFooter class="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Save</Button>
			</CardFooter>
		</Card>
	{/snippet}
</Story>

<Story name="With Actions">
	{#snippet template()}
		<Card class="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card description goes here</CardDescription>
				<CardAction>
					<Button variant="ghost" size="sm">⋯</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p>Card content goes here.</p>
			</CardContent>
		</Card>
	{/snippet}
</Story>

<Story name="Complete">
	{#snippet template()}
		<Card class="w-[350px]">
			<CardHeader>
				<CardTitle>Complete Card</CardTitle>
				<CardDescription>This card demonstrates all components</CardDescription>
				<CardAction>
					<Button variant="ghost" size="sm">⋯</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p>This is the main content area of the card. It can contain any content you need.</p>
			</CardContent>
			<CardFooter class="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Confirm</Button>
			</CardFooter>
		</Card>
	{/snippet}
</Story>
