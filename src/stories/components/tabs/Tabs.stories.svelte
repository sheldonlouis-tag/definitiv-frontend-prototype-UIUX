<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	const { Story } = defineMeta({
		title: 'Components/Tabs',
		component: Tabs,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			value: {
				control: { type: 'text' },
				description: 'The active tab value'
			},
			orientation: {
				control: { type: 'select' },
				options: ['horizontal', 'vertical'],
				description: 'The orientation of the tabs'
			}
		}
	});
</script>

<Story name="Default">
	<Tabs value="account" class="w-[400px]">
		<TabsList class="grid w-full grid-cols-2">
			<TabsTrigger value="account">Account</TabsTrigger>
			<TabsTrigger value="password">Password</TabsTrigger>
		</TabsList>
		<TabsContent value="account" class="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>Account</CardTitle>
					<CardDescription>
						Make changes to your account here. Click save when you're done.
					</CardDescription>
				</CardHeader>
				<CardContent class="space-y-2">
					<div class="space-y-1">
						<Label for="name">Name</Label>
						<Input id="name" value="Pedro Duarte" />
					</div>
					<div class="space-y-1">
						<Label for="username">Username</Label>
						<Input id="username" value="@peduarte" />
					</div>
				</CardContent>
				<CardFooter>
					<Button>Save changes</Button>
				</CardFooter>
			</Card>
		</TabsContent>
		<TabsContent value="password" class="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle>Password</CardTitle>
					<CardDescription>
						Change your password here. After saving, you'll be logged out.
					</CardDescription>
				</CardHeader>
				<CardContent class="space-y-2">
					<div class="space-y-1">
						<Label for="current">Current password</Label>
						<Input id="current" type="password" />
					</div>
					<div class="space-y-1">
						<Label for="new">New password</Label>
						<Input id="new" type="password" />
					</div>
				</CardContent>
				<CardFooter>
					<Button>Save password</Button>
				</CardFooter>
			</Card>
		</TabsContent>
	</Tabs>
</Story>

<Story name="Simple">
	<Tabs value="tab1" class="w-[400px]">
		<TabsList>
			<TabsTrigger value="tab1">Tab 1</TabsTrigger>
			<TabsTrigger value="tab2">Tab 2</TabsTrigger>
			<TabsTrigger value="tab3">Tab 3</TabsTrigger>
		</TabsList>
		<TabsContent value="tab1" class="mt-4">
			<div class="rounded-lg border p-4">
				<h3 class="mb-2 text-lg font-semibold">Tab 1 Content</h3>
				<p class="text-muted-foreground">
					This is the content for the first tab. You can put any content here.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="tab2" class="mt-4">
			<div class="rounded-lg border p-4">
				<h3 class="mb-2 text-lg font-semibold">Tab 2 Content</h3>
				<p class="text-muted-foreground">
					This is the content for the second tab. Different content can be displayed here.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="tab3" class="mt-4">
			<div class="rounded-lg border p-4">
				<h3 class="mb-2 text-lg font-semibold">Tab 3 Content</h3>
				<p class="text-muted-foreground">
					This is the content for the third tab. Each tab can have unique content.
				</p>
			</div>
		</TabsContent>
	</Tabs>
</Story>

