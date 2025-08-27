<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		level = 1,
		hasChildren = false,
		children,
		...restProps
	}: NavigationMenuPrimitive.ItemProps & {
		level?: number;
		hasChildren?: boolean;
	} = $props();

	// DEBUG: Add this line
	console.log('Navigation item props:', { level, hasChildren, children, className });
</script>

<NavigationMenuPrimitive.Item
	bind:ref
	data-slot="left-navigation-item"
	data-level={level}
	data-has-children={hasChildren}
	class={cn('relative', className)}
	{...restProps}
>
	
	{#if children && Array.isArray(children) && children.length > 0}
		<div style="background: yellow; padding: 4px; font-size: 10px;">
			DEBUG: Found {children.length} children
			{JSON.stringify(children[0], null, 2)}
		</div>
		{#each children as childItem, index}
			<div style="background: pink; padding: 2px; font-size: 10px;">
				Child {index}: {JSON.stringify(Object.keys(childItem))}
			</div>
			<svelte:self {...childItem} />
		{/each}
	{/if}

</NavigationMenuPrimitive.Item>