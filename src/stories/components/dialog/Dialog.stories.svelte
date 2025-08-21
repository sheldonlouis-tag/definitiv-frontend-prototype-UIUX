<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const { Story } = defineMeta({
		title: 'Components/Dialog',
		component: Dialog,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Dialog>
		<DialogTrigger>
			<Button>Edit Profile</Button>
		</DialogTrigger>
		<DialogContent class="sm:max-w-[425px]">
			<DialogHeader>
				<DialogTitle>Edit profile</DialogTitle>
				<DialogDescription>
					Make changes to your profile here. Click save when you're done.
				</DialogDescription>
			</DialogHeader>
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
			<DialogFooter>
				<Button type="submit">Save changes</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
</Story>

<Story name="Custom Trigger">
	<Dialog>
		<DialogTrigger>
			<Button variant="outline">Share</Button>
		</DialogTrigger>
		<DialogContent class="sm:max-w-md">
			<DialogHeader>
				<DialogTitle>Share link</DialogTitle>
				<DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
			</DialogHeader>
			<div class="flex items-center space-x-2">
				<div class="grid flex-1 gap-2">
					<Label for="link" class="sr-only">Link</Label>
					<Input id="link" value="https://ui.shadcn.com/docs/installation" readonly />
				</div>
				<Button type="submit" size="sm" class="px-3">
					<span class="sr-only">Copy</span>
					Copy
				</Button>
			</div>
			<DialogFooter class="sm:justify-start">
				<Button type="button" variant="secondary">Close</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
</Story>

<Story name="Form Dialog">
	<Dialog>
		<DialogTrigger>
			<Button>Add User</Button>
		</DialogTrigger>
		<DialogContent class="sm:max-w-[425px]">
			<DialogHeader>
				<DialogTitle>Add New User</DialogTitle>
				<DialogDescription>Enter the user details below to create a new account.</DialogDescription>
			</DialogHeader>
			<div class="grid gap-4 py-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="user@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" />
				</div>
				<div class="grid gap-2">
					<Label for="role">Role</Label>
					<select
						id="role"
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
					>
						<option>User</option>
						<option>Admin</option>
						<option>Moderator</option>
					</select>
				</div>
			</div>
			<DialogFooter>
				<Button type="button" variant="outline">Cancel</Button>
				<Button type="submit">Create User</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
</Story>
