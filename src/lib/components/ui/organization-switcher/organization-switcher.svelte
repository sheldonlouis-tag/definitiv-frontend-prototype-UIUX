<script lang="ts">
	import { cn } from '$lib/utils.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import CheckIcon from '@lucide/svelte/icons/check';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Organization {
		id: string;
		name: string;
		plan?: string;
		logo?: string;
		initials?: string;
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		organizations?: Organization[];
		currentOrganization?: Organization;
		onOrganizationChange?: (organization: Organization) => void;
		onAddOrganization?: () => void;
		class?: string;
	}

	let {
		organizations = [
			{ 
				id: '1', 
				name: 'Access Definitiv', 
				plan: 'Enterprise', 
				initials: 'AD'
			},
			{ 
				id: '2', 
				name: 'EVODS Corp', 
				plan: 'Pro', 
				initials: 'EC'
			},
			{ 
				id: '3', 
				name: 'Payroll Solutions', 
				plan: 'Basic', 
				initials: 'PS'
			}
		],
		currentOrganization = organizations[0],
		onOrganizationChange = (org: Organization) => {
			console.log('Organization changed to:', org.name);
		},
		onAddOrganization = () => {
			console.log('Add organization clicked');
		},
		class: className,
		...restProps
	}: Props = $props();

	let open = $state(false);

	function handleOrganizationSelect(organization: Organization) {
		currentOrganization = organization;
		onOrganizationChange?.(organization);
		open = false;
	}

	function handleAddOrganization() {
		onAddOrganization?.();
		open = false;
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		if (open) {
			const target = event.target as Element;
			if (!target.closest('.org-switcher-container')) {
				open = false;
			}
		}
	}
</script>

<svelte:window onclick={handleClickOutside} />

<div class={cn('w-full relative org-switcher-container', className)} {...restProps}>
	<Sidebar.MenuButton
		onclick={() => open = !open}
		class="w-full py-4 px-2"
	>
		<div class="h-6 w-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">
			{currentOrganization?.initials || currentOrganization?.name.charAt(0) || '?'}
		</div>
		<div class="flex flex-col items-start min-w-0 flex-1">
			<span class="text-sm font-medium truncate w-full text-left">
				{currentOrganization?.name || 'Select Organization'}
			</span>
			{#if currentOrganization?.plan}
				<span class="text-xs text-muted-foreground">
					{currentOrganization.plan}
				</span>
			{/if}
		</div>
		<ChevronsUpDownIcon class="h-4 w-4 text-muted-foreground flex-shrink-0" />
	</Sidebar.MenuButton>

	{#if open}
		<div class="absolute left-full bottom-0 ml-2 w-64 bg-card border border-border rounded-lg shadow-lg p-2 z-50">
			<div class="flex flex-col gap-1">
				<!-- Current Organizations -->
				<div class="px-2 py-1.5">
					<span class="text-xs font-medium text-muted-foreground uppercase tracking-wide">
						Organizations
					</span>
				</div>
				
				{#each organizations as org}
					<button
						type="button"
						onclick={() => handleOrganizationSelect(org)}
						class="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-hover hover:text-accent-foreground text-left {currentOrganization?.id === org.id ? 'bg-accent' : ''}"
					>
						<div class="h-6 w-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">
						{org.initials || org.name.charAt(0)}
						</div>
						<div class="flex flex-col items-start min-w-0 flex-1">
							<span class="text-sm font-medium truncate w-full text-left">
								{org.name}
							</span>
							{#if org.plan}
								<span class="text-xs text-muted-foreground">
									{org.plan}
								</span>
							{/if}
						</div>
						{#if currentOrganization?.id === org.id}
							<CheckIcon class="h-4 w-4 text-primary" />
						{/if}
					</button>
				{/each}
				
				<!-- Add Organization -->
				<hr class="my-2" />
				<button
					type="button"
					onclick={handleAddOrganization}
					class="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-hover hover:text-accent-foreground text-left"
				>
					<div class="h-5 w-5 rounded-md border-2 border-dashed border-muted-foreground/50 flex items-center justify-center">
						<PlusIcon class="h-3 w-3 text-muted-foreground" />
					</div>
					<span class="text-sm text-muted-foreground">Add organization</span>
				</button>
			</div>
		</div>
	{/if}
</div>
