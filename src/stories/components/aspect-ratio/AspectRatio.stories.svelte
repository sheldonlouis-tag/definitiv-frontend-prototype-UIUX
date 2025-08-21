<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';

	const { Story } = defineMeta({
		title: 'Components/AspectRatio',
		component: AspectRatio,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			ratio: {
				control: { type: 'number' },
				description: 'The desired aspect ratio'
			}
		}
	});
</script>

<Story name="Default (16:9)">
	<div class="w-80">
		<AspectRatio ratio={16 / 9}>
			<img
				src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
				alt="Photo by Drew Beamer"
				class="h-full w-full rounded-md object-cover"
			/>
		</AspectRatio>
	</div>
</Story>

<Story name="Square (1:1)">
	<div class="w-80">
		<AspectRatio ratio={1}>
			<img
				src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&dpr=2&q=80"
				alt="Photo by Radu Florin"
				class="h-full w-full rounded-md object-cover"
			/>
		</AspectRatio>
	</div>
</Story>

<Story name="Portrait (3:4)">
	<div class="w-60">
		<AspectRatio ratio={3 / 4}>
			<img
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&dpr=2&q=80"
				alt="Photo by Tom Crew"
				class="h-full w-full rounded-md object-cover"
			/>
		</AspectRatio>
	</div>
</Story>

<Story name="With Content">
	<div class="w-80">
		<AspectRatio ratio={16 / 9} class="bg-muted">
			<div class="flex h-full items-center justify-center p-6">
				<div class="text-center">
					<h3 class="text-lg font-semibold">Video Placeholder</h3>
					<p class="mt-2 text-sm text-muted-foreground">
						16:9 aspect ratio container for video content
					</p>
				</div>
			</div>
		</AspectRatio>
	</div>
</Story>
