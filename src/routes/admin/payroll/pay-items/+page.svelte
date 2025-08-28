<script lang="ts">
	import { PageHeader } from '$lib/components/layout/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '$lib/components/ui/table/index.js';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select/index.js';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SearchIcon from '@lucide/svelte/icons/search';
	import EditIcon from '@lucide/svelte/icons/edit';
	import Trash2Icon from '@lucide/svelte/icons/trash-2';
	import CoinsIcon from '@lucide/svelte/icons/coins';
	import FilterIcon from '@lucide/svelte/icons/filter';

	// Sample pay items data
	const payItems = [
		{
			id: 1,
			name: 'Base Hourly Rate',
			code: 'BASE_HOUR',
			type: 'Earnings',
			category: 'Regular Time',
			rate: 25.50,
			calculation: 'Hourly',
			taxable: true,
			superIncluded: true,
			status: 'Active'
		},
		{
			id: 2,
			name: 'Overtime 1.5x',
			code: 'OT_1.5',
			type: 'Earnings',
			category: 'Overtime',
			rate: 38.25,
			calculation: 'Hourly',
			taxable: true,
			superIncluded: true,
			status: 'Active'
		},
		{
			id: 3,
			name: 'Overtime 2.0x',
			code: 'OT_2.0',
			type: 'Earnings',
			category: 'Overtime',
			rate: 51.00,
			calculation: 'Hourly',
			taxable: true,
			superIncluded: true,
			status: 'Active'
		},
		{
			id: 4,
			name: 'Annual Leave Loading',
			code: 'AL_LOAD',
			type: 'Earnings',
			category: 'Leave Loading',
			rate: 17.5,
			calculation: 'Percentage',
			taxable: true,
			superIncluded: false,
			status: 'Active'
		},
		{
			id: 5,
			name: 'Superannuation',
			code: 'SUPER',
			type: 'Benefits',
			category: 'Superannuation',
			rate: 11.0,
			calculation: 'Percentage',
			taxable: false,
			superIncluded: false,
			status: 'Active'
		},
		{
			id: 6,
			name: 'Income Tax PAYG',
			code: 'TAX_PAYG',
			type: 'Deductions',
			category: 'Tax',
			rate: null,
			calculation: 'ATO Scale',
			taxable: false,
			superIncluded: false,
			status: 'Active'
		},
		{
			id: 7,
			name: 'Union Fees',
			code: 'UNION',
			type: 'Deductions',
			category: 'Union',
			rate: 15.50,
			calculation: 'Fixed',
			taxable: false,
			superIncluded: false,
			status: 'Active'
		},
		{
			id: 8,
			name: 'Car Allowance',
			code: 'CAR_ALLOW',
			type: 'Allowances',
			category: 'Vehicle',
			rate: 120.00,
			calculation: 'Fixed',
			taxable: true,
			superIncluded: true,
			status: 'Inactive'
		}
	];

	let searchQuery = '';
	let filterType = 'all';

	// Filter pay items based on search and type filter
	$: filteredPayItems = payItems.filter(item => {
		const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.category.toLowerCase().includes(searchQuery.toLowerCase());
		
		const matchesFilter = filterType === 'all' || item.type.toLowerCase() === filterType.toLowerCase();
		
		return matchesSearch && matchesFilter;
	});

	function handleAddNew() {
		console.log('Add new pay item');
	}

	function handleEdit(id: number) {
		console.log('Edit pay item:', id);
	}

	function handleDelete(id: number) {
		console.log('Delete pay item:', id);
	}

	function formatRate(item: any) {
		if (!item.rate) return 'ATO Scale';
		
		switch (item.calculation) {
			case 'Hourly':
				return `$${item.rate.toFixed(2)}/hr`;
			case 'Percentage':
				return `${item.rate}%`;
			case 'Fixed':
				return `$${item.rate.toFixed(2)}`;
			default:
				return item.rate.toString();
		}
	}
</script>

