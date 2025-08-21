<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Carousel,
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious
	} from '$lib/components/ui/carousel/index.js';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';

	const { Story } = defineMeta({
		title: 'Components/Carousel',
		component: Carousel,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<div class="w-full max-w-xs">
		<Carousel>
			<CarouselContent>
				{#each Array.from({ length: 5 }, (_, i) => i) as i (i)}
					<CarouselItem>
						<div class="p-1">
							<Card>
								<CardContent class="flex aspect-square items-center justify-center p-6">
									<span class="text-4xl font-semibold">{i + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				{/each}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</div>
</Story>

<Story name="Multiple Items">
	<div class="w-full max-w-sm">
		<Carousel opts={{ align: 'start' }} class="w-full max-w-sm">
			<CarouselContent>
				{#each Array.from({ length: 5 }, (_, i) => i) as i (i)}
					<CarouselItem class="md:basis-1/2 lg:basis-1/3">
						<div class="p-1">
							<Card>
								<CardContent class="flex aspect-square items-center justify-center p-6">
									<span class="text-2xl font-semibold">{i + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				{/each}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</div>
</Story>

<Story name="Vertical">
	<div class="w-full max-w-xs">
		<Carousel orientation="vertical" opts={{ align: 'start' }} class="w-full max-w-xs">
			<CarouselContent class="-mt-1 h-[200px]">
				{#each Array.from({ length: 5 }, (_, i) => i) as i (i)}
					<CarouselItem class="pt-1 md:basis-1/2">
						<div class="p-1">
							<Card>
								<CardContent class="flex items-center justify-center p-6">
									<span class="text-3xl font-semibold">{i + 1}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				{/each}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</div>
</Story>

<Story name="With Content">
	<div class="w-full max-w-lg">
		<Carousel>
			<CarouselContent>
				<CarouselItem>
					<Card>
						<CardContent class="p-6">
							<h3 class="mb-2 text-lg font-semibold">Welcome</h3>
							<p class="text-muted-foreground">
								This is the first slide of our carousel component.
							</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem>
					<Card>
						<CardContent class="p-6">
							<h3 class="mb-2 text-lg font-semibold">Features</h3>
							<p class="text-muted-foreground">Explore the amazing features of our product.</p>
						</CardContent>
					</Card>
				</CarouselItem>
				<CarouselItem>
					<Card>
						<CardContent class="p-6">
							<h3 class="mb-2 text-lg font-semibold">Get Started</h3>
							<p class="text-muted-foreground">Ready to begin? Let's get you set up.</p>
						</CardContent>
					</Card>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	</div>
</Story>
