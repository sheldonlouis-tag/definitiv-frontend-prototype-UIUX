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
</script>

<NavigationMenuPrimitive.Item
	bind:ref
	data-slot="left-navigation-item"
	data-level={level}
	data-has-children={hasChildren}
	class={cn('relative', className)}
	{...restProps}
>
	{@render children?.()}
</NavigationMenuPrimitive.Item>
