<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Popover, PopoverContent, PopoverTrigger } from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const { Story } = defineMeta({
		title: 'Components/Popover',
		component: Popover,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Popover>
		<PopoverTrigger>
			<Button>Open popover</Button>
		</PopoverTrigger>
		<PopoverContent class="w-80">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="leading-none font-medium">Dimensions</h4>
					<p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
				</div>
				<div class="grid gap-2">
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="width">Width</Label>
						<Input id="width" value="100%" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="maxWidth">Max. width</Label>
						<Input id="maxWidth" value="300px" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="height">Height</Label>
						<Input id="height" value="25px" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="maxHeight">Max. height</Label>
						<Input id="maxHeight" value="none" class="col-span-2 h-8" />
					</div>
				</div>
			</div>
		</PopoverContent>
	</Popover>
</Story>

<Story name="Simple">
	<Popover>
		<PopoverTrigger>
			<Button variant="outline">Info</Button>
		</PopoverTrigger>
		<PopoverContent class="w-64">
			<div class="space-y-2">
				<h4 class="font-medium">Quick Info</h4>
				<p class="text-sm text-muted-foreground">This is a simple popover with some information.</p>
			</div>
		</PopoverContent>
	</Popover>
</Story>

<Story name="Form Popover">
	<Popover>
		<PopoverTrigger>
			<Button>Add Item</Button>
		</PopoverTrigger>
		<PopoverContent class="w-80">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="leading-none font-medium">Add New Item</h4>
					<p class="text-sm text-muted-foreground">Fill in the details below.</p>
				</div>
				<div class="grid gap-2">
					<div class="grid gap-1">
						<Label for="name">Name</Label>
						<Input id="name" placeholder="Item name" />
					</div>
					<div class="grid gap-1">
						<Label for="description">Description</Label>
						<Input id="description" placeholder="Item description" />
					</div>
					<div class="grid gap-1">
						<Label for="price">Price</Label>
						<Input id="price" type="number" placeholder="0.00" />
					</div>
				</div>
				<div class="flex justify-end space-x-2">
					<Button variant="outline" size="sm">Cancel</Button>
					<Button size="sm">Save</Button>
				</div>
			</div>
		</PopoverContent>
	</Popover>
</Story>

<Story name="Different Positions">
	<div class="flex space-x-4">
		<Popover>
			<PopoverTrigger>
				<Button variant="outline">Top</Button>
			</PopoverTrigger>
			<PopoverContent side="top" class="w-48">
				<p class="text-sm">This popover appears on top.</p>
			</PopoverContent>
		</Popover>

		<Popover>
			<PopoverTrigger>
				<Button variant="outline">Right</Button>
			</PopoverTrigger>
			<PopoverContent side="right" class="w-48">
				<p class="text-sm">This popover appears on the right.</p>
			</PopoverContent>
		</Popover>

		<Popover>
			<PopoverTrigger>
				<Button variant="outline">Bottom</Button>
			</PopoverTrigger>
			<PopoverContent side="bottom" class="w-48">
				<p class="text-sm">This popover appears on the bottom.</p>
			</PopoverContent>
		</Popover>

		<Popover>
			<PopoverTrigger>
				<Button variant="outline">Left</Button>
			</PopoverTrigger>
			<PopoverContent side="left" class="w-48">
				<p class="text-sm">This popover appears on the left.</p>
			</PopoverContent>
		</Popover>
	</div>
</Story>
