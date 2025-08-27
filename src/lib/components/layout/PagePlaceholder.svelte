<script lang="ts">
	import { PageHeader } from '$lib/components/layout/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb/index.js';
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		subtitle?: string;
		breadcrumbs?: Array<{ label: string; href?: string }>;
		children?: Snippet;
	}

	let {
		title = "Page Title",
		subtitle = "Page subtitle",
		breadcrumbs = [
			{ label: 'Building Your Application', href: '#' },
			{ label: 'Data Fetching' }
		],
		children
	}: Props = $props();
</script>

<div class="page-container">
	<div class="page-content">
		<!-- Header Section -->
		<div class="page-header">
			<div class="flex items-center gap-2 mb-4">
				<Separator
					orientation="vertical"
					class="mr-2 h-4"
				/>
				<Breadcrumb>
					<BreadcrumbList>
						{#each breadcrumbs as crumb, index}
							{#if index > 0}
								<BreadcrumbSeparator class="hidden md:block" />
							{/if}
							<BreadcrumbItem class={index === 0 ? "hidden md:block" : ""}>
								{#if crumb.href && index < breadcrumbs.length - 1}
									<BreadcrumbLink href={crumb.href}>
										{crumb.label}
									</BreadcrumbLink>
								{:else}
									<BreadcrumbPage>{crumb.label}</BreadcrumbPage>
								{/if}
							</BreadcrumbItem>
						{/each}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
			<PageHeader {title} {subtitle} />
		</div>

		<!-- Main Content -->
		<div class="flex flex-1 flex-col gap-4">
			<!-- Grid of placeholder cards -->
			<div class="grid auto-rows-min gap-4 md:grid-cols-3">
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
				<div class="bg-muted/50 aspect-video rounded-xl"></div>
			</div>
			
			<!-- Large placeholder content area -->
			<div class="bg-muted/50 min-h-[60vh] flex-1 rounded-xl flex items-center justify-center">
				{#if children}
					{@render children()}
				{:else}
					<div class="text-center text-muted-foreground">
						<p class="text-lg font-medium mb-2">Content Coming Soon</p>
						<p class="text-sm">This page is under development</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
