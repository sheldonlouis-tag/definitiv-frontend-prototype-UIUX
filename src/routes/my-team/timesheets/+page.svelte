<script lang="ts">
	import { writable } from 'svelte/store';
	import { PageHeader } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import {
		Table,
		TableBody,
		TableCaption,
		TableCell,
		TableHead,
		TableHeader,
		TableRow,
		TableFooter
	} from '$lib/components/ui/table/index.js';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger
	} from '$lib/components/ui/select/index.js';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SearchIcon from '@lucide/svelte/icons/search';
	import DownloadIcon from '@lucide/svelte/icons/download';
	import { mockTimesheets, type Timesheet } from '$lib/data/index.js';
	import { PaginationContent, PaginationItem } from '$lib/components/ui/pagination/index.js';

	const allTimesheets = mockTimesheets;

	// Reactive stores
	const searchTerm = writable('');
	const statusFilter = writable('all');
	const currentPage = writable(1);
	const rowsPerPage = 25;

	// Computed values
	const filteredTimesheets = $derived(
		allTimesheets.filter((timesheet) => {
			const matchesSearch =
				!$searchTerm ||
				timesheet.employeeName.toLowerCase().includes($searchTerm.toLowerCase()) ||
				timesheet.employeeNumber.includes($searchTerm) ||
				timesheet.department.toLowerCase().includes($searchTerm.toLowerCase());

			const matchesStatus = $statusFilter === 'all' || timesheet.status === $statusFilter;

			return matchesSearch && matchesStatus;
		})
	);

	const totalPages = $derived(Math.ceil(filteredTimesheets.length / rowsPerPage));
	const startIndex = $derived(($currentPage - 1) * rowsPerPage);
	const endIndex = $derived(startIndex + rowsPerPage);
	const currentTimesheets = $derived(filteredTimesheets.slice(startIndex, endIndex));

	// Reset page when filters change
	$effect(() => {
		if ($statusFilter !== undefined) {
			currentPage.set(1);
		}
	});

	function handlePageChange(page: number) {
		currentPage.set(page);
	}

	function getPageNumbers() {
		const pages = [];
		const maxVisible = 5;
		const start = Math.max(1, $currentPage - Math.floor(maxVisible / 2));
		const end = Math.min(totalPages, start + maxVisible - 1);

		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		return pages;
	}

	function formatDate(date: Date) {
		return date.toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	}

	function formatWeekRange(startDate: Date, endDate: Date) {
		return `${formatDate(startDate)} - ${formatDate(endDate)}`;
	}

	function getStatusVariant(status: string) {
		switch (status) {
			case 'Approved':
				return 'default'; // Green-ish primary color for approved
			case 'Submitted':
				return 'outline';
			case 'Draft':
				return 'secondary';
			case 'Rejected':
				return 'destructive';
			default:
				return 'default';
		}
	}
</script>

