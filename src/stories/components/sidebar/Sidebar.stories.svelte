<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Sidebar,
		SidebarContent,
		SidebarFooter,
		SidebarGroup,
		SidebarGroupLabel,
		SidebarHeader,
		SidebarInput,
		SidebarInset,
		SidebarMenu,
		SidebarMenuBadge,
		SidebarMenuButton,
		SidebarMenuItem,
		SidebarMenuSub,
		SidebarMenuSubButton,
		SidebarMenuSubItem,
		SidebarProvider,
		SidebarSeparator,
		SidebarTrigger
	} from '$lib/components/ui/sidebar/index.js';
	import Home from 'lucide-svelte/icons/house';
	import Inbox from 'lucide-svelte/icons/mail';
	import Calendar from 'lucide-svelte/icons/calendar-days';
	import Search from 'lucide-svelte/icons/search';
	import Settings from 'lucide-svelte/icons/settings';
	import User from 'lucide-svelte/icons/user';
	import ChevronUp from 'lucide-svelte/icons/chevron-up';
	import Plus from 'lucide-svelte/icons/plus';

	const { Story } = defineMeta({
		title: 'Components/Sidebar',
		component: Sidebar,
		parameters: {
			layout: 'fullscreen'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	const data = {
		user: {
			name: 'John Doe',
			email: 'john@example.com',
			avatar: '/avatars/john-doe.jpg'
		},
		teams: [
			{
				name: 'Acme Inc',
				logo: '🏢',
				plan: 'Enterprise'
			},
			{
				name: 'Acme Corp.',
				logo: '🏭',
				plan: 'Startup'
			},
			{
				name: 'Evil Corp.',
				logo: '😈',
				plan: 'Free'
			}
		],
		navMain: [
			{
				title: 'Playground',
				url: '#',
				icon: '🎮',
				isActive: true,
				items: [
					{
						title: 'History',
						url: '#'
					},
					{
						title: 'Starred',
						url: '#'
					},
					{
						title: 'Settings',
						url: '#'
					}
				]
			},
			{
				title: 'Models',
				url: '#',
				icon: '🤖',
				items: [
					{
						title: 'Genesis',
						url: '#'
					},
					{
						title: 'Explorer',
						url: '#'
					},
					{
						title: 'Quantum',
						url: '#'
					}
				]
			},
			{
				title: 'Documentation',
				url: '#',
				icon: '📚',
				items: [
					{
						title: 'Introduction',
						url: '#'
					},
					{
						title: 'Get Started',
						url: '#'
					},
					{
						title: 'Tutorials',
						url: '#'
					},
					{
						title: 'Changelog',
						url: '#'
					}
				]
			},
			{
				title: 'Settings',
				url: '#',
				icon: '⚙️',
				items: [
					{
						title: 'General',
						url: '#'
					},
					{
						title: 'Team',
						url: '#'
					},
					{
						title: 'Billing',
						url: '#'
					},
					{
						title: 'Limits',
						url: '#'
					}
				]
			}
		],
		projects: [
			{
				name: 'Design Engineering',
				url: '#',
				icon: '🎨'
			},
			{
				name: 'Sales & Marketing',
				url: '#',
				icon: '📈'
			},
			{
				name: 'Travel',
				url: '#',
				icon: '✈️'
			}
		]
	};
</script>

<Story name="Default">
	<div class="h-screen">
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg">
								<a href="#">
									<div
										class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
									>
										<span class="text-lg">🏢</span>
									</div>
									<div class="grid flex-1 text-left text-sm leading-tight">
										<span class="truncate font-semibold">Acme Inc</span>
										<span class="truncate text-xs">Enterprise</span>
									</div>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Platform</SidebarGroupLabel>
						<SidebarMenu>
							{#each data.navMain as item (item.title)}
								<SidebarMenuItem>
									<SidebarMenuButton isActive={item.isActive}>
										<a href={item.url}>
											<span>{item.icon}</span>
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
									{#if item.items?.length}
										<SidebarMenuSub>
											{#each item.items as subItem (subItem.title)}
												<SidebarMenuSubItem>
													<SidebarMenuSubButton>
														<a href={subItem.url}>
															<span>{subItem.title}</span>
														</a>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											{/each}
										</SidebarMenuSub>
									{/if}
								</SidebarMenuItem>
							{/each}
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup class="group-data-[collapsible=icon]:hidden">
						<SidebarGroupLabel>Projects</SidebarGroupLabel>
						<SidebarMenu>
							{#each data.projects as item (item.name)}
								<SidebarMenuItem>
									<SidebarMenuButton>
										<a href={item.url}>
											<span>{item.icon}</span>
											<span>{item.name}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							{/each}
							<SidebarMenuItem>
								<SidebarMenuButton class="text-sidebar-foreground/70">
									<Plus class="size-4" />
									<span>More</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg">
								<a href="#">
									<User class="size-4" />
									<div class="grid flex-1 text-left text-sm leading-tight">
										<span class="truncate font-semibold">{data.user.name}</span>
										<span class="truncate text-xs">{data.user.email}</span>
									</div>
									<ChevronUp class="ml-auto size-4" />
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
			<SidebarInset>
				<header
					class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
				>
					<div class="flex items-center gap-2 px-4">
						<SidebarTrigger class="-ml-1" />
						<div class="h-4 w-px bg-sidebar-border" />
						<div class="font-medium">Dashboard</div>
					</div>
				</header>
				<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
					<div class="grid auto-rows-min gap-4 md:grid-cols-3">
						<div class="aspect-video rounded-xl bg-muted/50" />
						<div class="aspect-video rounded-xl bg-muted/50" />
						<div class="aspect-video rounded-xl bg-muted/50" />
					</div>
					<div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
				</div>
			</SidebarInset>
		</SidebarProvider>
	</div>
</Story>

<Story name="Simple">
	<div class="h-96 w-80">
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<h2 class="px-4 py-2 text-lg font-semibold">Navigation</h2>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<Home class="size-4" />
										<span>Home</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<Inbox class="size-4" />
										<span>Inbox</span>
										<SidebarMenuBadge>24</SidebarMenuBadge>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<Calendar class="size-4" />
										<span>Calendar</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<Search class="size-4" />
										<span>Search</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<Settings class="size-4" />
										<span>Settings</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	</div>
</Story>

<Story name="With Search">
	<div class="h-96 w-80">
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarInput placeholder="Search..." />
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Main</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<Home class="size-4" />
										<span>Dashboard</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<User class="size-4" />
										<span>Profile</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
					<SidebarSeparator />
					<SidebarGroup>
						<SidebarGroupLabel>Tools</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<Calendar class="size-4" />
										<span>Calendar</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton>
									<a href="#">
										<Settings class="size-4" />
										<span>Settings</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	</div>
</Story>
