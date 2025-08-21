<script lang="ts">
	import { cn } from '$lib/utils.js';

	let {
		class: className,
		title,
		children,
		...restProps
	}: {
		class?: string;
		title?: string;
		children?: import('svelte').Snippet;
	} & Record<string, any> = $props();
</script>

<div
	data-slot="left-navigation-group"
	class={cn(
		// Using your design system colors and spacing
		'bg-white border border-neutral-200 overflow-hidden',
		// Using your spacing system: --spacing-s2: 16px (mb-4)
		'mb-4',
		className
	)}
	{...restProps}
>
	{#if title}
		<div class={cn(
			// Using your spacing tokens
			'px-4 py-3',
			// Using your typography and color system
			'text-xs font-normal text-neutral-400 uppercase tracking-wide',
			// Section header background
			'bg-neutral-50 border-b border-neutral-200',
			// Using your Inter font (already set globally)
			'font-sans'
		)}>
			{title}
		</div>
	{/if}
	{@render children?.()}
</div>
