<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Breadcrumb,
		BreadcrumbEllipsis,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb/index.js';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import House from 'lucide-svelte/icons/house';

	const { Story } = defineMeta({
		title: 'Components/Breadcrumb',
		component: Breadcrumb,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/components">Components</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</Story>

<Story name="With Icons">
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/" class="flex items-center gap-2">
					<House class="h-4 w-4" />
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/products">Products</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/products/laptops">Laptops</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>MacBook Pro</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</Story>

<Story name="With Ellipsis">
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbEllipsis />
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/components">Components</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</Story>

<Story name="Custom Separator">
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator>
				<ChevronRight class="h-4 w-4" />
			</BreadcrumbSeparator>
			<BreadcrumbItem>
				<BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator>
				<ChevronRight class="h-4 w-4" />
			</BreadcrumbSeparator>
			<BreadcrumbItem>
				<BreadcrumbPage>Getting Started</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
</Story>
