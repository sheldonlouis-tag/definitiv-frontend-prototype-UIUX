<script lang="ts">
	import { writable } from 'svelte/store';
	import { PageHeader } from '$lib/components/layout/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar/index.js';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card/index.js';
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
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SearchIcon from '@lucide/svelte/icons/search';
	import { mockEmployees, type Employee } from '$lib/data/index.js';
	import { PaginationContent, PaginationItem } from '$lib/components/ui/pagination/index.js';

	const allEmployees = mockEmployees;

	// Reactive stores
	const searchTerm = writable('');
	const includeTerminated = writable(false);
	const currentPage = writable(1);
	const rowsPerPage = 25;

	// Computed values
	const filteredEmployees = $derived(
		allEmployees.filter((employee) => {
			const matchesSearch =
				!$searchTerm ||
				employee.firstName.toLowerCase().includes($searchTerm.toLowerCase()) ||
				employee.lastName.toLowerCase().includes($searchTerm.toLowerCase()) ||
				employee.employeeNumber.includes($searchTerm);

			const matchesTerminated = $includeTerminated || !employee.terminationDate;

			return matchesSearch && matchesTerminated;
		})
	);

	const totalPages = $derived(Math.ceil(filteredEmployees.length / rowsPerPage));
	const startIndex = $derived(($currentPage - 1) * rowsPerPage);
	const endIndex = $derived(startIndex + rowsPerPage);
	const currentEmployees = $derived(filteredEmployees.slice(startIndex, endIndex));

	// Reset page when filters change
	$effect(() => {
		if ($includeTerminated !== undefined) {
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
			month: 'long',
			year: 'numeric'
		});
	}
</script>

<div class="page-container">
	<div class="page-content">
		<!-- Header with Action Button -->
		<div class="page-header">
			<PageHeader title="My Team" subtitle="Employees" 
			breadcrumbs={[
					{ label: 'My Team', href: '/my-team/employees' },
					{ label: 'Employees' }
				]}
			/>
			<Button>
				<PlusIcon class="h-4 w-4" />
				Add Employee
			</Button>
		</div>

		<!-- Controls Bar -->
		<div class="controls-bar">
			<div class="flex gap-2">
				<Checkbox id="include-terminated" bind:checked={$includeTerminated} />
				<Label for="include-terminated">Include Terminated Employees</Label>
			</div>

			<div class="relative w-full sm:w-64">
				<SearchIcon
					class="pointer-events-none absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 transform text-gray-400"
				/>
				<Input type="text" placeholder="Search..." class="pl-10" bind:value={$searchTerm} />
			</div>
		</div>

		<!-- Employee Table -->

		<div class="table-card">
			<Table class="table-no-padding">
			<TableHeader>
				<TableRow>
					<TableHead>Employee Number</TableHead>
					<TableHead>First Name</TableHead>
					<TableHead>Surname</TableHead>
					<TableHead>Employment Status</TableHead>
					<TableHead>Date of Birth</TableHead>
					<TableHead class="text-center">Age</TableHead>
					<TableHead>Gender</TableHead>
					<TableHead>Hired Date</TableHead>
					<TableHead>Termination Date</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each currentEmployees as employee}
					<TableRow>
						<TableCell>
							<div class="flex items-center">
								<Avatar class="mr-3 h-8 w-8">
									<AvatarImage
										src={employee.avatar}
										alt={`${employee.firstName} ${employee.lastName}`}
									/>
									<AvatarFallback>{employee.firstName[0]}{employee.lastName[0]}</AvatarFallback>
								</Avatar>
								{employee.employeeNumber}
							</div>
						</TableCell>
						<TableCell>
							<a
								href="/my-team/employees/{employee.employeeNumber}"
								class="text-sm text-blue-600 underline hover:text-blue-800"
							>
								{employee.firstName}
							</a>
						</TableCell>
						<TableCell>
							<a
								href="/my-team/employees/{employee.employeeNumber}"
								class="text-sm text-blue-600 underline hover:text-blue-800"
							>
								{employee.lastName}
							</a>
						</TableCell>
						<TableCell>{employee.employmentStatus}</TableCell>
						<TableCell>{formatDate(employee.dateOfBirth)}</TableCell>
						<TableCell class="text-center">{employee.age}</TableCell>
						<TableCell>{employee.gender}</TableCell>
						<TableCell>{formatDate(employee.hiredDate)}</TableCell>
						<TableCell
							>{employee.terminationDate ? formatDate(employee.terminationDate) : '-'}</TableCell
						>
					</TableRow>
				{/each}
			</TableBody>

			{#if totalPages > 1}
				<TableFooter>
					<TableRow>
						<TableCell colspan={9} class="p-4">
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
