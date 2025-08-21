<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { AlertDialog } from '$lib/components/ui/alert-dialog/index.js';
	import {
		AlertDialogAction,
		AlertDialogCancel,
		AlertDialogContent,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogTitle,
		AlertDialogTrigger
	} from '$lib/components/ui/alert-dialog/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const { Story } = defineMeta({
		title: 'Components/AlertDialog',
		component: AlertDialog,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<AlertDialog>
		<AlertDialogTrigger>
			<Button variant="outline">Delete Account</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
				<AlertDialogDescription>
					This action cannot be undone. This will permanently delete your account and remove your
					data from our servers.
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Cancel</AlertDialogCancel>
				<AlertDialogAction>Continue</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
</Story>

<Story name="Destructive Action">
	<AlertDialog>
		<AlertDialogTrigger>
			<Button variant="destructive">Delete Project</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Delete Project</AlertDialogTitle>
				<AlertDialogDescription>
					Are you sure you want to delete this project? This action cannot be undone and will
					permanently remove all associated data.
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Cancel</AlertDialogCancel>
				<AlertDialogAction class="bg-red-600 hover:bg-red-700">Delete Project</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
</Story>

<Story name="Confirmation">
	<AlertDialog>
		<AlertDialogTrigger>
			<Button>Save Changes</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Save Changes</AlertDialogTitle>
				<AlertDialogDescription>
					You have unsaved changes. Would you like to save them before continuing?
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Don't Save</AlertDialogCancel>
				<AlertDialogAction>Save Changes</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
</Story>
