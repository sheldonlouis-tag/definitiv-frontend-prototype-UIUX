<script lang="ts">
	import { PageHeader } from '$lib/components/layout/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ClockIcon from '@lucide/svelte/icons/clock-3';
	import CoinsIcon from '@lucide/svelte/icons/coins';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import { goto } from '$app/navigation';

	// Quick action items matching the Level 3 menu
	const quickActions = [
		{
			title: 'Accrual Types',
			description: 'Manage leave accrual types and configurations',
			icon: ClockIcon,
			href: '/admin/payroll/accrual-types',
			badge: 'NEW'
		},
		{
			title: 'Pay Items',
			description: 'Configure pay items, rates, and calculations',
			icon: CoinsIcon,
			href: '/admin/payroll/pay-items',
			badge: 'UPDATED'
		},
		{
			title: 'Pay Calendars',
			description: 'Set up payroll calendars and pay periods',
			icon: CalendarIcon,
			href: '/admin/payroll/pay-calendars'
		}
	];

	async function navigateToAction(href: string) {
		await goto(href);
	}
</script>

<div class="page-container">
	<div class="page-content">
		<!-- Header Section -->
		<div class="page-header">
			<PageHeader 
				title="Admin Payroll" 
				subtitle="Payroll administration and configuration"
				breadcrumbs={[
					{ label: 'Admin', href: '/admin' },
					{ label: 'Payroll' }
				]}
			/>
		</div>

		<!-- Main Content -->
		<div class="card-container">
			<!-- Overview Card -->
			<Card class="card">
				<CardHeader class="card-header">
					<CardTitle>Payroll Administration</CardTitle>
				</CardHeader>
				<CardContent class="card-content">
					<p class="text-muted-foreground mb-4">
						Manage payroll configurations, accrual types, pay items, and pay calendars. 
						These settings control how payroll is calculated and processed across your organization.
					</p>
					
					<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					{#each quickActions as action}
					{@const IconComponent = action.icon}
					<button
					type="button"
					onclick={() => navigateToAction(action.href)}
					 class="group p-4 rounded-lg border border-border hover:border-primary hover:bg-hover transition-all duration-200 text-left relative overflow-hidden"
					>
					{#if action.badge}
					<div class="absolute top-2 right-2">
					<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
					 {action.badge}
					 </span>
					 </div>
					{/if}
					
					<div class="flex items-start gap-3">
					<div class="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
					<IconComponent class="h-5 w-5" />
					</div>
									
									<div class="flex-1 min-w-0">
										<h3 class="font-medium group-hover:text-primary transition-colors mb-1">
											{action.title}
										</h3>
										<p class="text-sm text-muted-foreground line-clamp-2">
											{action.description}
										</p>
									</div>
									
									<ChevronRightIcon class="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
								</div>
							</button>
						{/each}
					</div>
				</CardContent>
			</Card>

			<!-- Status Overview Card -->
			<Card class="card">
				<CardHeader class="card-header">
					<CardTitle>Configuration Status</CardTitle>
				</CardHeader>
				<CardContent class="card-content">
					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div class="text-center">
							<div class="text-2xl font-bold text-primary mb-1">12</div>
							<div class="text-sm text-muted-foreground">Accrual Types</div>
						</div>
						<div class="text-center">
							<div class="text-2xl font-bold text-primary mb-1">45</div>
							<div class="text-sm text-muted-foreground">Pay Items</div>
						</div>
						<div class="text-center">
							<div class="text-2xl font-bold text-primary mb-1">4</div>
							<div class="text-sm text-muted-foreground">Pay Calendars</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
</div>
