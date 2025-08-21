<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { SidebarConfig } from './sidebar-types.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Input } from '$lib/components/ui/input/index.js';
	import { settingsContextMenu, employeeLevel3Menu, costCentersLevel3Menu, financialLevel3Menu, leaveLevel3Menu } from '$lib/config/sidebar-configs.js';
	import { cn } from '$lib/utils.js';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
import SearchIcon from '@lucide/svelte/icons/search';
import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
import { useSidebar } from '$lib/components/ui/sidebar/context.svelte.js';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		config: SidebarConfig;
		open?: boolean;
		variant?: 'sidebar' | 'floating' | 'inset';
		side?: 'left' | 'right';
		collapsible?: 'offcanvas' | 'icon' | 'none';
		children?: Snippet;
		class?: string;
		pageTitle?: string;
	}

	let {
		config,
		open = true,
		variant = 'floating',
		side = 'left',
		collapsible = 'icon',
		children,
		class: className,
		pageTitle,
		...restProps
	}: Props = $props();

	// Function to check if a menu item is active based on current route
	function isMenuItemActive(item: any): boolean {
		if (!item.href) return false;
		
		const currentPath = $page.url.pathname;
		const itemPath = item.href;
		
		// Exact match
		if (currentPath === itemPath) return true;
		
		// Check if current path starts with item path (for nested routes)
		// This handles cases like /my-team/123 when item.href is /my-team
		if (itemPath !== '/' && currentPath.startsWith(itemPath)) {
			// Make sure it's not a partial match (e.g., /my-team shouldn't match /my-team-settings)
			const nextChar = currentPath.charAt(itemPath.length);
			return nextChar === '' || nextChar === '/';
		}
		
		return false;
	}

	// State for tracking expanded menu items
	let expandedItems = $state(new Set<string>());

	// State for search functionality
	let showSearchBar = $state(false);
	let searchQuery = $state('');

	// State for settings context menu
	let showSettingsMenu = $state(false);

	// State for level 3 navigation
	let level3Navigation = $state<{show: boolean, title: string, breadcrumb: string, items: any[]} | null>(null);

	// Function to toggle search bar
	function toggleSearchBar() {
		showSearchBar = !showSearchBar;
		if (!showSearchBar) {
			searchQuery = ''; // Clear search when hiding
		}
	}

	// Function to check if a menu item should be expanded by default
	function shouldExpandByDefault(item: any): boolean {
		if (!item.subItems) return false;
		
		// Expand if this item is active
		if (isMenuItemActive(item)) return true;
		
		// Expand if any sub-item is active based on URL
		return item.subItems.some((subItem: any) => isSubMenuItemActive(subItem));
	}

	// Initialize expanded items based on current route
	$effect(() => {
		const newExpandedItems = new Set<string>();
		
		config.content?.items.forEach((item: any) => {
			if (shouldExpandByDefault(item)) {
				newExpandedItems.add(item.label);
			}
		});
		
		expandedItems = newExpandedItems;
	});

	// Function to toggle menu item expansion
	function toggleExpansion(itemLabel: string) {
		if (expandedItems.has(itemLabel)) {
			expandedItems.delete(itemLabel);
		} else {
			expandedItems.add(itemLabel);
		}
		expandedItems = new Set(expandedItems); // Trigger reactivity
	}

	// Function to check if we're currently in a Level 3 view
	function isInLevel3View(): boolean {
		const currentPath = $page.url.pathname;
		// Check if current path matches any Level 3 routes
		return currentPath.includes('/employee/employee/') || 
		       currentPath.includes('/employee/cost-centers/') || 
		       currentPath.includes('/employee/financial/') || 
		       currentPath.includes('/employee/leave/');
	}

	// Function to get the Level 3 context from current URL
	function getLevel3Context(): {parentLabel: string, itemLabel: string} | null {
		const currentPath = $page.url.pathname;
		
		if (currentPath.includes('/employee/employee/')) {
			return { parentLabel: 'Employee Hub', itemLabel: 'Employee' };
		} else if (currentPath.includes('/employee/cost-centers/')) {
			return { parentLabel: 'Employee Hub', itemLabel: 'Cost Centers' };
		} else if (currentPath.includes('/employee/financial/')) {
			return { parentLabel: 'Employee Hub', itemLabel: 'Financial' };
		} else if (currentPath.includes('/employee/leave/')) {
			return { parentLabel: 'Employee Hub', itemLabel: 'Leave' };
		}
		
		return null;
	}

	// Function to check if a sub-menu item is active
	function isSubMenuItemActive(subItem: any): boolean {
		if (!subItem.href) return false;
		
		const currentPath = $page.url.pathname;
		return currentPath === subItem.href;
	}

	// Initialize Level 3 view if we're on a Level 3 page
	$effect(() => {
		const level3Context = getLevel3Context();
		if (level3Context && !level3Navigation?.show) {
			showLevel3(level3Context.parentLabel, level3Context.itemLabel);
		} else if (!level3Context && level3Navigation?.show) {
			// We navigated away from Level 3, hide it
			hideLevel3();
		}
	});

	// Function to handle menu item clicks
	async function handleMenuClick(item: any) {
		if (item.hasContextMenu) {
			// Toggle context menu for items like Settings
			showSettingsMenu = !showSettingsMenu;
		} else if (item.subItems && item.subItems.length > 0) {
			// If item has sub-items, toggle expansion instead of navigating
			toggleExpansion(item.label);
		} else if (item.href) {
			await goto(item.href);
		} else if (item.onclick) {
			item.onclick();
		}
	}

	// Function to handle context menu item clicks
	async function handleContextMenuClick(contextItem: any) {
		showSettingsMenu = false; // Close context menu
		if (contextItem.href) {
			await goto(contextItem.href);
		} else if (contextItem.onclick) {
			contextItem.onclick();
		}
	}

	// Function to show Level 3 navigation
	function showLevel3(parentLabel: string, itemLabel: string) {
		// Determine which Level 3 menu to show based on the item
		let level3Items;
		switch (itemLabel) {
			case 'Employee':
				level3Items = employeeLevel3Menu;
				break;
			case 'Cost Centers':
				level3Items = costCentersLevel3Menu;
				break;
			case 'Financial':
				level3Items = financialLevel3Menu;
				break;
			case 'Leave':
				level3Items = leaveLevel3Menu;
				break;
			default:
				level3Items = employeeLevel3Menu; // Fallback
		}

		level3Navigation = {
			show: true,
			title: itemLabel,
			breadcrumb: `${parentLabel} / ${itemLabel}`,
			items: level3Items
		};
	}

	// Function to hide Level 3 navigation (go back)
	function hideLevel3() {
		level3Navigation = null;
	}

	// Function to handle Level 3 menu clicks
	async function handleLevel3Click(item: any) {
		if (item.href) {
			await goto(item.href);
		} else if (item.onclick) {
			item.onclick();
		}
	}

	// Close context menu when clicking outside
	function handleClickOutside(event: MouseEvent) {
		if (showSettingsMenu) {
			const target = event.target as Element;
			if (!target.closest('.settings-menu-container')) {
				showSettingsMenu = false;
			}
		}
	}

	// Function to handle sub-menu item clicks  
	async function handleSubMenuClick(subItem: any, parentItem: any) {
		if (subItem.hasLevel3) {
			// Show Level 3 navigation instead of navigating
			showLevel3(parentItem.label, subItem.label);
		} else if (subItem.href) {
			await goto(subItem.href);
		} else if (subItem.onclick) {
			subItem.onclick();
		}
	}

	// Function to render a menu section
	function renderMenuSection(section: any) {
		return section?.items || [];
	}

	// Function to get the active menu item label for page title
	function getActiveMenuItemLabel(): string | undefined {
		// Check content section first
		for (const item of config.content?.items || []) {
			if (isMenuItemActive(item)) {
				return item.label;
			}
			// Check sub-items
			for (const subItem of item.subItems || []) {
				if (isSubMenuItemActive(subItem)) {
					return `${item.label} - ${subItem.label}`;
				}
			}
		}
		
		// Check header section
		for (const item of config.header?.items || []) {
			if (isMenuItemActive(item)) {
				return item.label;
			}
			// Check sub-items
			for (const subItem of item.subItems || []) {
				if (isSubMenuItemActive(subItem)) {
					return `${item.label} - ${subItem.label}`;
				}
			}
		}
		
		// Check footer section
		for (const item of config.footer?.items || []) {
			if (isMenuItemActive(item)) {
				return item.label;
			}
		}
		
		return undefined;
	}

	// Get the page title - use provided title or fall back to active menu item
	const effectivePageTitle = $derived(pageTitle || getActiveMenuItemLabel());
