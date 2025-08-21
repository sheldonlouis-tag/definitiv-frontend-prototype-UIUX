<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		PaginationContent,
		PaginationEllipsis,
		PaginationItem,
		PaginationNextButton,
		PaginationPrevButton
	} from '$lib/components/ui/pagination/index.js';

	const { Story } = defineMeta({
		title: 'Components/Pagination',
		component: PaginationContent,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<PaginationContent>
		<PaginationItem>
			<PaginationPrevButton />
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground shadow ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				1
			</button>
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				2
			</button>
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				3
			</button>
		</PaginationItem>
		<PaginationItem>
			<PaginationEllipsis />
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				10
			</button>
		</PaginationItem>
		<PaginationItem>
			<PaginationNextButton />
		</PaginationItem>
	</PaginationContent>
</Story>

<Story name="Simple">
	<PaginationContent>
		<PaginationItem>
			<PaginationPrevButton />
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				1
			</button>
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground shadow ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				2
			</button>
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				3
			</button>
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				4
			</button>
		</PaginationItem>
		<PaginationItem>
			<button
				class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
			>
				5
			</button>
		</PaginationItem>
		<PaginationItem>
			<PaginationNextButton />
		</PaginationItem>
	</PaginationContent>
</Story>

<Story name="With Info">
	<div class="space-y-4">
		<div class="text-center text-sm text-muted-foreground">Showing 1 to 10 of 97 results</div>
		<PaginationContent>
			<PaginationItem>
				<PaginationPrevButton />
			</PaginationItem>
			<PaginationItem>
				<button
					class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-primary-foreground shadow ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					1
				</button>
			</PaginationItem>
			<PaginationItem>
				<button
					class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					2
				</button>
			</PaginationItem>
			<PaginationItem>
				<button
					class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					3
				</button>
			</PaginationItem>
			<PaginationItem>
				<PaginationEllipsis />
			</PaginationItem>
			<PaginationItem>
				<button
					class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					10
				</button>
			</PaginationItem>
			<PaginationItem>
				<PaginationNextButton />
			</PaginationItem>
		</PaginationContent>
	</div>
</Story>
