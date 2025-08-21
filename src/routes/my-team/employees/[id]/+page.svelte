<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.js';
	import { PageHeader } from '$lib/components/layout/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar/index.js';
	import { mockEmployees, type Employee } from '$lib/data/index.js';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import ClockIcon from '@lucide/svelte/icons/clock';
	import DollarSignIcon from '@lucide/svelte/icons/dollar-sign';
	import BuildingIcon from '@lucide/svelte/icons/building';
	import MoreHorizontalIcon from '@lucide/svelte/icons/more-horizontal';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import MapIcon from '@lucide/svelte/icons/map';

	// Get the employee ID from the URL
	$: employeeId = $page.params.id;
	
	// Find the employee from mock data
	$: mockEmployee = mockEmployees.find(emp => emp.employeeNumber === employeeId);
	
	function formatDate(date: Date) {
		return date.toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: '2-digit'
		});
	}
	
	function goBack() {
		goto('/my-team');
	}
</script>

<div class="page-container">
	<div class="page-content">
		<!-- Header -->
		<div class="page-header-with-breadcrumbs">
			<PageHeader 
				title="Employee Details" 
				subtitle={mockEmployee?.firstName + ' ' + mockEmployee?.lastName}
				breadcrumbs={[
					{ label: 'My Team', href: '/my-team/' },
					{ label: 'Employees', href: '/my-team/employees' },
					{ label: mockEmployee ? mockEmployee.firstName + ' ' + mockEmployee.lastName : 'Employee' }
				]}
			/>
		</div>
		
		<!-- Main Content - 2/3 + 1/3 Layout -->
		<div class="two-column-layout">
			<!-- Left Column - 2/3 width -->
			<div class="column-wide">
				<div class="card-container">
					<!-- Employee Details Card -->
					<Card class="card">
						<CardHeader class="card-header">
							<CardTitle class="text-xl font-semibold text-gray-900">Employee details</CardTitle>
						</CardHeader>
						<CardContent class="card-content">
							{#if mockEmployee}
								<div class="form-grid-2">
									<!-- Row 1: Employee ID + Title | First name -->
									<div class="form-row">
										<div class="form-field flex-1">
											<Label for="employeeId">Employee ID</Label>
											<Input id="employeeId" value={mockEmployee.employeeNumber} readonly />
										</div>
										<div class="form-field flex-1">
											<Label for="title">Title</Label>
											<Select type="single" value="Ms">
												<SelectTrigger class="w-full">Ms</SelectTrigger>
												<SelectContent>
													<SelectItem value="Mr">Mr</SelectItem>
													<SelectItem value="Ms">Ms</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>
									<div class="form-field">
										<Label for="firstName">First name</Label>
										<Input id="firstName" value={mockEmployee.firstName} />
									</div>

									<!-- Row 2: Middle name | Surname -->
									<div class="form-field">
										<Label for="middleName">Middle name</Label>
										<Input id="middleName" placeholder=" " />
									</div>
									<div class="form-field">
										<Label for="surname">Surname</Label>
										<Input id="surname" value={mockEmployee.lastName} />
									</div>

									<!-- Row 3: Preferred name | Date of birth -->
									<div class="form-field">
										<Label for="preferredName">Preferred name</Label>
										<Input id="preferredName" placeholder=" " />
									</div>
									<div class="form-field">
										<Label for="dob">Date of birth</Label>
										<Input id="dob" type="date" value={formatDate(mockEmployee.dateOfBirth)} />
									</div>

									<!-- Row 4: Gender | (empty) -->
									<div class="form-field">
										<Label for="gender">Gender</Label>
										<Select type="single" value={mockEmployee.gender}>
											<SelectTrigger class="w-full">{mockEmployee.gender}</SelectTrigger>
											<SelectContent>
												<SelectItem value="Male">Male</SelectItem>
												<SelectItem value="Female">Female</SelectItem>
												<SelectItem value="Other">Other</SelectItem>
												<SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div></div>
								</div>
							{/if}
						</CardContent>
					</Card>

					<!-- Home Address Card -->
					<Card class="card">
						<CardHeader class="card-header">
							<CardTitle class="text-xl font-semibold text-gray-900">Home address</CardTitle>
						</CardHeader>
						<CardContent class="card-content">
							{#if mockEmployee}
								<!-- Map placeholder -->
								<div class="flex-col bg-gray-200 rounded-xl h-60 flex items-center justify-center">
									<MapIcon class="w-6 h-6" />
									<p class="text-sm text-gray-500">Map placeholder</p>
									<Button variant="link" class="text-blue-600 p-0 h-auto">View on map</Button>
								</div>
								
								
								<!-- Address input -->
								<div class="form-row flex gap-2 items-end">
									<div class="form-field flex-1">
										<Label for="address">Home Address</Label>
										<Input id="address" value={mockEmployee.address} />
									</div>
									<Button class="">Enter</Button>
								</div>
							{/if}
						</CardContent>
					</Card>
				</div>
			</div>

			<!-- Right Column - 1/3 width -->
			<div class="column-sidebar">
				<div class="card-container">
					<!-- Employee Profile Card -->
					{#if mockEmployee}
						<Card class="card">
							<div class="flex flex-col items-center text-center space-y-4 p-6">
								<!-- Avatar -->
								<div class="relative">
									<Avatar class="w-30 h-30 border-2 border-[#007373]">
										<AvatarImage src={mockEmployee.avatar} alt={`${mockEmployee.firstName} ${mockEmployee.lastName}`} />
										<AvatarFallback class="text-2xl">{mockEmployee.firstName[0]}{mockEmployee.lastName[0]}</AvatarFallback>
									</Avatar>
								</div>
								
								<!-- Name -->
								<div>
									<h2 class="text-2xl font-normal text-[#1b232a] leading-9 tracking-tight">
										{mockEmployee.firstName} {mockEmployee.lastName}
									</h2>
								</div>
								
								<!-- Employee Details -->
								<div class="flex gap-4 text-[#1b232a] text-base">
									<div>
										<span>Employee ID: </span>
										<span class="font-extrabold">{mockEmployee.employeeNumber}</span>
									</div>
									<div>
										<span>Started: </span>
										<span class="font-extrabold">{formatDate(mockEmployee.hiredDate)}</span>
									</div>
								</div>
								
								<!-- Status Pills -->
								<div class="flex gap-3">
									<Badge class="bg-[#007086] text-white px-2 py-1 rounded-full text-xs">
										Project
									</Badge>
									<Badge class="bg-[#49702b] text-white px-2 py-1 rounded-full text-xs">
										Role
									</Badge>
									<Badge class="bg-[#a00001] text-white px-2 py-1 rounded-full text-xs">
										Location
									</Badge>
								</div>
								
								<!-- Action Menu -->
								<div class="w-full space-y-0.5">
									<div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
										<div class="flex items-center gap-2">
											<CalendarIcon class="w-4 h-4 text-[#5b646e]" />
											<span class="text-sm text-[#1b232a]">View accrual balances</span>
										</div>
										<ChevronRightIcon class="w-4 h-4 text-[#5b646e]" />
									</div>
									
									<div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
										<div class="flex items-center gap-2">
											<FileTextIcon class="w-4 h-4 text-[#5b646e]" />
											<span class="text-sm text-[#1b232a]">View payslips</span>
										</div>
										<ChevronRightIcon class="w-4 h-4 text-[#5b646e]" />
									</div>
									
									<div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
										<div class="flex items-center gap-2">
											<ClockIcon class="w-4 h-4 text-[#5b646e]" />
											<span class="text-sm text-[#1b232a]">View work schedule</span>
										</div>
										<ChevronRightIcon class="w-4 h-4 text-[#5b646e]" />
									</div>
									
									<div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
										<div class="flex items-center gap-2">
											<DollarSignIcon class="w-4 h-4 text-[#5b646e]" />
											<span class="text-sm text-[#1b232a]">View pay calendar</span>
										</div>
										<ChevronRightIcon class="w-4 h-4 text-[#5b646e]" />
									</div>
									
									<div class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
										<div class="flex items-center gap-2">
											<BuildingIcon class="w-4 h-4 text-[#5b646e]" />
											<span class="text-sm text-[#1b232a]">View cost centres</span>
										</div>
										<ChevronRightIcon class="w-4 h-4 text-[#5b646e]" />
									</div>
								</div>
							</div>
						</Card>
					{/if}

					<!-- Contact Details Card -->
					<Card class="card">
						<CardContent class="card-no-padding">
							<!-- Contact Details Section -->
							<div class="p-4">
								<div class="flex items-center justify-between mb-4">
									<CardTitle class="text-xl font-semibold text-gray-900">Contact details</CardTitle>
									<Button variant="ghost" size="icon" class="h-11 w-11">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
										</svg>
									</Button>
								</div>
								
								{#if mockEmployee}
									<div class="form-field-group">
										<div class="form-field">
											<Label for="email">Email address</Label>
											<Input id="email" value={mockEmployee.email} readonly />
										</div>
										<div class="form-field">
											<Label for="mobile">Mobile phone</Label>
											<Input id="mobile" value={mockEmployee.phone} readonly />
										</div>
										<div class="form-field">
											<Label for="homePhone">Home phone</Label>
											<Input id="homePhone" value="08 9876 5432" readonly />
										</div>
									</div>
								{/if}
							</div>

							<!-- Emergency Contacts Section -->
							<div class="bg-gray-50 p-8">
								<div class="flex items-center justify-between mb-4">
									<CardTitle class="text-xl font-semibold text-gray-900">Emergency contacts</CardTitle>
									<Button variant="ghost" size="icon" class="h-11 w-11">
										<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
										</svg>
									</Button>
								</div>
								
								<div class="space-y-2">
									<Badge variant="secondary" class="bg-teal-600 text-white px-4 py-2 rounded-full">
										Johnny Boyd, Father 01345 875 342
									</Badge>
									<Badge variant="secondary" class="bg-teal-600 text-white px-4 py-2 rounded-full">
										Laura Boyd, Mother 01345 875 342
									</Badge>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	</div>
</div>