<Story name="Vertical">
	<Tabs orientation="vertical" value="overview" class="flex h-[400px] w-[600px]">
		<TabsList class="flex h-full w-48 flex-col">
			<TabsTrigger value="overview" class="w-full">Overview</TabsTrigger>
			<TabsTrigger value="analytics" class="w-full">Analytics</TabsTrigger>
			<TabsTrigger value="reports" class="w-full">Reports</TabsTrigger>
			<TabsTrigger value="notifications" class="w-full">Notifications</TabsTrigger>
		</TabsList>
		<div class="ml-4 flex-1">
			<TabsContent value="overview" class="h-full">
				<Card class="h-full">
					<CardHeader>
						<CardTitle>Overview</CardTitle>
						<CardDescription>Get a high-level view of your data and metrics.</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="space-y-4">
							<div class="grid grid-cols-2 gap-4">
								<div class="rounded-lg border p-4">
									<div class="text-2xl font-bold">1,234</div>
									<div class="text-sm text-muted-foreground">Total Users</div>
								</div>
								<div class="rounded-lg border p-4">
									<div class="text-2xl font-bold">567</div>
									<div class="text-sm text-muted-foreground">Active Sessions</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="analytics" class="h-full">
				<Card class="h-full">
					<CardHeader>
						<CardTitle>Analytics</CardTitle>
						<CardDescription>Detailed analytics and performance metrics.</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="flex h-48 items-center justify-center rounded-lg bg-muted">
							<span class="text-muted-foreground">Analytics Chart Placeholder</span>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="reports" class="h-full">
				<Card class="h-full">
					<CardHeader>
						<CardTitle>Reports</CardTitle>
						<CardDescription>Generate and view detailed reports.</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="space-y-2">
							<div class="rounded-lg border p-3">Monthly Report - January 2024</div>
							<div class="rounded-lg border p-3">Weekly Summary - Week 4</div>
							<div class="rounded-lg border p-3">User Activity Report</div>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="notifications" class="h-full">
				<Card class="h-full">
					<CardHeader>
						<CardTitle>Notifications</CardTitle>
						<CardDescription>Manage your notification preferences.</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="space-y-4">
							<div class="flex items-center justify-between">
								<span>Email notifications</span>
								<input type="checkbox" checked />
							</div>
							<div class="flex items-center justify-between">
								<span>Push notifications</span>
								<input type="checkbox" />
							</div>
							<div class="flex items-center justify-between">
								<span>SMS notifications</span>
								<input type="checkbox" />
							</div>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
		</div>
	</Tabs>
</Story>

<Story name="Many Tabs">
	<Tabs value="tab1" class="w-[600px]">
		<TabsList class="grid w-full grid-cols-6">
			<TabsTrigger value="tab1">Home</TabsTrigger>
			<TabsTrigger value="tab2">About</TabsTrigger>
			<TabsTrigger value="tab3">Services</TabsTrigger>
			<TabsTrigger value="tab4">Portfolio</TabsTrigger>
			<TabsTrigger value="tab5">Blog</TabsTrigger>
			<TabsTrigger value="tab6">Contact</TabsTrigger>
		</TabsList>
		<TabsContent value="tab1" class="mt-4">
			<div class="rounded-lg border p-6">
				<h2 class="mb-3 text-xl font-semibold">Welcome Home</h2>
				<p class="text-muted-foreground">
					This is the home page content. Here you can find an overview of everything we offer.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="tab2" class="mt-4">
			<div class="rounded-lg border p-6">
				<h2 class="mb-3 text-xl font-semibold">About Us</h2>
				<p class="text-muted-foreground">
					Learn more about our company, mission, and the team behind our success.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="tab3" class="mt-4">
			<div class="rounded-lg border p-6">
				<h2 class="mb-3 text-xl font-semibold">Our Services</h2>
				<p class="text-muted-foreground">
					Discover the wide range of services we provide to help your business grow.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="tab4" class="mt-4">
			<div class="rounded-lg border p-6">
				<h2 class="mb-3 text-xl font-semibold">Portfolio</h2>
				<p class="text-muted-foreground">
					Check out our latest projects and see what we've accomplished for our clients.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="tab5" class="mt-4">
			<div class="rounded-lg border p-6">
				<h2 class="mb-3 text-xl font-semibold">Blog</h2>
				<p class="text-muted-foreground">
					Read our latest articles, insights, and industry news on our blog.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="tab6" class="mt-4">
			<div class="rounded-lg border p-6">
				<h2 class="mb-3 text-xl font-semibold">Contact Us</h2>
				<p class="text-muted-foreground">
					Get in touch with us. We'd love to hear from you and discuss your needs.
				</p>
			</div>
		</TabsContent>
	</Tabs>
</Story>
