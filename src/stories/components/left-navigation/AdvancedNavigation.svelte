<script lang="ts">
	import { 
		LeftNavigationMenu,
		LeftNavigationGroup,
		LeftNavigationItem,
		LeftNavigationLink,
		LeftNavigationList,
		type LeftNavigationData
	} from '$lib/components/ui/left-navigation/index.js';
	
	// Import icons
	import HomeIcon from '@lucide/svelte/icons/home';
	import FolderIcon from '@lucide/svelte/icons/folder';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import UsersIcon from '@lucide/svelte/icons/users';
	import DatabaseIcon from '@lucide/svelte/icons/database';
	import BarChart3Icon from '@lucide/svelte/icons/bar-chart-3';

	let {
		activeItemId = $bindable('dashboard')
	} = $props();

	const navigationData: LeftNavigationData[] = [
		{
			id: 'main-section',
			label: 'Main Navigation',
			children: [
				{
					id: 'dashboard',
					label: 'Dashboard',
					href: '/dashboard',
					icon: HomeIcon
				},
				{
					id: 'projects',
					label: 'Projects',
					href: '/projects',
					icon: FolderIcon,
					children: [
						{
							id: 'active-projects',
							label: 'Active Projects',
							href: '/projects/active'
						},
						{
							id: 'templates',
							label: 'Templates',
							href: '/projects/templates'
						}
					]
				},
				{
					id: 'documents',
					label: 'Documents',
					href: '/documents',
					icon: FileTextIcon
				},
				{
					id: 'analytics',
					label: 'Analytics', 
					href: '/analytics',
					icon: BarChart3Icon
				}
			]
		},
		{
			id: 'admin-section',
			label: 'Administration',
			children: [
				{
					id: 'users',
					label: 'User Management',
					href: '/admin/users',
					icon: UsersIcon,
					children: [
						{
							id: 'active-users',
							label: 'Active Users',
							href: '/admin/users/active'
						},
						{
							id: 'pending-users',
							label: 'Pending Approval',
							href: '/admin/users/pending'
						}
					]
				},
				{
					id: 'database',
					label: 'Database',
					href: '/admin/database',
					icon: DatabaseIcon
				},
				{
					id: 'settings',
					label: 'System Settings',
					href: '/admin/settings',
					icon: SettingsIcon
				}
			]
		}
	];

	let expandedItems = $state<Record<string, boolean>>({});

	function handleItemClick(item: LeftNavigationData, event: MouseEvent) {
		event.preventDefault();
		activeItemId = item.id;
		
		if (item.children && item.children.length > 0) {
			expandedItems[item.id] = !expandedItems[item.id];
		}
	}
</script>

<div class="h-screen flex">
	<LeftNavigationMenu>
		{#each navigationData as section}
			<LeftNavigationGroup title={section.label}>
				<LeftNavigationList>
					{#each section.children || [] as item}
						<LeftNavigationItem hasChildren={!!(item.children?.length)} level={1}>
							<LeftNavigationLink
								href={item.href || '#'}
								label={item.label}
								icon={item.icon}
								active={activeItemId === item.id}
								expanded={expandedItems[item.id] || false}
								hasChildren={!!(item.children?.length)}
								level={1}
								onclick={(event) => handleItemClick(item, event)}
							/>

							{#if item.children?.length && expandedItems[item.id]}
								<LeftNavigationList expanded={true}>
									{#each item.children as childItem}
										<LeftNavigationItem level={2}>
											<LeftNavigationLink
												href={childItem.href || '#'}
												label={childItem.label}
												active={activeItemId === childItem.id}
												level={2}
												onclick={(event) => handleItemClick(childItem, event)}
											/>
										</LeftNavigationItem>
									{/each}
								</LeftNavigationList>
							{/if}
						</LeftNavigationItem>
					{/each}
				</LeftNavigationList>
			</LeftNavigationGroup>
		{/each}
	</LeftNavigationMenu>

	<div class="flex-1 p-8 bg-gray-50">
		<h1 class="text-2xl font-bold mb-4">
			{#if activeItemId === 'dashboard'}Dashboard
			{:else if activeItemId === 'projects'}Projects
			{:else if activeItemId === 'active-projects'}Active Projects
			{:else if activeItemId === 'templates'}Templates
			{:else if activeItemId === 'documents'}Documents
			{:else if activeItemId === 'analytics'}Analytics
			{:else if activeItemId === 'users'}User Management
			{:else if activeItemId === 'active-users'}Active Users
			{:else if activeItemId === 'pending-users'}Pending Approval
			{:else if activeItemId === 'database'}Database
			{:else if activeItemId === 'settings'}System Settings
			{:else}Content Area
			{/if}
		</h1>
		<p class="text-gray-600">
			Click navigation items to see active states and expand/collapse functionality. 
			This matches the design from your Figma prototype.
		</p>
	</div>
</div>
