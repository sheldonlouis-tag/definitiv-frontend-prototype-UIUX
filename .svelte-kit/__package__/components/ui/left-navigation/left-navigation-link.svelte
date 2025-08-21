<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
	import { cn } from '../../../utils.js';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';

	let {
		ref = $bindable(null),
		class: className,
		level = 1,
		expanded = false,
		hasChildren = false,
		icon,
		label,
		active = false,
		children,
		...restProps
	}: NavigationMenuPrimitive.LinkProps & {
		level?: number;
		expanded?: boolean;
		hasChildren?: boolean;
		icon?: import('svelte').Component;
		label: string;
		active?: boolean;
	} = $props();

	// Use your CSS custom properties for consistent spacing
	function getPaddingLeft(level: number): string {
		// Using your spacing variables: --spacing-s2: 16px
		return level === 1 ? '16px' : level === 2 ? '32px' : '48px';
	}
</script>

<NavigationMenuPrimitive.Link
	bind:ref
	data-slot="left-navigation-link"
	data-level={level}
	data-active={active}
	class={cn(
		// Base styles using your design system
		'flex items-center transition-all duration-200 outline-none relative',
		// Using your spacing variables for consistent gaps and padding
		'gap-2 py-3 px-4', // --spacing-s1: 8px gap, --spacing-s1_5: 12px vertical padding
		// Using your typography: Inter font is already set globally
		'text-sm font-normal leading-4',
		
		// Hover states using your design tokens
		'hover:bg-neutral-50/50 focus:bg-neutral-50/50',
		'focus-visible:ring-2 focus-visible:ring-primary/10 focus-visible:outline-none',
		
		// Active state using your exact Figma colors mapped to your design system
		// From Figma: lb-resting: #2a2e33 -> using your --color-neutral-800
		active && 'bg-neutral-800 text-white hover:bg-neutral-800 focus:bg-neutral-800',
		!active && 'text-neutral-800',
		
		// Icon sizing using your design tokens
		'[&_svg]:w-5 [&_svg]:h-5 [&_svg]:flex-shrink-0',
		// Icon colors from Figma: icon-resting: #5e6469 -> using your neutral variants
		active ? '[&_svg]:text-white' : '[&_svg]:text-neutral-500',
		
		className
	)}
	style="padding-left: {getPaddingLeft(level)}; padding-right: 16px;"
	{...restProps}
>
	<!-- Left icon - only show for level 1 items -->
	{#if icon && level === 1}
		<svelte:component this={icon} class="w-5 h-5" />
	{/if}

	<!-- Label with your design system typography -->
	<span class={cn(
		'flex-1 truncate',
		// Using your typography tokens
		active ? 'font-semibold text-white' : 'font-normal',
		// Your letter spacing: --tracking-normal: 0em
		'tracking-normal'
	)}>
		{label}
	</span>

	<!-- Chevron for expandable items -->
	{#if hasChildren}
		<ChevronRightIcon 
			class={cn(
				'w-4 h-4 transition-transform duration-200',
				expanded && 'rotate-90',
				active ? 'text-white' : 'text-neutral-500'
			)} 
		/>
	{/if}

	{@render children?.()}
</NavigationMenuPrimitive.Link>
