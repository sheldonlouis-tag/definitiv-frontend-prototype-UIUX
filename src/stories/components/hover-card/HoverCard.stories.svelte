<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		HoverCard,
		HoverCardContent,
		HoverCardTrigger
	} from '$lib/components/ui/hover-card/index.js';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Calendar from 'lucide-svelte/icons/calendar';

	const { Story } = defineMeta({
		title: 'Components/HoverCard',
		component: HoverCard,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<HoverCard>
		<HoverCardTrigger>
			<Button variant="link">@nextjs</Button>
		</HoverCardTrigger>
		<HoverCardContent class="w-80">
			<div class="flex justify-between space-x-4">
				<Avatar>
					<AvatarImage src="https://github.com/vercel.png" />
					<AvatarFallback>VC</AvatarFallback>
				</Avatar>
				<div class="space-y-1">
					<h4 class="text-sm font-semibold">@nextjs</h4>
					<p class="text-sm">The React Framework – created and maintained by @vercel.</p>
					<div class="flex items-center pt-2">
						<Calendar class="mr-2 h-4 w-4 opacity-70" />
						<span class="text-xs text-muted-foreground"> Joined December 2021 </span>
					</div>
				</div>
			</div>
		</HoverCardContent>
	</HoverCard>
</Story>

<Story name="User Profile">
	<HoverCard>
		<HoverCardTrigger>
			<Button variant="link">@shadcn</Button>
		</HoverCardTrigger>
		<HoverCardContent class="w-80">
			<div class="flex justify-between space-x-4">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>SC</AvatarFallback>
				</Avatar>
				<div class="space-y-1">
					<h4 class="text-sm font-semibold">@shadcn</h4>
					<p class="text-sm">Building UI components and design systems.</p>
					<div class="flex items-center pt-2">
						<Calendar class="mr-2 h-4 w-4 opacity-70" />
						<span class="text-xs text-muted-foreground"> Joined March 2023 </span>
					</div>
				</div>
			</div>
		</HoverCardContent>
	</HoverCard>
</Story>

<Story name="Product Info">
	<HoverCard>
		<HoverCardTrigger>
			<Button variant="outline">Hover for details</Button>
		</HoverCardTrigger>
		<HoverCardContent class="w-80">
			<div class="space-y-2">
				<h4 class="text-sm font-semibold">Product Features</h4>
				<ul class="space-y-1 text-sm">
					<li>• Modern design system</li>
					<li>• Fully accessible components</li>
					<li>• TypeScript support</li>
					<li>• Dark mode compatible</li>
				</ul>
				<div class="pt-2">
					<span class="text-xs text-muted-foreground"> Last updated: 2 days ago </span>
				</div>
			</div>
		</HoverCardContent>
	</HoverCard>
</Story>

<Story name="Simple Text">
	<div class="space-y-4">
		<p>
			Hover over
			<HoverCard>
				<HoverCardTrigger>
					<span class="cursor-pointer underline">this text</span>
				</HoverCardTrigger>
				<HoverCardContent>
					<p class="text-sm">This is additional information that appears on hover.</p>
				</HoverCardContent>
			</HoverCard>
			to see more details.
		</p>
	</div>
</Story>
