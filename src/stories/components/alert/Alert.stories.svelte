<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert/index.js';
	import Terminal from 'lucide-svelte/icons/terminal';
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	import CircleCheck from 'lucide-svelte/icons/circle-check';
	import Info from 'lucide-svelte/icons/info';

	const { Story } = defineMeta({
		title: 'Components/Alert',
		component: Alert,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'destructive'],
				description: 'The visual style variant of the alert'
			}
		}
	});
</script>

<Story name="Default">
	<div class="w-full max-w-md">
		<Alert>
			<Terminal class="h-4 w-4" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>You can add components to your app using the cli.</AlertDescription>
		</Alert>
	</div>
</Story>

<Story name="Destructive">
	<div class="w-full max-w-md">
		<Alert variant="destructive">
			<CircleAlert class="h-4 w-4" />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>Your session has expired. Please log in again.</AlertDescription>
		</Alert>
	</div>
</Story>

<Story name="Success">
	<div class="w-full max-w-md">
		<Alert class="border-green-200 bg-green-50 text-green-800">
			<CircleCheck class="h-4 w-4" />
			<AlertTitle>Success</AlertTitle>
			<AlertDescription>Your changes have been saved successfully.</AlertDescription>
		</Alert>
	</div>
</Story>

<Story name="Info">
	<div class="w-full max-w-md">
		<Alert class="border-blue-200 bg-blue-50 text-blue-800">
			<Info class="h-4 w-4" />
			<AlertTitle>Information</AlertTitle>
			<AlertDescription>This feature will be available in the next update.</AlertDescription>
		</Alert>
	</div>
</Story>

<Story name="Without Icon">
	<div class="w-full max-w-md">
		<Alert>
			<AlertTitle>Simple Alert</AlertTitle>
			<AlertDescription>This is a basic alert without an icon.</AlertDescription>
		</Alert>
	</div>
</Story>
