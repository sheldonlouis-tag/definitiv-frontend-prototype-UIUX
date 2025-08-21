<script lang="ts">
	import { 
		LeftNavigationMenu,
		LeftNavigationGroup,
		LeftNavigationItem,
		LeftNavigationLink,
		LeftNavigationList,
		type LeftNavigationData
	} from './index.js';

	let {
		navigationData,
		activeItemId = $bindable('dashboard'),
		class: className,
		...restProps
	}: {
		navigationData: LeftNavigationData[];
		activeItemId?: string;
		class?: string;
	} & Record<string, any> = $props();

	let expandedItems = $state<Record<string, boolean>>({
		'projects': false,
		'documents': false,
		'users': false,
		'settings': false,
		'active-projects': false
	});

	function handleItemClick(item: LeftNavigationData, event: MouseEvent) {
		event.preventDefault();
		
		// Set active item
		activeItemId = item.id;
		
		// Toggle expanded state if item has children
		if (item.children && item.children.length > 0) {
			expandedItems[item.id] = !expandedItems[item.id];
		}
		
		// Auto-expand parent if clicking on child
		if (activeItemId === 'project-alpha' || activeItemId === 'project-beta') {
			expandedItems['projects'] = true;
			expandedItems['active-projects'] = true;
		}
	}
</script>

<LeftNavigationMenu class={className} {...restProps}>
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
									<LeftNavigationItem hasChildren={!!(childItem.children?.length)} level={2}>
										<LeftNavigationLink
											href={childItem.href || '#'}
											label={childItem.label}
											active={activeItemId === childItem.id}
											expanded={expandedItems[childItem.id] || false}
											hasChildren={!!(childItem.children?.length)}
											level={2}
											onclick={(event) => handleItemClick(childItem, event)}
										/>

										{#if childItem.children?.length && expandedItems[childItem.id]}
											<LeftNavigationList expanded={true}>
												{#each childItem.children as grandChildItem}
													<LeftNavigationItem level={3}>
														<LeftNavigationLink
															href={grandChildItem.href || '#'}
															label={grandChildItem.label}
															active={activeItemId === grandChildItem.id}
															level={3}
															onclick={(event) => handleItemClick(grandChildItem, event)}
														/>
													</LeftNavigationItem>
												{/each}
											</LeftNavigationList>
										{/if}
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