<div class="page-container">
	<div class="page-content">
		<!-- Header with Action Button -->
		<div class="page-header">
			<PageHeader 
				title="My Team" 
				subtitle="Timesheets"
				breadcrumbs={[
					{ label: 'My Team', href: '/my-team' },
					{ label: 'Timesheets' }
				]}
			/>
			<div class="control-group">
				<Button variant="outline">
					<DownloadIcon class="h-4 w-4" />
					Export
				</Button>
				<Button>
					<PlusIcon class="h-4 w-4" />
					Add Timesheet
				</Button>
			</div>
		</div>

		<!-- Controls Bar -->
		<div class="controls-bar">
			<div class="control-group">
				<div class="flex items-center space-x-2">
					<Label for="status-filter" class="text-sm">Filter by Status:</Label>
					<Select type="single" bind:value={$statusFilter}>
						<SelectTrigger id="status-filter" class="w-40">
							{$statusFilter === 'all' ? 'All Statuses' : $statusFilter || 'All Statuses'}
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Statuses</SelectItem>
							<SelectItem value="Draft">Draft</SelectItem>
							<SelectItem value="Submitted">Submitted</SelectItem>
							<SelectItem value="Approved">Approved</SelectItem>
							<SelectItem value="Rejected">Rejected</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div class="relative w-full sm:w-64">
				<SearchIcon
					class="pointer-events-none absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 transform text-gray-400"
				/>
				<Input type="text" placeholder="Search timesheets..." class="pl-10" bind:value={$searchTerm} />
			</div>
		</div>

		<!-- Timesheets Table -->
		<div class="table-card">
			<Table class="table-no-padding">
				<TableHeader>
					<TableRow>
						<TableHead>Employee</TableHead>
						<TableHead>Employee Number</TableHead>
						<TableHead>Department</TableHead>
						<TableHead>Week Period</TableHead>
						<TableHead class="text-center">Regular Hours</TableHead>
						<TableHead class="text-center">Overtime Hours</TableHead>
						<TableHead class="text-center">Total Hours</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Last Modified</TableHead>
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each currentTimesheets as timesheet}
						<TableRow>
							<TableCell class="font-medium">
								<a
									href="/my-team/employees/{timesheet.employeeId}"
									class="text-sm text-blue-600 underline hover:text-blue-800"
								>
									{timesheet.employeeName}
								</a>
							</TableCell>
							<TableCell>{timesheet.employeeNumber}</TableCell>
							<TableCell>{timesheet.department}</TableCell>
							<TableCell class="font-mono text-sm">
								{formatWeekRange(timesheet.weekStarting, timesheet.weekEnding)}
							</TableCell>
							<TableCell class="text-center font-mono">{timesheet.regularHours}</TableCell>
							<TableCell class="text-center font-mono">
								{timesheet.overtimeHours > 0 ? timesheet.overtimeHours : '-'}
							</TableCell>
							<TableCell class="text-center font-mono font-semibold">{timesheet.totalHours}</TableCell>
							<TableCell>
								<Badge variant={getStatusVariant(timesheet.status)}>
									{timesheet.status}
								</Badge>
							</TableCell>
							<TableCell class="text-sm text-muted-foreground">
								{formatDate(timesheet.lastModified)}
							</TableCell>
							<TableCell>
								<Button variant="ghost" size="sm">
									View
								</Button>
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>

				{#if totalPages > 1}
					<TableFooter>
						<TableRow>
							<TableCell colspan={10} class="p-4">
								<div class="flex items-center justify-between">
									<PaginationContent>
										<PaginationItem>
											<button
												class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
												disabled={$currentPage === 1}
												onclick={() => handlePageChange($currentPage - 1)}
											>
												Previous
											</button>
										</PaginationItem>

										{#each getPageNumbers() as pageNum}
											<PaginationItem>
												<button
													class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {pageNum ===
													$currentPage
														? 'bg-primary text-primary-foreground shadow'
														: ''}"
													onclick={() => handlePageChange(pageNum)}
												>
													{pageNum}
												</button>
											</PaginationItem>
										{/each}

										{#if totalPages > 5 && $currentPage < totalPages - 2}
											<PaginationItem>
												<span
													class="inline-flex h-10 items-center justify-center px-4 text-sm text-muted-foreground"
												>
													...
												</span>
											</PaginationItem>
											<PaginationItem>
												<button
													class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
													onclick={() => handlePageChange(totalPages)}
												>
													{totalPages}
												</button>
											</PaginationItem>
										{/if}

										<PaginationItem>
											<button
												class="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
												disabled={$currentPage === totalPages}
												onclick={() => handlePageChange($currentPage + 1)}
											>
												Next
											</button>
										</PaginationItem>
									</PaginationContent>

									<div class="text-sm text-muted-foreground">
										Page {$currentPage} of {totalPages}
									</div>
								</div>
							</TableCell>
						</TableRow>
					</TableFooter>
				{/if}
			</Table>
		</div>
	</div>
</div>
