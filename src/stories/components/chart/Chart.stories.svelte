<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { ChartContainer } from '$lib/components/ui/chart/index.js';

	const { Story } = defineMeta({
		title: 'Components/Chart',
		component: ChartContainer,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	const chartConfig = {
		desktop: {
			label: 'Desktop',
			color: 'hsl(var(--chart-1))'
		},
		mobile: {
			label: 'Mobile',
			color: 'hsl(var(--chart-2))'
		}
	};
</script>

<Story name="Default">
	<div class="h-64 w-full max-w-md">
		<ChartContainer config={chartConfig} class="h-full w-full">
			<div class="flex h-full items-center justify-center">
				<div class="text-center">
					<h3 class="text-lg font-semibold">Chart Container</h3>
					<p class="mt-2 text-sm text-muted-foreground">Chart components would be rendered here</p>
				</div>
			</div>
		</ChartContainer>
	</div>
</Story>

<Story name="With Legend">
	<div class="w-full max-w-md">
		<ChartContainer config={chartConfig}>
			<div class="space-y-4">
				<div class="flex justify-center space-x-4">
					<div class="flex items-center space-x-2">
						<div class="h-3 w-3 rounded-full bg-[hsl(var(--chart-1))]"></div>
						<span class="text-sm">Desktop</span>
					</div>
					<div class="flex items-center space-x-2">
						<div class="h-3 w-3 rounded-full bg-[hsl(var(--chart-2))]"></div>
						<span class="text-sm">Mobile</span>
					</div>
				</div>
				<div class="flex h-48 items-center justify-center rounded border">
					<p class="text-muted-foreground">Chart visualization area</p>
				</div>
			</div>
		</ChartContainer>
	</div>
</Story>

<Story name="Multiple Charts">
	<div class="w-full max-w-lg space-y-4">
		<ChartContainer config={chartConfig} class="h-32">
			<div class="flex h-full items-center justify-center rounded border">
				<p class="text-sm text-muted-foreground">Chart 1</p>
			</div>
		</ChartContainer>
		<ChartContainer config={chartConfig} class="h-32">
			<div class="flex h-full items-center justify-center rounded border">
				<p class="text-sm text-muted-foreground">Chart 2</p>
			</div>
		</ChartContainer>
	</div>
</Story>