</script>

<svelte:head>
	{#if effectivePageTitle}
		<title>{effectivePageTitle} - Definitiv</title>
	{/if}
</svelte:head>

<svelte:window onclick={handleClickOutside} />

<div class={cn('flex p-2 gap-2', className)} {...restProps}>
	{#if level3Navigation?.show}
		<!-- Level 3 Navigation Sidebar -->
		<Sidebar.Provider bind:open>
			<Sidebar.Root {variant} {side} {collapsible}>
				<!-- Level 3 Header -->
				<Sidebar.Header>
					<!-- Level 3 Header with Back Button -->
					<div class="group-data-[collapsible=icon]:hidden">
						<div class="flex items-center justify-between px-3 py-2 border-b border-sidebar-border">
							<div class="flex items-center gap-3">
								<button 
									type="button" 
									class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary"
									onclick={hideLevel3}
								>
									<ArrowLeftIcon class="h-4 w-4" />
								</button>
								<span class="font-medium text-sidebar-foreground">{level3Navigation.title}</span>
							</div>
							<button 
								type="button" 
								class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary"
								onclick={toggleSearchBar}
							>
								<SearchIcon class="h-4 w-4" />
							</button>
						</div>
						
						<!-- Level 3 Breadcrumb -->
						<div class="px-3 py-2 border-b border-sidebar-border">
							<span class="text-xs text-muted-foreground">{level3Navigation.breadcrumb}</span>
						</div>

						<!-- Level 3 Search Bar -->
						{#if showSearchBar}
							<div class="px-3 py-2 border-b border-sidebar-border">
								<Input 
									bind:value={searchQuery}
									placeholder="Search menu items..."
									class="h-8 text-sm"
								/>
							</div>
						{/if}
					</div>

					<!-- Collapsed State Layout -->
					<div class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:border-b group-data-[collapsible=icon]:border-sidebar-border hidden">
						<button 
							type="button" 
							class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary"
							onclick={hideLevel3}
						>
							<ArrowLeftIcon class="h-6 w-6" />
						</button>
						<button 
							type="button" 
							class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary"
							onclick={toggleSearchBar}
						>
							<SearchIcon class="h-4 w-4" />
						</button>
						
						<!-- Collapsed Search Bar -->
						{#if showSearchBar}
							<div class="w-full">
								<Input 
									bind:value={searchQuery}
									placeholder="Search..."
									class="h-8 text-xs w-full"
								/>
							</div>
						{/if}
					</div>
				</Sidebar.Header>

				<!-- Level 3 Content -->
				<Sidebar.Content class="p-3">
					<Sidebar.Menu>
						{#each level3Navigation.items as item}
						<Sidebar.MenuItem>
						<Sidebar.MenuButton
						tooltipContent={item.label}
						isActive={$page.url.pathname === item.href}
						 class={$page.url.pathname === item.href ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''}
						onclick={() => handleLevel3Click(item)}
						>
						{#if item.icon}
						 {@const IconComponent = item.icon}
						 <IconComponent />
						 {/if}
						  <span>{item.label}</span>
						  </Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
					</Sidebar.Menu>
				</Sidebar.Content>
			</Sidebar.Root>

			<!-- Main Content Area -->
			<div class="flex gap-4 bg-card border rounded-xl w-full p-4">
				{@render children?.()}
			</div>
		</Sidebar.Provider>
	{:else}
		<!-- Main Navigation Sidebar -->
		<Sidebar.Provider bind:open>
		<Sidebar.Root {variant} {side} {collapsible}>
	<!-- Header Section -->
			<Sidebar.Header>
				<!-- Menu Header with Search -->
				<!-- Expanded State Layout -->
				<div class="group-data-[collapsible=icon]:hidden">
					<div class="flex items-center justify-between px-3 py-2 border-b border-sidebar-border">
						<div class="flex items-center gap-3">
							<Sidebar.Trigger class="h-4 w-4 text-primary" />
							<span class="font-medium text-sidebar-foreground">Menu</span>
						</div>
						<button 
						type="button" 
						class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary"
						onclick={toggleSearchBar}
						>
							<SearchIcon class="h-4 w-4" />
						</button>
					</div>
					
					<!-- Collapsible Search Bar -->
					{#if showSearchBar}
						<div class="px-3 py-2 border-b border-sidebar-border">
							<Input 
								bind:value={searchQuery}
								placeholder="Search menu items..."
								class="h-8 text-sm"
							/>
						</div>
					{/if}
				</div>

				<!-- Collapsed State Layout -->
				<div class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:border-b group-data-[collapsible=icon]:border-sidebar-border hidden">
					<Sidebar.Trigger class="h-6 w-6 text-primary" />
					<button 
						type="button" 
						class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary"
						onclick={toggleSearchBar}
					>
						<SearchIcon class="h-4 w-4" />
					</button>
					
					<!-- Collapsed Search Bar -->
					{#if showSearchBar}
						<div class="w-full">
							<Input 
								bind:value={searchQuery}
								placeholder="Search..."
								class="h-8 text-xs w-full"
							/>
						</div>
					{/if}
				</div>

			{#if config.header && config.header.items.length > 0}
			 <Sidebar.Menu>
			 {#each renderMenuSection(config.header) as item}
			 <Sidebar.MenuItem>
			  <Sidebar.MenuButton
			  tooltipContent={item.tooltipContent}
			  isActive={isMenuItemActive(item)}
			  onclick={() => handleMenuClick(item)}
			  class={cn(
			  // Selected background: only if item itself is active
			  isMenuItemActive(item) ? 'bg-selected text-white hover:bg-selected hover:text-white' : '',
			  // Collapsed state: show selected background for parent with active child
			  'group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:text-sidebar-foreground',
			  item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem)) ? 'group-data-[collapsible=icon]:bg-selected group-data-[collapsible=icon]:text-white group-data-[collapsible=icon]:hover:bg-selected' : '',
			  // Bold parent: only when expanded AND has active child AND menu is actually expanded
			  item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem)) && expandedItems.has(item.label) ? 'font-semibold' : '',
			  // Override: never bold in collapsed sidebar state
			  'group-data-[collapsible=icon]:font-normal'
			  )}
			  >
			  {#if item.icon}
			   {@const IconComponent = item.icon}
			   <IconComponent />
			  {/if}
			  <span>{item.label}</span>
			  {#if item.hasNotification && item.notificationCount && item.subItems && item.subItems.length > 0}
			  <!-- Notification badge + Chevron for expandable items -->
			  <span class="ml-auto flex items-center gap-2">
			   <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
			     {item.notificationCount}
			   </span>
			  <ChevronDownIcon 
			    class="h-4 w-4 transition-transform duration-200 {expandedItems.has(item.label) ? 'rotate-180' : 'rotate-0'}"
			    />
						</span>
					{:else if item.hasNotification && item.notificationCount}
						<!-- Just notification badge for non-expandable items -->
						<span class="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
							{item.notificationCount}
						</span>
					{:else if item.subItems && item.subItems.length > 0}
						<!-- Just chevron for expandable items -->
						<ChevronDownIcon 
							class="ml-auto h-4 w-4 transition-transform duration-200 {expandedItems.has(item.label) ? 'rotate-180' : 'rotate-0'}"
						/>
					{/if}
			</Sidebar.MenuButton>

			{#if item.subItems && item.subItems.length > 0 && expandedItems.has(item.label)}
			<Sidebar.MenuSub>
			 {#each item.subItems as subItem}
			   <Sidebar.MenuSubItem>
			     {#if subItem.href}
			       <Sidebar.MenuSubButton 
			       href={subItem.hasLevel3 ? undefined : subItem.href}
			       isActive={isSubMenuItemActive(subItem)}
			       class={cn(
			        isSubMenuItemActive(subItem) ? 'bg-selected text-white hover:bg-selected hover:text-white' : '',
			         subItem.hasLevel3 ? 'flex justify-between items-center' : ''
			       )}
			        onclick={subItem.hasLevel3 ? () => handleSubMenuClick(subItem, item) : undefined}
										>
											<span>{subItem.label}</span>
											{#if subItem.hasLevel3}
												<ChevronRightIcon class="h-4 w-4 ml-auto text-muted-foreground" />
											{/if}
										</Sidebar.MenuSubButton>
			        {:else}
			      <button 
			      type="button"
			      class="text-sidebar-foreground ring-sidebar-ring hover:bg-hover hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground outline-hidden flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 whitespace-nowrap [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
			      onclick={() => handleSubMenuClick(subItem, item)}
			      disabled={subItem.disabled}
			      >
			      {subItem.label}
			      </button>
			        {/if}
			       </Sidebar.MenuSubItem>
			      {/each}
			     </Sidebar.MenuSub>
			    {/if}
			   </Sidebar.MenuItem>
			   {/each}
					</Sidebar.Menu>
				{/if}
			</Sidebar.Header>

			<!-- Main Content Section -->
			<Sidebar.Content class="p-3">
				<Sidebar.Menu>
					{#each renderMenuSection(config.content) as item}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
							tooltipContent={item.tooltipContent}
							isActive={isMenuItemActive(item)}
							onclick={() => handleMenuClick(item)}
							class={cn(
							// Selected background: only if item itself is active
							isMenuItemActive(item) ? 'bg-selected text-white hover:bg-selected hover:text-white' : '',
							// Collapsed state: show selected background for parent with active child
							'group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:text-sidebar-foreground',
							item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem)) ? 'group-data-[collapsible=icon]:bg-selected group-data-[collapsible=icon]:text-white group-data-[collapsible=icon]:hover:bg-selected' : '',
							// Bold parent: only when expanded AND has active child AND menu is actually expanded
							item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem)) && expandedItems.has(item.label) ? 'font-semibold' : '',
							 // Override: never bold in collapsed sidebar state
							  'group-data-[collapsible=icon]:font-normal'
							)}
							>
							{#if item.icon}
							 {@const IconComponent = item.icon}
							 <IconComponent />
							{/if}
							<span>{item.label}</span>
							{#if item.hasNotification && item.notificationCount && item.subItems && item.subItems.length > 0}
							<!-- Notification badge + Chevron for expandable items -->
							<span class="ml-auto flex items-center gap-2">
							 <span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
							   {item.notificationCount}
							 </span>
							<ChevronDownIcon 
							  class="h-4 w-4 transition-transform duration-200 {expandedItems.has(item.label) ? 'rotate-180' : 'rotate-0'}"
							  />
					</span>
				{:else if item.hasNotification && item.notificationCount}
					<!-- Just notification badge for non-expandable items -->
					<span class="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
						{item.notificationCount}
					</span>
				{:else if item.subItems && item.subItems.length > 0}
					<!-- Just chevron for expandable items -->
					<ChevronDownIcon 
						class="ml-auto h-4 w-4 transition-transform duration-200 {expandedItems.has(item.label) ? 'rotate-180' : 'rotate-0'}"
					/>
				{/if}
			</Sidebar.MenuButton>

							{#if item.subItems && item.subItems.length > 0 && expandedItems.has(item.label)}
								<Sidebar.MenuSub>
									{#each item.subItems as subItem}
										<Sidebar.MenuSubItem>
										{#if subItem.href}
										<Sidebar.MenuSubButton 
										href={subItem.hasLevel3 ? undefined : subItem.href}
										isActive={isSubMenuItemActive(subItem)}
										class={cn(
										 isSubMenuItemActive(subItem) ? 'bg-selected text-white hover:bg-selected hover:text-white' : '',
										  subItem.hasLevel3 ? 'flex justify-between items-center' : ''
										)}
										 onclick={subItem.hasLevel3 ? () => handleSubMenuClick(subItem, item) : undefined}
							>
								<span>{subItem.label}</span>
								{#if subItem.hasLevel3}
									<ChevronRightIcon class="h-4 w-4 ml-auto text-muted-foreground" />
								{/if}
							</Sidebar.MenuSubButton>
										{:else}
										<button 
										type="button"
										class="text-sidebar-foreground ring-sidebar-ring hover:bg-hover hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground outline-hidden flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 whitespace-nowrap [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
										onclick={() => handleSubMenuClick(subItem, item)}
										disabled={subItem.disabled}
										>
										{subItem.label}
										</button>
										 {/if}
									</Sidebar.MenuSubItem>
									{/each}
								</Sidebar.MenuSub>
							{/if}
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.Content>

			<!-- Footer Section -->
			{#if config.footer && config.footer.items.length > 0}
				<Sidebar.Footer class="relative">
					<!-- Divider line above Settings -->
					<div class="border-t border-sidebar-border"></div>
					
					<Sidebar.Menu>
						{#each renderMenuSection(config.footer) as item}
							<Sidebar.MenuItem>
								{#if item.hasContextMenu}
									<!-- Settings with Context Menu -->
									<div class="relative settings-menu-container">
									<Sidebar.MenuButton
									tooltipContent={item.tooltipContent}
									onclick={() => handleMenuClick(item)}
									class="w-full"
									>
									{#if item.icon}
									{@const IconComponent = item.icon}
									<IconComponent />
									{/if}
									<span>{item.label}</span>
									</Sidebar.MenuButton>
									
									<!-- Context Menu Dropdown -->
									{#if showSettingsMenu}
									<div class="absolute bottom-full right-0 mb-2 w-64 bg-card border border-border rounded-lg shadow-lg p-2 z-50">
									<div class="space-y-1">
									{#each settingsContextMenu as contextItem}
									<button
									type="button"
									class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-hover hover:text-accent-foreground focus:bg-hover focus:text-accent-foreground text-left"
									onclick={() => handleContextMenuClick(contextItem)}
									>
									{#if contextItem.icon}
									{@const IconComponent = contextItem.icon}
									<IconComponent class="h-4 w-4 text-muted-foreground" />
									{/if}
									<span>{contextItem.label}</span>
									</button>
									{/each}
									</div>
									</div>
									{/if}
									</div>
								{:else}
									<!-- Regular Menu Button -->
									<Sidebar.MenuButton
										tooltipContent={item.tooltipContent}
										isActive={isMenuItemActive(item)}
										onclick={() => handleMenuClick(item)}
									>
										{#if item.icon}
											{@const IconComponent = item.icon}
											<IconComponent />
										{/if}
										<span>{item.label}</span>
									</Sidebar.MenuButton>
								{/if}
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.Footer>
			{/if}
		</Sidebar.Root>

		<!-- Main Content Area -->
		<div class="flex gap-4 bg-card border rounded-xl w-full p-4">
			{@render children?.()}
		</div>
	</Sidebar.Provider>
	{/if}
</div>
