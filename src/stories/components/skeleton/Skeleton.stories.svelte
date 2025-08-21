<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	const { Story } = defineMeta({
		title: 'Components/Skeleton',
		component: Skeleton,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<div class="flex items-center space-x-4">
		<Skeleton class="h-12 w-12 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[250px]" />
			<Skeleton class="h-4 w-[200px]" />
		</div>
	</div>
</Story>

<Story name="Card">
	<div class="flex flex-col space-y-3">
		<Skeleton class="h-[125px] w-[250px] rounded-xl" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[250px]" />
			<Skeleton class="h-4 w-[200px]" />
		</div>
	</div>
</Story>

<Story name="List">
	<div class="w-80 space-y-4">
		{#each Array.from({ length: 5 }, (_, i) => i) as i (i)}
			<div class="flex items-center space-x-4">
				<Skeleton class="h-10 w-10 rounded-full" />
				<div class="flex-1 space-y-2">
					<Skeleton class="h-4 w-full" />
					<Skeleton class="h-4 w-3/4" />
				</div>
			</div>
		{/each}
	</div>
</Story>

<Story name="Table">
	<div class="w-full max-w-md">
		<div class="space-y-2">
			<Skeleton class="h-8 w-full" />
			{#each Array.from({ length: 5 }, (_, i) => i) as i (i)}
				<div class="flex space-x-2">
					<Skeleton class="h-6 w-1/4" />
					<Skeleton class="h-6 w-1/3" />
					<Skeleton class="h-6 w-1/4" />
					<Skeleton class="h-6 w-1/6" />
				</div>
			{/each}
		</div>
	</div>
</Story>

<Story name="Different Sizes">
	<div class="space-y-4">
		<div class="space-y-2">
			<div class="text-sm font-medium">Small</div>
			<Skeleton class="h-3 w-32" />
		</div>

		<div class="space-y-2">
			<div class="text-sm font-medium">Medium</div>
			<Skeleton class="h-4 w-48" />
		</div>

		<div class="space-y-2">
			<div class="text-sm font-medium">Large</div>
			<Skeleton class="h-6 w-64" />
		</div>

		<div class="space-y-2">
			<div class="text-sm font-medium">Extra Large</div>
			<Skeleton class="h-8 w-80" />
		</div>
	</div>
</Story>

<Story name="Shapes">
	<div class="flex space-x-4">
		<div class="space-y-2 text-center">
			<Skeleton class="mx-auto h-16 w-16 rounded-full" />
			<div class="text-xs">Circle</div>
		</div>

		<div class="space-y-2 text-center">
			<Skeleton class="mx-auto h-16 w-16 rounded-md" />
			<div class="text-xs">Square</div>
		</div>

		<div class="space-y-2 text-center">
			<Skeleton class="mx-auto h-16 w-24 rounded-lg" />
			<div class="text-xs">Rectangle</div>
		</div>

		<div class="space-y-2 text-center">
			<Skeleton class="mx-auto h-16 w-16 rounded-none" />
			<div class="text-xs">Sharp</div>
		</div>
	</div>
</Story>
