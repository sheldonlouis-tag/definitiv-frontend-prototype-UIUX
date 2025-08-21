<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../../utils.js';

	let {
		ref = $bindable(null),
		class: className,
		expanded = true,
		children,
		...restProps
	}: NavigationMenuPrimitive.ListProps & {
		expanded?: boolean;
	} = $props();
</script>

{#if expanded}
	<NavigationMenuPrimitive.List
		bind:ref
		data-slot="left-navigation-list"
		class={cn('flex flex-col list-none', className)}
		{...restProps}
	>
		{@render children?.()}
	</NavigationMenuPrimitive.List>
{/if}
