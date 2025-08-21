<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Drawer,
		DrawerContent,
		DrawerDescription,
		DrawerFooter,
		DrawerHeader,
		DrawerTitle,
		DrawerTrigger,
		DrawerClose
	} from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	/**
	 * Drawer component stories showcasing different layouts and usage patterns.
	 * Drawers are modal dialogs that slide in from the bottom of the screen.
	 */
	const { Story } = defineMeta({
		title: 'Components/Drawer',
		component: Drawer,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Drawer {...args}>
		<DrawerTrigger>
			<Button variant="outline">Open Drawer</Button>
		</DrawerTrigger>
		<DrawerContent>
			<div class="mx-auto w-full max-w-sm">
				<DrawerHeader>
					<DrawerTitle>Drawer Title</DrawerTitle>
					<DrawerDescription>This is a drawer description.</DrawerDescription>
				</DrawerHeader>
				<div class="p-4 pb-0">
					<p>This is the drawer content.</p>
				</div>
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</div>
		</DrawerContent>
	</Drawer>
{/snippet}

<Story name="Default" />

<Story name="With Form">
	{#snippet template()}
		<Drawer>
			<DrawerTrigger>
				<Button variant="outline">Edit Profile</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div class="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Edit Profile</DrawerTitle>
						<DrawerDescription>
							Make changes to your profile here. Click save when you're done.
						</DrawerDescription>
					</DrawerHeader>
					<div class="p-4 pb-0">
						<div class="grid gap-4">
							<div class="grid gap-2">
								<Label for="name">Name</Label>
								<Input id="name" placeholder="Enter your name" />
							</div>
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input id="email" type="email" placeholder="Enter your email" />
							</div>
						</div>
					</div>
					<DrawerFooter>
						<Button>Save changes</Button>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	{/snippet}
</Story>

<Story name="Without Header">
	{#snippet template()}
		<Drawer>
			<DrawerTrigger>
				<Button variant="outline">Open Simple Drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div class="mx-auto w-full max-w-sm p-4">
					<p class="mb-4 text-center text-sm text-muted-foreground">
						This is a simple drawer without a header.
					</p>
					<div class="flex gap-2">
						<Button class="flex-1">Action</Button>
						<DrawerClose>
							<Button variant="outline" class="flex-1">Close</Button>
						</DrawerClose>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	{/snippet}
</Story>

<Story name="Responsive">
	{#snippet template()}
		<Drawer>
			<DrawerTrigger>
				<Button variant="outline">Open Responsive Drawer</Button>
			</DrawerTrigger>
			<DrawerContent class="max-h-[96%]">
				<div class="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Responsive Drawer</DrawerTitle>
						<DrawerDescription>This drawer adapts to different screen sizes.</DrawerDescription>
					</DrawerHeader>
					<div class="overflow-y-auto p-4 pb-0">
						<div class="space-y-4">
							{#each Array.from({ length: 10 }, (_, i) => i) as i (i)}
								<div class="rounded border p-3">
									<h4 class="font-medium">Item {i + 1}</h4>
									<p class="text-sm text-muted-foreground">
										This is item number {i + 1} in the scrollable content.
									</p>
								</div>
							{/each}
						</div>
					</div>
					<DrawerFooter>
						<Button>Save</Button>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	{/snippet}
</Story>
