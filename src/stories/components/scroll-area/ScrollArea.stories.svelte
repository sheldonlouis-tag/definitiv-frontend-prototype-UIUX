<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	const { Story } = defineMeta({
		title: 'Components/ScrollArea',
		component: ScrollArea,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
</script>

<Story name="Default">
	<ScrollArea class="h-72 w-48 rounded-md border">
		<div class="p-4">
			<h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
			{#each tags as tag (tag)}
				<div class="text-sm">
					{tag}
				</div>
				<Separator class="my-2" />
			{/each}
		</div>
	</ScrollArea>
</Story>

<Story name="Horizontal">
	<ScrollArea class="w-96 rounded-md border whitespace-nowrap">
		<div class="flex w-max space-x-4 p-4">
			{#each Array.from({ length: 20 }, (_, i) => i) as i (i)}
				<figure class="shrink-0">
					<div class="overflow-hidden rounded-md">
						<img
							src={`https://picsum.photos/300/400?random=${i}`}
							alt={`Photo ${i + 1}`}
							class="aspect-[3/4] h-fit w-fit object-cover"
							width="300"
							height="400"
						/>
					</div>
					<figcaption class="pt-2 text-xs text-muted-foreground">
						Photo by
						<span class="font-semibold text-foreground">
							Artist {i + 1}
						</span>
					</figcaption>
				</figure>
			{/each}
		</div>
	</ScrollArea>
</Story>

<Story name="Both Directions">
	<ScrollArea class="h-72 w-80 rounded-md border">
		<div class="p-4">
			<h4 class="mb-4 text-sm leading-none font-medium">Large Content</h4>
			<div class="w-[600px]">
				{#each Array.from({ length: 30 }, (_, i) => i) as i (i)}
					<div class="mb-2 text-sm">
						This is a very long line of text that extends beyond the container width and should
						trigger horizontal scrolling. Line {i + 1}
					</div>
				{/each}
			</div>
		</div>
	</ScrollArea>
</Story>

<Story name="Custom Content">
	<ScrollArea class="h-80 w-64 rounded-md border">
		<div class="space-y-4 p-4">
			<div>
				<h4 class="mb-2 text-sm font-medium">Recent Activity</h4>
				{#each Array.from({ length: 15 }, (_, i) => i) as i (i)}
					<div class="flex items-center space-x-2 py-2">
						<div class="h-2 w-2 rounded-full bg-blue-500"></div>
						<div class="text-sm">
							<div class="font-medium">Action {i + 1}</div>
							<div class="text-xs text-muted-foreground">
								{new Date(Date.now() - i * 60000).toLocaleTimeString()}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</ScrollArea>
</Story>
