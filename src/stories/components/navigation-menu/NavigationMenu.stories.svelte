<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		NavigationMenuRoot,
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuTrigger
	} from '$lib/components/ui/navigation-menu/index.js';

	const { Story } = defineMeta({
		title: 'Components/NavigationMenu',
		component: NavigationMenuRoot,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	const components = [
		{
			title: 'Alert Dialog',
			href: '/docs/primitives/alert-dialog',
			description:
				'A modal dialog that interrupts the user with important content and expects a response.'
		},
		{
			title: 'Hover Card',
			href: '/docs/primitives/hover-card',
			description: 'For sighted users to preview content available behind a link.'
		},
		{
			title: 'Progress',
			href: '/docs/primitives/progress',
			description:
				'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
		},
		{
			title: 'Scroll-area',
			href: '/docs/primitives/scroll-area',
			description: 'Visually or semantically separates content.'
		},
		{
			title: 'Tabs',
			href: '/docs/primitives/tabs',
			description:
				'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
		},
		{
			title: 'Tooltip',
			href: '/docs/primitives/tooltip',
			description:
				'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
		}
	];
</script>

<Story name="Default">
	<NavigationMenuRoot>
		<NavigationMenuList>
			<NavigationMenuItem>
				<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
						<li class="row-span-3">
							<NavigationMenuLink
								href="/"
								class="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none select-none focus:shadow-md"
							>
								<div class="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
								<p class="text-sm leading-tight text-muted-foreground">
									Beautifully designed components built with Radix UI and Tailwind CSS.
								</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/docs"
								class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
							>
								<div class="text-sm leading-none font-medium">Introduction</div>
								<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
									Re-usable components built using Radix UI and Tailwind CSS.
								</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/docs/installation"
								class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
							>
								<div class="text-sm leading-none font-medium">Installation</div>
								<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
									How to install dependencies and structure your app.
								</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/docs/primitives/typography"
								class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
							>
								<div class="text-sm leading-none font-medium">Typography</div>
								<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
									Styles for headings, paragraphs, lists...etc
								</p>
							</NavigationMenuLink>
						</li>
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuTrigger>Components</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
						{#each components as component (component.title)}
							<li>
								<NavigationMenuLink
									href={component.href}
									class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
								>
									<div class="text-sm leading-none font-medium">{component.title}</div>
									<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
										{component.description}
									</p>
								</NavigationMenuLink>
							</li>
						{/each}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/docs"
					class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
				>
					Documentation
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
</Story>

<Story name="Simple">
	<NavigationMenuRoot>
		<NavigationMenuList>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/"
					class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					Home
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/about"
					class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					About
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/contact"
					class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					Contact
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
</Story>

<Story name="With Dropdown">
	<NavigationMenuRoot>
		<NavigationMenuList>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/"
					class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					Home
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuTrigger>Products</NavigationMenuTrigger>
				<NavigationMenuContent>
					<ul class="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
						<li>
							<NavigationMenuLink
								href="/products/web"
								class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
							>
								<div class="text-sm leading-none font-medium">Web Applications</div>
								<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
									Modern web applications built with the latest technologies.
								</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/products/mobile"
								class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
							>
								<div class="text-sm leading-none font-medium">Mobile Apps</div>
								<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
									Native and cross-platform mobile applications.
								</p>
							</NavigationMenuLink>
						</li>
						<li>
							<NavigationMenuLink
								href="/products/api"
								class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
							>
								<div class="text-sm leading-none font-medium">API Services</div>
								<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
									Robust and scalable API solutions for your business.
								</p>
							</NavigationMenuLink>
						</li>
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/contact"
					class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
				>
					Contact
				</NavigationMenuLink>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
</Story>
