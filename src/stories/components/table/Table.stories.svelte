<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Table,
		TableBody,
		TableCaption,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	const { Story } = defineMeta({
		title: 'Components/Table',
		component: Table,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card'
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal'
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card'
		}
	];

	const users = [
		{
			id: 1,
			name: 'John Doe',
			email: 'john@example.com',
			role: 'Admin',
			status: 'Active'
		},
		{
			id: 2,
			name: 'Jane Smith',
			email: 'jane@example.com',
			role: 'User',
			status: 'Active'
		},
		{
			id: 3,
			name: 'Bob Johnson',
			email: 'bob@example.com',
			role: 'User',
			status: 'Inactive'
		},
		{
			id: 4,
			name: 'Alice Brown',
			email: 'alice@example.com',
			role: 'Moderator',
			status: 'Active'
		}
	];
</script>

<Story name="Default">
	<div class="w-full max-w-4xl">
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead class="w-[100px]">Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead class="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each invoices as invoice (invoice.invoice)}
					<TableRow>
						<TableCell class="font-medium">{invoice.invoice}</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell class="text-right">{invoice.totalAmount}</TableCell>
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</Story>

<Story name="With Status Badges">
	<div class="w-full max-w-4xl">
		<Table>
			<TableCaption>Invoice status with badges</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead class="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each invoices as invoice (invoice.invoice)}
					<TableRow>
						<TableCell class="font-medium">{invoice.invoice}</TableCell>
						<TableCell>
							<Badge
								variant={invoice.paymentStatus === 'Paid'
									? 'default'
									: invoice.paymentStatus === 'Pending'
										? 'secondary'
										: 'destructive'}
							>
								{invoice.paymentStatus}
							</Badge>
						</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell class="text-right">{invoice.totalAmount}</TableCell>
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</Story>

<Story name="With Actions">
	<div class="w-full max-w-5xl">
		<Table>
			<TableCaption>User management table with actions</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Role</TableHead>
					<TableHead>Status</TableHead>
					<TableHead class="text-right">Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each users as user (user.id)}
					<TableRow>
						<TableCell class="font-medium">{user.name}</TableCell>
						<TableCell>{user.email}</TableCell>
						<TableCell>{user.role}</TableCell>
						<TableCell>
							<Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
								{user.status}
							</Badge>
						</TableCell>
						<TableCell class="text-right">
							<div class="flex justify-end space-x-2">
								<Button variant="outline" size="sm">Edit</Button>
								<Button variant="destructive" size="sm">Delete</Button>
							</div>
						</TableCell>
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</Story>

<Story name="Simple">
	<div class="w-full max-w-2xl">
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Position</TableHead>
					<TableHead>Department</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>John Doe</TableCell>
					<TableCell>Software Engineer</TableCell>
					<TableCell>Engineering</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Jane Smith</TableCell>
					<TableCell>Product Manager</TableCell>
					<TableCell>Product</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Bob Johnson</TableCell>
					<TableCell>Designer</TableCell>
					<TableCell>Design</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</div>
</Story>

<Story name="Striped">
	<div class="w-full max-w-3xl">
		<Table>
			<TableCaption>Striped table example</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Product</TableHead>
					<TableHead>Category</TableHead>
					<TableHead>Price</TableHead>
					<TableHead>Stock</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow class="bg-muted/50">
					<TableCell>Laptop</TableCell>
					<TableCell>Electronics</TableCell>
					<TableCell>$999.99</TableCell>
					<TableCell>15</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Mouse</TableCell>
					<TableCell>Electronics</TableCell>
					<TableCell>$29.99</TableCell>
					<TableCell>50</TableCell>
				</TableRow>
				<TableRow class="bg-muted/50">
					<TableCell>Keyboard</TableCell>
					<TableCell>Electronics</TableCell>
					<TableCell>$79.99</TableCell>
					<TableCell>25</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Monitor</TableCell>
					<TableCell>Electronics</TableCell>
					<TableCell>$299.99</TableCell>
					<TableCell>8</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</div>
</Story>
