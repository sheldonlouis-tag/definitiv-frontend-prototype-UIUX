<script lang="ts">
	import { page } from '$app/stores';
	import { sidebarConfig } from '$lib/config/sidebar-configs.js';
	import { 
		Breadcrumb, 
		BreadcrumbList, 
		BreadcrumbItem, 
		BreadcrumbLink, 
		BreadcrumbPage, 
		BreadcrumbSeparator 
	} from '$lib/components/ui/breadcrumb/index.js';

	interface Props {
		title?: string;
		subtitle?: string;
		breadcrumbs?: Array<{ label: string; href?: string }>;
		showBreadcrumbs?: boolean;
	}

	let { 
		title, 
		subtitle, 
		breadcrumbs = [], 
		showBreadcrumbs = true 
	}: Props = $props();

	// Generate breadcrumbs from current route if not provided
	const currentBreadcrumbs = $derived(breadcrumbs.length > 0 
		? breadcrumbs 
		: generateBreadcrumbsFromRoute($page.url.pathname));

	/**
	 * Generate breadcrumbs based on the current route and sidebar config
	 */
	function generateBreadcrumbsFromRoute(pathname: string): Array<{ label: string; href?: string }> {
		const pathSegments = pathname.split('/').filter(Boolean);
		const breadcrumbs: Array<{ label: string; href?: string }> = [];
		
		// Start with the app root
		if (pathSegments[0] === 'app') {
			breadcrumbs.push({ label: 'App', href: '/app' });
		}

		// Find matching sidebar items for breadcrumbs
		for (const item of sidebarConfig.content.items) {
			if (item.href && pathname.startsWith(item.href)) {
				breadcrumbs.push({ label: item.label, href: item.href });
				
				// Check sub-items
				if (item.subItems) {
					for (const subItem of item.subItems) {
						if (subItem.href && pathname.startsWith(subItem.href)) {
							breadcrumbs.push({ label: subItem.label, href: subItem.href });
							break;
						}
					}
				}
				break;
			}
		}

		// If no sidebar match found, generate from path segments
		if (breadcrumbs.length <= 1) {
			for (let i = 1; i < pathSegments.length; i++) {
				const segment = pathSegments[i];
				const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
				const href = '/' + pathSegments.slice(0, i + 1).join('/');
				breadcrumbs.push({ label, href });
			}
		}

		return breadcrumbs;
	}


</script>
<div class="flex flex-col gap-1">
	<!-- Title Section -->
	<div class="flex items-center gap-2 text-[28px] tracking-[-0.24px] leading-[36px]">
		{#if title}
			<span class="font-extralight text-[#43484e]">
				{title}:
			</span>
		{/if}
		{#if subtitle}
			<span class="font-extrabold text-[#12171b]">
				{subtitle}
			</span>
		{:else if title}
			<span class="font-extrabold text-[#12171b]">
				{title}
			</span>
		{/if}
	</div>

	<!-- Breadcrumbs Section -->
	{#if showBreadcrumbs && currentBreadcrumbs.length > 0}
		<Breadcrumb class="text-[12px] text-[#1e2227] tracking-[0.24px]">
			<BreadcrumbList>
				{#each currentBreadcrumbs as breadcrumb, index}
					<BreadcrumbItem>
						{#if breadcrumb.href && index < currentBreadcrumbs.length - 1}
							<BreadcrumbLink href={breadcrumb.href}>
								{breadcrumb.label}
							</BreadcrumbLink>
						{:else}
							<BreadcrumbPage>
								{breadcrumb.label}
							</BreadcrumbPage>
						{/if}
					</BreadcrumbItem>
					
					{#if index < currentBreadcrumbs.length - 1}
						<BreadcrumbSeparator />
					{/if}
				{/each}
			</BreadcrumbList>
		</Breadcrumb>
	{/if}
</div>
