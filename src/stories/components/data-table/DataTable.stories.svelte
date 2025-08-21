<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	// DataTableCheckbox component not available in current implementation

	const { Story } = defineMeta({
		title: 'Components/DataTable',
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	const data = [
		{
			id: 'm5gr84i9',
			amount: 316,
			status: 'success',
			email: 'ken99@yahoo.com'
		},
		{
			id: '3u1reuv4',
			amount: 242,
			status: 'success',
			email: 'Abe45@gmail.com'
		},
		{
			id: 'derv1ws0',
			amount: 837,
			status: 'processing',
			email: 'Monserrat44@gmail.com'
		},
		{
			id: '5kma53ae',
			amount: 874,
			status: 'success',
			email: 'Silas22@gmail.com'
		},
		{
			id: 'bhqecj4p',
			amount: 721,
			status: 'failed',
			email: 'carmella@hotmail.com'
		}
	];

	// const columns = [
	//	{
	//		accessorKey: 'status',
	//		header: 'Status'
	//	},
	//	{
	//		accessorKey: 'email',
	//		header: 'Email'
	//	},
	//	{
	//		accessorKey: 'amount',
	//		header: 'Amount',
	//		cell: ({ row }: { row: Record<string, unknown> }) => {
	//			const amount = parseFloat(row.getValue('amount'));
	//			const formatted = new Intl.NumberFormat('en-US', {
	//				style: 'currency',
	//				currency: 'USD'
	//			}).format(amount);
	//			return formatted;
	//		}
	//	}
	// ];
</script>

<Story name="Default">
	<div class="w-full max-w-4xl">
		<div class="rounded-md border">
			<table class="w-full">
				<thead>
					<tr class="border-b">
						<th class="h-12 px-4 text-left align-middle font-medium">ID</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Status</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Email</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Amount</th>
					</tr>
				</thead>
				<tbody>
					{#each data as row (row.id)}
						<tr class="border-b">
							<td class="p-4 align-middle">{row.id}</td>
							<td class="p-4 align-middle">
								<span
									class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
									{row.status === 'success'
										? 'bg-green-100 text-green-800'
										: row.status === 'processing'
											? 'bg-yellow-100 text-yellow-800'
											: 'bg-red-100 text-red-800'}"
								>
									{row.status}
								</span>
							</td>
							<td class="p-4 align-middle">{row.email}</td>
							<td class="p-4 align-middle">${row.amount}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</Story>

<Story name="Simple Table">
	<div class="w-full max-w-2xl">
		<div class="rounded-md border">
			<table class="w-full">
				<thead>
					<tr class="border-b">
						<th class="h-12 px-4 text-left align-middle font-medium">ID</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Status</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Email</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Amount</th>
					</tr>
				</thead>
				<tbody>
					{#each data as row (row.id)}
						<tr class="border-b">
							<td class="p-4 align-middle">{row.id}</td>
							<td class="p-4 align-middle">
								<span
									class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
									{row.status === 'success'
										? 'bg-green-100 text-green-800'
										: row.status === 'processing'
											? 'bg-yellow-100 text-yellow-800'
											: 'bg-red-100 text-red-800'}"
								>
									{row.status}
								</span>
							</td>
							<td class="p-4 align-middle">{row.email}</td>
							<td class="p-4 align-middle">${row.amount}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</Story>

<Story name="With Pagination">
	<div class="w-full max-w-4xl space-y-4">
		<div class="rounded-md border">
			<table class="w-full">
				<thead>
					<tr class="border-b">
						<th class="h-12 px-4 text-left align-middle font-medium">ID</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Status</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Email</th>
						<th class="h-12 px-4 text-left align-middle font-medium">Amount</th>
					</tr>
				</thead>
				<tbody>
					{#each data.slice(0, 3) as row (row.id)}
						<tr class="border-b">
							<td class="p-4 align-middle">{row.id}</td>
							<td class="p-4 align-middle">
								<span
									class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
									{row.status === 'success'
										? 'bg-green-100 text-green-800'
										: row.status === 'processing'
											? 'bg-yellow-100 text-yellow-800'
											: 'bg-red-100 text-red-800'}"
								>
									{row.status}
								</span>
							</td>
							<td class="p-4 align-middle">{row.email}</td>
							<td class="p-4 align-middle">${row.amount}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<div class="flex items-center justify-between">
			<div class="text-sm text-muted-foreground">Showing 1 to 3 of 5 results</div>
			<div class="flex items-center space-x-2">
				<button class="rounded border px-3 py-1 text-sm disabled:opacity-50" disabled>
					Previous
				</button>
				<button class="rounded border px-3 py-1 text-sm"> Next </button>
			</div>
		</div>
	</div>
</Story>
