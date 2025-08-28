<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { SidebarConfig } from './sidebar-types.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { Input } from '$lib/components/ui/input/index.js';
	import { OrganizationSwitcher, type Organization } from '$lib/components/ui/organization-switcher/index.js';
	import { settingsContextMenu, employeeLevel3Menu, costCentersLevel3Menu, financialLevel3Menu, leaveLevel3Menu, reportingLevel3Menu, adminCostCentersLevel3Menu, adminPayrollLevel3Menu, adminOrganisationLevel3Menu, adminEmploymentLevel3Menu, adminPoliciesLevel3Menu } from '$lib/config/sidebar-configs.js';
	import { cn } from '$lib/utils.js';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import UserIcon from '@lucide/svelte/icons/user';
	import BuildingIcon from '@lucide/svelte/icons/building';
	import BriefcaseIcon from '@lucide/svelte/icons/briefcase';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import DollarSignIcon from '@lucide/svelte/icons/dollar-sign';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
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
		if (itemPath !== '/' && currentPath.startsWith(itemPath)) {
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

	// Store-based Level 3 navigation state
	const level3Store = writable({
		active: false,
		title: '',
		breadcrumb: '',
		items: [],
		counter: 0
	});

	// Reactive variables from store
	let isLevel3Active = $derived($level3Store.active);
	let level3Title = $derived($level3Store.title);
	let level3Breadcrumb = $derived($level3Store.breadcrumb);
	let level3Items = $derived($level3Store.items);

	// Function to toggle search bar
	function toggleSearchBar() {
		showSearchBar = !showSearchBar;
		if (!showSearchBar) {
			searchQuery = '';
		}
	}

	// Function to check if a menu item should be expanded by default
	function shouldExpandByDefault(item: any): boolean {
		if (!item.subItems) return false;
		
		if (isMenuItemActive(item)) return true;
		
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
			// If clicking on already expanded item, collapse it
			expandedItems.delete(itemLabel);
		} else {
			// If opening a new item, collapse all others and open this one
			expandedItems.clear();
			expandedItems.add(itemLabel);
		}
		expandedItems = new Set(expandedItems);
	}

	// Function to get the Level 3 context from current URL
	function getLevel3Context(): {parentLabel: string, itemLabel: string} | null {
		const currentPath = $page.url.pathname;
		const cleanPath = currentPath.replace(/\/$/, '');
		
		if (cleanPath === '/employee/employee' || cleanPath.startsWith('/employee/employee/')) {
			return { parentLabel: 'Employee Hub', itemLabel: 'Employee' };
		} else if (cleanPath === '/employee/cost-centers' || cleanPath.startsWith('/employee/cost-centers/')) {
			return { parentLabel: 'Employee Hub', itemLabel: 'Cost Centers' };
		} else if (cleanPath === '/employee/financial' || cleanPath.startsWith('/employee/financial/')) {
			return { parentLabel: 'Employee Hub', itemLabel: 'Financial' };
		} else if (cleanPath === '/employee/leave' || cleanPath.startsWith('/employee/leave/')) {
			return { parentLabel: 'Employee Hub', itemLabel: 'Leave' };
		} else if (cleanPath === '/admin/cost-centers' || cleanPath.startsWith('/admin/cost-centers/')) {
			return { parentLabel: 'Admin', itemLabel: 'Cost Centers' };
		} else if (cleanPath === '/admin/organisation' || cleanPath.startsWith('/admin/organisation/')) {
			return { parentLabel: 'Admin', itemLabel: 'Organisation' };
		} else if (cleanPath === '/admin/employment' || cleanPath.startsWith('/admin/employment/')) {
			return { parentLabel: 'Admin', itemLabel: 'Employment' };
		} else if (cleanPath === '/admin/policies' || cleanPath.startsWith('/admin/policies/')) {
			return { parentLabel: 'Admin', itemLabel: 'Policies' };
		} else if (cleanPath === '/admin/payroll' || cleanPath.startsWith('/admin/payroll/')) {
			return { parentLabel: 'Admin', itemLabel: 'Payroll' };
		} else if (cleanPath === '/reporting/employee-reporting' || cleanPath.startsWith('/reporting/employee-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'Employee Reporting' };
		} else if (cleanPath === '/reporting/payroll-reporting' || cleanPath.startsWith('/reporting/payroll-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'Payroll Reporting' };
		} else if (cleanPath === '/reporting/leave-reporting' || cleanPath.startsWith('/reporting/leave-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'Leave Reporting' };
		} else if (cleanPath === '/reporting/accrual-reporting' || cleanPath.startsWith('/reporting/accrual-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'Accrual Reporting' };
		} else if (cleanPath === '/reporting/time-attendance-reporting' || cleanPath.startsWith('/reporting/time-attendance-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'Time Attendance Reporting' };
		} else if (cleanPath === '/reporting/timeclock-reporting' || cleanPath.startsWith('/reporting/timeclock-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'TimeClock Reporting' };
		} else if (cleanPath === '/reporting/rostering-reporting' || cleanPath.startsWith('/reporting/rostering-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'Rostering Reporting' };
		} else if (cleanPath === '/reporting/company-reporting' || cleanPath.startsWith('/reporting/company-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'Company Reporting' };
		} else if (cleanPath === '/reporting/pdf-reporting' || cleanPath.startsWith('/reporting/pdf-reporting/')) {
			return { parentLabel: 'Reporting', itemLabel: 'PDF Reporting' };
		}
		
		return null;
	}

	// Function to check if a sub-menu item is active
	function isSubMenuItemActive(subItem: any): boolean {
		if (!subItem.href) return false;
		
		const currentPath = $page.url.pathname;
		return currentPath === subItem.href || currentPath.startsWith(subItem.href + '/');
	}

	// Initialize Level 3 view based on URL
	$effect(() => {
		const level3Context = getLevel3Context();
		const currentState = $level3Store;
		
		if (level3Context && !currentState.active) {
			showLevel3(level3Context.parentLabel, level3Context.itemLabel);
		} else if (!level3Context && currentState.active) {
			level3Store.set({
				active: false,
				title: '',
				breadcrumb: '',
				items: [],
				counter: 0
			});
		}
	});

	// Function to handle menu item clicks
	async function handleMenuClick(item: any) {
		if (item.hasContextMenu) {
			showSettingsMenu = !showSettingsMenu;
		} else if (item.subItems && item.subItems.length > 0) {
			toggleExpansion(item.label);
			if (item.href) {
				await goto(item.href);
			}
		} else if (item.href) {
			await goto(item.href);
		} else if (item.onclick) {
			item.onclick();
		}
	}

	// Function to handle context menu item clicks
	async function handleContextMenuClick(contextItem: any) {
		showSettingsMenu = false;
		if (contextItem.href) {
			await goto(contextItem.href);
		} else if (contextItem.onclick) {
			contextItem.onclick();
		}
	}

	// Function to show Level 3 navigation
	function showLevel3(parentLabel: string, itemLabel: string) {
		let menuItems;
		let parentItem;
		
		switch (itemLabel) {
			case 'Employee':
				menuItems = employeeLevel3Menu;
				parentItem = { label: 'Employee', href: '/employee/employee', icon: UserIcon };
				break;
			case 'Cost Centers':
				// Check if this is Employee Hub Cost Centers or Admin Cost Centers based on parent
				if (parentLabel === 'Admin') {
					menuItems = adminCostCentersLevel3Menu;
					parentItem = { label: 'Cost Centers', href: '/admin/cost-centers', icon: BuildingIcon };
				} else {
					menuItems = costCentersLevel3Menu;
					parentItem = { label: 'Cost Centers', href: '/employee/cost-centers', icon: BuildingIcon };
				}
				break;
			case 'Organisation':
				menuItems = adminOrganisationLevel3Menu;
				parentItem = { label: 'Organisation', href: '/admin/organisation', icon: BuildingIcon };
				break;
			case 'Employment':
				menuItems = adminEmploymentLevel3Menu;
				parentItem = { label: 'Employment', href: '/admin/employment', icon: BriefcaseIcon };
				break;
			case 'Policies':
				menuItems = adminPoliciesLevel3Menu;
				parentItem = { label: 'Policies', href: '/admin/policies', icon: FileTextIcon };
				break;
		case 'Payroll':
				// Admin Payroll menu
				menuItems = adminPayrollLevel3Menu;
				parentItem = { label: 'Payroll', href: '/admin/payroll', icon: DollarSignIcon };
				break;
			case 'Financial':
				menuItems = financialLevel3Menu;
				parentItem = { label: 'Financial', href: '/employee/financial', icon: DollarSignIcon };
				break;
			case 'Leave':
				menuItems = leaveLevel3Menu;
				parentItem = { label: 'Leave', href: '/employee/leave', icon: CalendarIcon };
				break;
			case 'Employee Reporting':
				menuItems = reportingLevel3Menu.employeeReporting;
				parentItem = { label: 'Employee Reporting', href: '/reporting/employee-reporting', icon: TrendingUpIcon };
				break;
			case 'Payroll Reporting':
				menuItems = reportingLevel3Menu.payrollReporting;
				parentItem = { label: 'Payroll Reporting', href: '/reporting/payroll-reporting', icon: TrendingUpIcon };
				break;
			case 'Leave Reporting':
				menuItems = reportingLevel3Menu.leaveReporting;
				parentItem = { label: 'Leave Reporting', href: '/reporting/leave-reporting', icon: TrendingUpIcon };
				break;
			case 'Accrual Reporting':
				menuItems = reportingLevel3Menu.accrualReporting;
				parentItem = { label: 'Accrual Reporting', href: '/reporting/accrual-reporting', icon: TrendingUpIcon };
				break;
			case 'Time Attendance Reporting':
				menuItems = reportingLevel3Menu.timeAttendanceReporting;
				parentItem = { label: 'Time Attendance Reporting', href: '/reporting/time-attendance-reporting', icon: TrendingUpIcon };
				break;
			case 'TimeClock Reporting':
				menuItems = reportingLevel3Menu.timeClockReporting;
				parentItem = { label: 'TimeClock Reporting', href: '/reporting/timeclock-reporting', icon: TrendingUpIcon };
				break;
			case 'Rostering Reporting':
				menuItems = reportingLevel3Menu.rosteringReporting;
				parentItem = { label: 'Rostering Reporting', href: '/reporting/rostering-reporting', icon: TrendingUpIcon };
				break;
			case 'Company Reporting':
				menuItems = reportingLevel3Menu.companyReporting;
				parentItem = { label: 'Company Reporting', href: '/reporting/company-reporting', icon: TrendingUpIcon };
				break;
			case 'PDF Reporting':
				menuItems = reportingLevel3Menu.pdfReporting;
				parentItem = { label: 'PDF Reporting', href: '/reporting/pdf-reporting', icon: TrendingUpIcon };
				break;
			default:
				menuItems = employeeLevel3Menu;
				parentItem = { label: 'Employee', href: '/employee/employee', icon: UserIcon };
		}

		level3Store.set({
			active: true,
			title: itemLabel,
			breadcrumb: parentLabel,
			items: [...menuItems],
			counter: Date.now()
		});
	}

	// Function to hide Level 3 navigation
	async function hideLevel3() {
		// Collapse all expanded menu items when returning to main navigation
		expandedItems.clear();
		expandedItems = new Set(expandedItems);
		
		level3Store.set({
			active: false,
			title: '',
			breadcrumb: '',
			items: [],
			counter: 0
		});
		await goto('/');
	}

	// Function to handle sub-menu item clicks  
	async function handleSubMenuClick(subItem: any, parentItem: any) {
		if (subItem.hasLevel3) {
			showLevel3(parentItem.label, subItem.label);
		}
		
		if (subItem.href) {
			await goto(subItem.href);
		} else if (subItem.onclick) {
			subItem.onclick();
		}
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

	// Function to render a menu section
	function renderMenuSection(section: any) {
		return section?.items || [];
	}

	// Function to get the active menu item label for page title
	function getActiveMenuItemLabel(): string | undefined {
		for (const item of config.content?.items || []) {
			if (isMenuItemActive(item)) {
				return item.label;
			}
			for (const subItem of item.subItems || []) {
				if (isSubMenuItemActive(subItem)) {
					return `${item.label} - ${subItem.label}`;
				}
			}
		}
		
		for (const item of config.header?.items || []) {
			if (isMenuItemActive(item)) {
				return item.label;
			}
			for (const subItem of item.subItems || []) {
				if (isSubMenuItemActive(subItem)) {
					return `${item.label} - ${subItem.label}`;
				}
			}
		}
		
		for (const item of config.footer?.items || []) {
			if (isMenuItemActive(item)) {
				return item.label;
			}
		}
		
		return undefined;
	}

	// Get the page title - use provided title or fall back to active menu item
	const effectivePageTitle = $derived(pageTitle || getActiveMenuItemLabel());

	// Handle keyboard shortcuts
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && $level3Store.active) {
			hideLevel3();
		}
	}
</script>

<svelte:head>
	{#if effectivePageTitle}
		<title>{effectivePageTitle} - Definitiv</title>
	{/if}
</svelte:head>

<svelte:window onclick={handleClickOutside} onkeydown={handleKeydown} />

<div class={cn('flex p-2', className)} {...restProps}>
	{#if isLevel3Active}
		<!-- Level 3 Navigation Sidebar -->
		<Sidebar.Provider bind:open>
			<Sidebar.Root {variant} {side} {collapsible}>
				<!-- Level 3 Header -->
				<Sidebar.Header>
					<!-- Level 3 Header - Expanded State -->
					<div class="group-data-[collapsible=icon]:hidden">
						<!-- Top row: Collapse trigger and Search -->
						<div class="flex items-center justify-between px-3 py-2 border-b border-sidebar-border">
							<div class="flex items-center gap-3">
								<Sidebar.Trigger class="h-4 w-4 text-primary" />
								<span class="font-medium text-sidebar-foreground">{level3Title}</span>
							</div>
							<button 
								type="button" 
								class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary"
								onclick={toggleSearchBar}
							>
								<SearchIcon class="h-4 w-4" />
							</button>
						</div>
						
						<!-- Breadcrumb row: Back button and breadcrumb -->
						<div class="flex items-center gap-3 px-3 py-2 border-b border-sidebar-border">
							<button 
								type="button" 
								class="h-4 w-4 text-primary cursor-pointer"
								onclick={hideLevel3}
								title="Back to main menu"
								aria-label="Back to main menu"
							>
								<ArrowLeftIcon class="h-4 w-4" />
							</button>
							<span class="text-xs text-muted-foreground">{level3Breadcrumb}</span>
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

					<!-- Level 3 Header - Collapsed State -->
					<div class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:border-b group-data-[collapsible=icon]:border-sidebar-border hidden">
						<Sidebar.Trigger class="h-6 w-6 text-primary" />
						<button 
							type="button" 
							class="p-1 rounded-md hover:bg-hover hover:text-sidebar-accent-foreground transition-colors text-primary"
							onclick={toggleSearchBar}
						>
							<SearchIcon class="h-4 w-4" />
						</button>
						
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
					<!-- Expanded Menu -->
					<div class="group-data-[collapsible=icon]:hidden">
						<Sidebar.Menu>
							{#each level3Items as item}
								<Sidebar.MenuItem>
									<button
										type="button"
										onclick={() => handleLevel3Click(item)}
										class="flex w-full items-start gap-2 rounded-md px-2 py-2 text-sm transition-colors hover:bg-hover hover:text-sidebar-accent-foreground text-left {$page.url.pathname === item.href ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''}"
									>
										{#if item.icon}
											{@const IconComponent = item.icon}
											<IconComponent class="h-4 w-4 mt-0.5 flex-shrink-0 {$page.url.pathname === item.href ? 'text-white' : 'text-muted-foreground'}" />
										{/if}
										<span class="text-left leading-tight">{item.label}</span>
									</button>
								</Sidebar.MenuItem>
							{/each}
						</Sidebar.Menu>
					</div>
					
					<!-- Collapsed Icon-Only Menu -->
					<div class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2 hidden">
						{#each level3Items as item}
							<button
								type="button"
								onclick={() => handleLevel3Click(item)}
								class="h-8 w-8 rounded-md flex items-center justify-center transition-colors hover:bg-hover hover:text-sidebar-accent-foreground {$page.url.pathname === item.href ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''}"
								title={item.label}
							>
								{#if item.icon}
									{@const IconComponent = item.icon}
									<IconComponent class="h-4 w-4 {$page.url.pathname === item.href ? 'text-white' : 'text-muted-foreground'}" />
								{/if}
							</button>
						{/each}
					</div>
				</Sidebar.Content>

				<!-- Level 3 Footer Section -->
				{#if config.footer && config.footer.items.length > 0}
					<Sidebar.Footer class="relative">
						<div class="border-t border-sidebar-border"></div>
						
						<Sidebar.Menu>
							{#each renderMenuSection(config.footer) as item}
								<Sidebar.MenuItem>
									{#if item.hasContextMenu}
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
											
											{#if showSettingsMenu}
												<div class="absolute left-full bottom-0 ml-2 w-64 bg-card border border-border rounded-lg shadow-lg p-2 z-50">
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
						
						<!-- Organization Switcher -->
						<Sidebar.Menu>
							<Sidebar.MenuItem>
								<OrganizationSwitcher />
							</Sidebar.MenuItem>
						</Sidebar.Menu>
					</Sidebar.Footer>
				{/if}
			</Sidebar.Root>

			<!-- Main Content Area -->
			<div class="bg-card border rounded-xl w-full p-4">
				{@render children?.()}
			</div>
		</Sidebar.Provider>
	{:else}
		<!-- Main Navigation Sidebar -->
		<Sidebar.Provider bind:open>
			<Sidebar.Root {variant} {side} {collapsible}>
				<!-- Header Section -->
				<Sidebar.Header>
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
					{/if}
				</Sidebar.Header>

				<!-- Main Content Section -->
				<Sidebar.Content class="p-3">
					<!-- Expanded Menu -->
					<div class="group-data-[collapsible=icon]:hidden">
						<Sidebar.Menu>
							{#each renderMenuSection(config.content) as item}
								<Sidebar.MenuItem>
									<Sidebar.MenuButton
										tooltipContent={item.tooltipContent}
										isActive={isMenuItemActive(item)}
										onclick={() => handleMenuClick(item)}
										class={cn(
											isMenuItemActive(item) ? 'bg-selected text-white hover:bg-selected hover:text-white' : '',
											'group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:text-sidebar-foreground',
											item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem)) ? 'group-data-[collapsible=icon]:bg-selected group-data-[collapsible=icon]:text-white group-data-[collapsible=icon]:hover:bg-selected' : '',
											(expandedItems.has(item.label) && item.subItems && item.subItems.length > 0) || (item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem))) ? 'font-semibold' : '',
											'group-data-[collapsible=icon]:font-normal'
										)}
									>
										{#if item.icon}
											{@const IconComponent = item.icon}
											<IconComponent />
										{/if}
										<span>{item.label}</span>
										{#if item.hasNotification && item.notificationCount && item.subItems && item.subItems.length > 0}
											<span class="ml-auto flex items-center gap-2">
												<span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
													{item.notificationCount}
												</span>
												<ChevronDownIcon 
													class="h-4 w-4 transition-transform duration-200 {expandedItems.has(item.label) ? 'rotate-180' : 'rotate-0'}"
												/>
											</span>
										{:else if item.hasNotification && item.notificationCount}
											<span class="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
												{item.notificationCount}
											</span>
										{:else if item.subItems && item.subItems.length > 0}
											<ChevronDownIcon 
												class="ml-auto h-4 w-4 transition-transform duration-200 {expandedItems.has(item.label) ? 'rotate-180' : 'rotate-0'}"
											/>
										{/if}
									</Sidebar.MenuButton>

									{#if item.subItems && item.subItems.length > 0 && expandedItems.has(item.label)}
										<Sidebar.MenuSub>
											{#each item.subItems as subItem}
												<Sidebar.MenuSubItem>
													{#if subItem.hasLevel3}
														<button
															type="button"
															onclick={() => handleSubMenuClick(subItem, item)}
															class="text-sidebar-foreground ring-sidebar-ring hover:bg-hover hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground outline-hidden flex h-7 w-full min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 whitespace-nowrap [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden {isSubMenuItemActive(subItem) ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''} hover:[&>svg]:opacity-100"
														>
															<span class="truncate">{subItem.label}</span>
															<ChevronRightIcon class="h-4 w-4 ml-auto text-muted-foreground opacity-0 transition-opacity duration-200 flex-shrink-0" />
														</button>
													{:else if subItem.href}
														<Sidebar.MenuSubButton 
															href={subItem.href}
															isActive={isSubMenuItemActive(subItem)}
															class={isSubMenuItemActive(subItem) ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''}
														>
															<span>{subItem.label}</span>
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
					</div>
					
					<!-- Collapsed Icon-Only Menu -->
					<div class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2 hidden">
						{#each renderMenuSection(config.content) as item}
							<button
								type="button"
								onclick={() => handleMenuClick(item)}
								class="h-8 w-8 rounded-md flex items-center justify-center transition-colors hover:bg-hover hover:text-sidebar-accent-foreground {isMenuItemActive(item) || (item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem))) ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''} relative"
								title={item.label}
							>
								{#if item.icon}
									{@const IconComponent = item.icon}
									<IconComponent class="h-4 w-4 {isMenuItemActive(item) || (item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem))) ? 'text-white' : 'text-muted-foreground'}" />
								{/if}
								{#if item.hasNotification && item.notificationCount}
									<span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
										{item.notificationCount}
									</span>
								{/if}
							</button>
						{/each}
					</div>
				</Sidebar.Content>
			</Sidebar.Root>

			<!-- Main Content Area -->
			<div class="bg-card border rounded-xl w-full p-4">
			{@render children?.()}
			</div>
		</Sidebar.Provider>
	{:else}
		<!-- Main Navigation Sidebar -->
		<Sidebar.Provider bind:open>
			<Sidebar.Root {variant} {side} {collapsible}>
				<!-- Header Section -->
				<Sidebar.Header>
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
					{/if}
				</Sidebar.Header>

				<!-- Main Content Section -->
				<Sidebar.Content class="p-3">
					<!-- Expanded Menu -->
					<div class="group-data-[collapsible=icon]:hidden">
						<Sidebar.Menu>
							{#each renderMenuSection(config.content) as item}
								<Sidebar.MenuItem>
									<Sidebar.MenuButton
										tooltipContent={item.tooltipContent}
										isActive={isMenuItemActive(item)}
										onclick={() => handleMenuClick(item)}
										class={cn(
											isMenuItemActive(item) ? 'bg-selected text-white hover:bg-selected hover:text-white' : '',
											'group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:text-sidebar-foreground',
											item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem)) ? 'group-data-[collapsible=icon]:bg-selected group-data-[collapsible=icon]:text-white group-data-[collapsible=icon]:hover:bg-selected' : '',
											(expandedItems.has(item.label) && item.subItems && item.subItems.length > 0) || (item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem))) ? 'font-semibold' : '',
											'group-data-[collapsible=icon]:font-normal'
										)}
									>
										{#if item.icon}
											{@const IconComponent = item.icon}
											<IconComponent />
										{/if}
										<span>{item.label}</span>
										{#if item.hasNotification && item.notificationCount && item.subItems && item.subItems.length > 0}
											<span class="ml-auto flex items-center gap-2">
												<span class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
													{item.notificationCount}
												</span>
												<ChevronDownIcon 
													class="h-4 w-4 transition-transform duration-200 {expandedItems.has(item.label) ? 'rotate-180' : 'rotate-0'}"
												/>
											</span>
										{:else if item.hasNotification && item.notificationCount}
											<span class="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
												{item.notificationCount}
											</span>
										{:else if item.subItems && item.subItems.length > 0}
											<ChevronDownIcon 
												class="ml-auto h-4 w-4 transition-transform duration-200 {expandedItems.has(item.label) ? 'rotate-180' : 'rotate-0'}"
											/>
										{/if}
									</Sidebar.MenuButton>

									{#if item.subItems && item.subItems.length > 0 && expandedItems.has(item.label)}
										<Sidebar.MenuSub>
											{#each item.subItems as subItem}
												<Sidebar.MenuSubItem>
													{#if subItem.hasLevel3}
														<button
															type="button"
															onclick={() => handleSubMenuClick(subItem, item)}
															class="text-sidebar-foreground ring-sidebar-ring hover:bg-hover hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground outline-hidden flex h-7 w-full min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 whitespace-nowrap [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden {isSubMenuItemActive(subItem) ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''} hover:[&>svg]:opacity-100"
														>
															<span class="truncate">{subItem.label}</span>
															<ChevronRightIcon class="h-4 w-4 ml-auto text-muted-foreground opacity-0 transition-opacity duration-200 flex-shrink-0" />
														</button>
													{:else if subItem.href}
														<Sidebar.MenuSubButton 
															href={subItem.href}
															isActive={isSubMenuItemActive(subItem)}
															class={isSubMenuItemActive(subItem) ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''}
														>
															<span>{subItem.label}</span>
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
					</div>
					
					<!-- Collapsed Icon-Only Menu -->
					<div class="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2 hidden">
						{#each renderMenuSection(config.content) as item}
							<button
								type="button"
								onclick={() => handleMenuClick(item)}
								class="h-8 w-8 rounded-md flex items-center justify-center transition-colors hover:bg-hover hover:text-sidebar-accent-foreground {isMenuItemActive(item) || (item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem))) ? 'bg-selected text-white hover:bg-selected hover:text-white' : ''} relative"
								title={item.label}
							>
								{#if item.icon}
									{@const IconComponent = item.icon}
									<IconComponent class="h-4 w-4 {isMenuItemActive(item) || (item.subItems && item.subItems.some((subItem: any) => isSubMenuItemActive(subItem))) ? 'text-white' : 'text-muted-foreground'}" />
								{/if}
								{#if item.hasNotification && item.notificationCount}
									<span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
										{item.notificationCount}
									</span>
								{/if}
							</button>
						{/each}
					</div>
				</Sidebar.Content>

				<!-- Footer Section -->
				{#if config.footer && config.footer.items.length > 0}
					<Sidebar.Footer class="relative">
						<div class="border-t border-sidebar-border"></div>
						
						<Sidebar.Menu>
							{#each renderMenuSection(config.footer) as item}
								<Sidebar.MenuItem>
									{#if item.hasContextMenu}
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
											
											{#if showSettingsMenu}
												<div class="absolute left-full bottom-0 ml-2 w-64 bg-card border border-border rounded-lg shadow-lg p-2 z-50">
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
						
						<!-- Organization Switcher -->
						<Sidebar.Menu>
							<Sidebar.MenuItem>
								<OrganizationSwitcher />
							</Sidebar.MenuItem>
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
