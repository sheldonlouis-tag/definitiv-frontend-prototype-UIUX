<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../../utils.js';

	let {
		ref = $bindable(null),
		class: className,
		width = 280, // Exact Figma value: menu-width: 280
		children,
		...restProps
	}: NavigationMenuPrimitive.RootProps & {
		width?: number;
	} = $props();
</script>

<NavigationMenuPrimitive.Root
	bind:ref
	data-slot="left-navigation-menu"
	class={cn(
		'flex h-full flex-col bg-white overflow-y-auto',
		// Using your design system border color that matches Figma: divider: #dadee3
		'border-r border-neutral-200', 
		// Using your shadow system for subtle elevation
		'shadow-sm',
		className
	)}
	style="width: {width}px;"
	{...restProps}
>
	{@render children?.()}
</NavigationMenuPrimitive.Root>
