<script lang="ts">
	import { PageHeader } from '$lib/components/layout/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '$lib/components/ui/table/index.js';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SearchIcon from '@lucide/svelte/icons/search';
	import EditIcon from '@lucide/svelte/icons/edit';
	import Trash2Icon from '@lucide/svelte/icons/trash-2';
	import ClockIcon from '@lucide/svelte/icons/clock-3';

	// Sample accrual types data
	const accrualTypes = [
		{
			id: 1,
			name: 'Annual Leave',
			code: 'AL',
			accrualRate: 7.67,
			accrualUnit: 'Hours per month',
			maxAccrual: 240,
			carryOver: true,
			status: 'Active'
		},
		{
			id: 2,
			name: 'Sick Leave',
			code: 'SL',
			accrualRate: 3.83,
			accrualUnit: 'Hours per month',
			maxAccrual: 120,
			carryOver: false,
			status: 'Active'
		},
		{
			id: 3,
			name: 'Long Service Leave',
			code: 'LSL',
			accrualRate: 0.87,
			accrualUnit: 'Hours per month',
			maxAccrual: null,
			carryOver: true,
			status: 'Active'
		},
		{
			id: 4,
			name: 'Personal Leave',
			code: 'PL',
			accrualRate: 1.92,
			accrualUnit: 'Hours per month',
			maxAccrual: 80,
			carryOver: false,
			status: 'Inactive'
		}
	];

	let searchQuery = '';

	// Filter accrual types based on search
	$: filteredAccrualTypes = accrualTypes.filter(type =>
		type.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
		type.code.toLowerCase().includes(searchQuery.toLowerCase())
	);

	function handleAddNew() {
		console.log('Add new accrual type');
	}

	function handleEdit(id: number) {
		console.log('Edit accrual type:', id);
	}

	function handleDelete(id: number) {
		console.log('Delete accrual type:', id);
	}
</script>

<div class="page-container">
	<div class="page-content">
		<!-- Header Section -->
		<div class="page-header">
			<PageHeader 
				title="Accrual Types" 
				subtitle="Manage leave accrual types and configurations"
				breadcrumbs={[
					{ label: 'Admin', href: '/admin' },
					{ label: 'Payroll', href: '/admin/payroll' },
					{ label: 'Accrual Types' }
				]}
			/>
			<Button onclick={handleAddNew}>
				<PlusIcon class="h-4 w-4" />
				Add Accrual Type
			</Button>
		</div>

		<!-- Controls Bar -->
		<div class="controls-bar">
			<div class="control-group">
				<span class="text-sm text-muted-foreground">
					{filteredAccrualTypes.length} accrual type{filteredAccrualTypes.length !== 1 ? 's' : ''}
				</span>
			</div>
			<div class="relative w-full sm:w-64">
				<SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<Input
					bind:value={searchQuery}
					placeholder="Search accrual types..."
					class="pl-10"
				/>
			</div>
		</div>

		<!-- Main Content -->
		<div class="card-container">
			<!-- Overview Cards -->
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
				<Card class="card">
					<CardContent class="card-content p-6">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-md bg-primary/10 text-primary">
								<ClockIcon class="h-5 w-5" />
							</div>
							<div>
								<div class="text-2xl font-bold">12</div>
								<div class="text-xs text-muted-foreground">Total Types</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="card">
					<CardContent class="card-content p-6">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-md bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
								<ClockIcon class="h-5 w-5" />
							</div>
							<div>
								<div class="text-2xl font-bold">10</div>
								<div class="text-xs text-muted-foreground">Active Types</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="card">
					<CardContent class="card-content p-6">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-md bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
								<ClockIcon class="h-5 w-5" />
							</div>
							<div>
								<div class="text-2xl font-bold">2</div>
								<div class="text-xs text-muted-foreground">Inactive Types</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="card">
					<CardContent class="card-content p-6">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
								<ClockIcon class="h-5 w-5" />
							</div>
							<div>
								<div class="text-2xl font-bold">8</div>
								<div class="text-xs text-muted-foreground">With Carry Over</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<!-- Accrual Types Table -->
			<Card class="card-no-padding">
				<CardHeader class="card-header p-6">
					<CardTitle>Accrual Types Configuration</CardTitle>
				</CardHeader>
				<CardContent class="p-0">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Code</TableHead>
								<TableHead>Accrual Rate</TableHead>
								<TableHead>Max Accrual</TableHead>
								<TableHead>Carry Over</TableHead>
								<TableHead>Status</TableHead>
								<TableHead class="w-[100px]">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{#each filteredAccrualTypes as accrualType}
								<TableRow>
									<TableCell class="font-medium">
										{accrualType.name}
									</TableCell>
									<TableCell>
										<Badge variant="outline">{accrualType.code}</Badge>
									</TableCell>
									<TableCell>
										{accrualType.accrualRate} {accrualType.accrualUnit}
									</TableCell>
									<TableCell>
										{accrualType.maxAccrual ? `${accrualType.maxAccrual} hours` : 'Unlimited'}
									</TableCell>
									<TableCell>
										<Badge variant={accrualType.carryOver ? 'default' : 'secondary'}>
											{accrualType.carryOver ? 'Yes' : 'No'}
										</Badge>
									</TableCell>
									<TableCell>
										<Badge variant={accrualType.status === 'Active' ? 'default' : 'secondary'}>
											{accrualType.status}
										</Badge>
									</TableCell>
									<TableCell>
										<div class="flex items-center gap-2">
											<Button
												variant="ghost"
												size="sm"
												onclick={() => handleEdit(accrualType.id)}
												aria-label="Edit accrual type"
											>
												<EditIcon class="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="sm"
												onclick={() => handleDelete(accrualType.id)}
												aria-label="Delete accrual type"
											>
												<Trash2Icon class="h-4 w-4" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							{/each}
						</TableBody>
					</Table>

					{#if filteredAccrualTypes.length === 0}
						<div class="p-8 text-center text-muted-foreground">
							<ClockIcon class="h-12 w-12 mx-auto mb-4 opacity-50" />
							<p class="text-lg font-medium">No accrual types found</p>
							<p class="text-sm">Try adjusting your search or add a new accrual type.</p>
						</div>
					{/if}
				</CardContent>
			</Card>
		</div>
	</div>
</div>
