<script lang="ts">
	import { PageHeader } from '$lib/components/layout/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { goto } from '$app/navigation';
	import { 
		FolderTree, 
		UserCog2, 
		MapPin, 
		Building 
	} from 'lucide-svelte';
	import { costCentersLevel3Menu } from '$lib/config/sidebar-configs.js';

	// Navigate to a specific cost center section
	async function navigateToSection(href: string) {
		await goto(href);
	}
</script>

<div class="page-container">
	<div class="page-content">
		<div class="page-header">
			<PageHeader 
				title="Cost Centers" 
				subtitle="Manage organizational structure and assignments"
			/>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each costCentersLevel3Menu as item}
				<Card class="hover:shadow-lg transition-shadow cursor-pointer" onclick={() => navigateToSection(item.href)}>
					<CardHeader>
						<div class="flex items-center gap-3">
							<div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
								<svelte:component this={item.icon} class="h-5 w-5 text-primary" />
							</div>
							<CardTitle class="text-lg">{item.label}</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<p class="text-sm text-muted-foreground">
							Manage {item.label.toLowerCase()} and related settings
						</p>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</div>