<div class="page-container">
	<div class="page-content">
		<!-- Header Section -->
		<div class="page-header">
			<PageHeader 
				title="Pay Items" 
				subtitle="Configure pay items, rates, and calculations"
				breadcrumbs={[
					{ label: 'Admin', href: '/admin' },
					{ label: 'Payroll', href: '/admin/payroll' },
					{ label: 'Pay Items' }
				]}
			/>
			<Button onclick={handleAddNew}>
				<PlusIcon class="h-4 w-4" />
				Add Pay Item
			</Button>
		</div>

		<!-- Controls Bar -->
		<div class="controls-bar">
			<div class="control-group">
				<span class="text-sm text-muted-foreground">
					{filteredPayItems.length} pay item{filteredPayItems.length !== 1 ? 's' : ''}
				</span>
				<Select bind:value={filterType}>
					<SelectTrigger class="w-32">
						<FilterIcon class="h-4 w-4" />
						{#if filterType === 'all'}All Types{:else if filterType === 'earnings'}Earnings{:else if filterType === 'deductions'}Deductions{:else if filterType === 'benefits'}Benefits{:else if filterType === 'allowances'}Allowances{:else}Filter{/if}
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Types</SelectItem>
						<SelectItem value="earnings">Earnings</SelectItem>
						<SelectItem value="deductions">Deductions</SelectItem>
						<SelectItem value="benefits">Benefits</SelectItem>
						<SelectItem value="allowances">Allowances</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div class="relative w-full sm:w-64">
				<SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<Input
					bind:value={searchQuery}
					placeholder="Search pay items..."
					class="pl-10"
				/>
			</div>
		</div>

		<!-- Main Content -->
		<div class="card-container">
			<!-- Overview Cards -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
				<Card class="card">
					<CardContent class="card-content p-6">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-md bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
								<CoinsIcon class="h-5 w-5" />
							</div>
							<div>
								<div class="text-2xl font-bold">15</div>
								<div class="text-xs text-muted-foreground">Earnings</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="card">
					<CardContent class="card-content p-6">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-md bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400">
								<CoinsIcon class="h-5 w-5" />
							</div>
							<div>
								<div class="text-2xl font-bold">12</div>
								<div class="text-xs text-muted-foreground">Deductions</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="card">
					<CardContent class="card-content p-6">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
								<CoinsIcon class="h-5 w-5" />
							</div>
							<div>
								<div class="text-2xl font-bold">8</div>
								<div class="text-xs text-muted-foreground">Benefits</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="card">
					<CardContent class="card-content p-6">
						<div class="flex items-center gap-3">
							<div class="p-2 rounded-md bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
								<CoinsIcon class="h-5 w-5" />
							</div>
							<div>
								<div class="text-2xl font-bold">10</div>
								<div class="text-xs text-muted-foreground">Allowances</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<!-- Pay Items Table -->
			<Card class="card-no-padding">
				<CardHeader class="card-header p-6">
					<CardTitle>Pay Items Configuration</CardTitle>
				</CardHeader>
				<CardContent class="p-0">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Code</TableHead>
								<TableHead>Type</TableHead>
								<TableHead>Category</TableHead>
								<TableHead>Rate</TableHead>
								<TableHead>Taxable</TableHead>
								<TableHead>Super</TableHead>
								<TableHead>Status</TableHead>
								<TableHead class="w-[100px]">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{#each filteredPayItems as payItem}
								<TableRow>
									<TableCell class="font-medium">
										{payItem.name}
									</TableCell>
									<TableCell>
										<Badge variant="outline">{payItem.code}</Badge>
									</TableCell>
									<TableCell>
										<Badge 
											variant={payItem.type === 'Earnings' ? 'default' : 
													payItem.type === 'Deductions' ? 'destructive' : 
													payItem.type === 'Benefits' ? 'secondary' : 'outline'}
										>
											{payItem.type}
										</Badge>
									</TableCell>
									<TableCell class="text-sm">
										{payItem.category}
									</TableCell>
									<TableCell class="font-mono text-sm">
										{formatRate(payItem)}
									</TableCell>
									<TableCell>
										<Badge variant={payItem.taxable ? 'default' : 'secondary'}>
											{payItem.taxable ? 'Yes' : 'No'}
										</Badge>
									</TableCell>
									<TableCell>
										<Badge variant={payItem.superIncluded ? 'default' : 'secondary'}>
											{payItem.superIncluded ? 'Yes' : 'No'}
										</Badge>
									</TableCell>
									<TableCell>
										<Badge variant={payItem.status === 'Active' ? 'default' : 'secondary'}>
											{payItem.status}
										</Badge>
									</TableCell>
									<TableCell>
										<div class="flex items-center gap-2">
											<Button
												variant="ghost"
												size="sm"
												onclick={() => handleEdit(payItem.id)}
												aria-label="Edit pay item"
											>
												<EditIcon class="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="sm"
												onclick={() => handleDelete(payItem.id)}
												aria-label="Delete pay item"
											>
												<Trash2Icon class="h-4 w-4" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							{/each}
						</TableBody>
					</Table>

					{#if filteredPayItems.length === 0}
						<div class="p-8 text-center text-muted-foreground">
							<CoinsIcon class="h-12 w-12 mx-auto mb-4 opacity-50" />
							<p class="text-lg font-medium">No pay items found</p>
							<p class="text-sm">Try adjusting your search or filter, or add a new pay item.</p>
						</div>
					{/if}
				</CardContent>
			</Card>
		</div>
	</div>
</div>
