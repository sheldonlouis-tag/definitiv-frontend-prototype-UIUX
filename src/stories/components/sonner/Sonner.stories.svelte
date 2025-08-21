<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const { Story } = defineMeta({
		title: 'Components/Sonner',
		component: Toaster,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<div class="space-x-2">
		<Button>Show Toast</Button>
		<Toaster />
	</div>
</Story>

<Story name="Success">
	<div class="space-x-2">
		<Button>Success Toast</Button>
		<Toaster />
	</div>
</Story>

<Story name="Error">
	<div class="space-x-2">
		<Button variant="destructive">Error Toast</Button>
		<Toaster />
	</div>
</Story>

<Story name="Warning">
	<div class="space-x-2">
		<Button variant="outline">Warning Toast</Button>
		<Toaster />
	</div>
</Story>

<Story name="Info">
	<div class="space-x-2">
		<Button variant="secondary">Info Toast</Button>
		<Toaster />
	</div>
</Story>

<Story name="With Action">
	<div class="space-x-2">
		<Button>Toast with Action</Button>
		<Toaster />
	</div>
</Story>

<Story name="Loading">
	<div class="space-x-2">
		<Button>Loading Toast</Button>
		<Toaster />
	</div>
</Story>

<Story name="Promise">
	<div class="space-x-2">
		<Button>Promise Toast</Button>
		<Toaster />
	</div>
</Story>

<Story name="Custom Duration">
	<div class="space-x-2">
		<Button>Long Duration</Button>
		<Button>Short Duration</Button>
		<Toaster />
	</div>
</Story>

<Story name="Rich Content">
	<div class="space-x-2">
		<Button>Rich Toast</Button>
		<Toaster />
	</div>
</Story>
