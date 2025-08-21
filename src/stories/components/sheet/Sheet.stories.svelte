<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Sheet,
		SheetContent,
		SheetDescription,
		SheetFooter,
		SheetHeader,
		SheetTitle,
		SheetTrigger
	} from '$lib/components/ui/sheet/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const { Story } = defineMeta({
		title: 'Components/Sheet',
		component: Sheet,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default (Right)">
	<Sheet>
		<SheetTrigger>
			<Button>Open Sheet</Button>
		</SheetTrigger>
		<SheetContent>
			<SheetHeader>
				<SheetTitle>Edit profile</SheetTitle>
				<SheetDescription>
					Make changes to your profile here. Click save when you're done.
				</SheetDescription>
			</SheetHeader>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Name</Label>
					<Input id="name" value="Pedro Duarte" class="col-span-3" />
				</div>
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="username" class="text-right">Username</Label>
					<Input id="username" value="@peduarte" class="col-span-3" />
				</div>
			</div>
			<SheetFooter>
				<Button type="submit">Save changes</Button>
			</SheetFooter>
		</SheetContent>
	</Sheet>
</Story>

<Story name="Left Side">
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open Left Sheet</Button>
		</SheetTrigger>
		<SheetContent side="left">
			<SheetHeader>
				<SheetTitle>Navigation</SheetTitle>
				<SheetDescription>Navigate through the application sections.</SheetDescription>
			</SheetHeader>
			<div class="space-y-4 py-4">
				<div class="space-y-2">
					<Button variant="ghost" class="w-full justify-start">Dashboard</Button>
					<Button variant="ghost" class="w-full justify-start">Projects</Button>
					<Button variant="ghost" class="w-full justify-start">Settings</Button>
					<Button variant="ghost" class="w-full justify-start">Help</Button>
				</div>
			</div>
		</SheetContent>
	</Sheet>
</Story>

<Story name="Top">
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open Top Sheet</Button>
		</SheetTrigger>
		<SheetContent side="top">
			<SheetHeader>
				<SheetTitle>Notifications</SheetTitle>
				<SheetDescription>Recent notifications and updates.</SheetDescription>
			</SheetHeader>
			<div class="py-4">
				<div class="space-y-3">
					<div class="flex items-center space-x-3 rounded-lg bg-muted p-3">
						<div class="h-2 w-2 rounded-full bg-blue-500"></div>
						<div>
							<div class="text-sm font-medium">New message received</div>
							<div class="text-xs text-muted-foreground">2 minutes ago</div>
						</div>
					</div>
					<div class="flex items-center space-x-3 rounded-lg bg-muted p-3">
						<div class="h-2 w-2 rounded-full bg-green-500"></div>
						<div>
							<div class="text-sm font-medium">Task completed</div>
							<div class="text-xs text-muted-foreground">5 minutes ago</div>
						</div>
					</div>
				</div>
			</div>
		</SheetContent>
	</Sheet>
</Story>

<Story name="Bottom">
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open Bottom Sheet</Button>
		</SheetTrigger>
		<SheetContent side="bottom">
			<SheetHeader>
				<SheetTitle>Quick Actions</SheetTitle>
				<SheetDescription>Perform common actions quickly.</SheetDescription>
			</SheetHeader>
			<div class="py-4">
				<div class="grid grid-cols-2 gap-4">
					<Button>Create New</Button>
					<Button variant="outline">Import</Button>
					<Button variant="outline">Export</Button>
					<Button variant="outline">Settings</Button>
				</div>
			</div>
		</SheetContent>
	</Sheet>
</Story>
