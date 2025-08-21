<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Collapsible,
		CollapsibleContent,
		CollapsibleTrigger
	} from '$lib/components/ui/collapsible/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	const { Story } = defineMeta({
		title: 'Components/Collapsible',
		component: Collapsible,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			open: {
				control: { type: 'boolean' },
				description: 'Whether the collapsible is open'
			}
		}
	});
</script>

<script lang="ts">
	let isOpen = false;
</script>

<Story name="Default">
	<div class="w-full max-w-md">
		<Collapsible bind:open={isOpen}>
			<div class="flex items-center justify-between space-x-4 px-4">
				<h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
				<CollapsibleTrigger>
					<Button variant="ghost" size="sm" class="w-9 p-0">
						<ChevronDown class="h-4 w-4" />
						<span class="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
			<CollapsibleContent class="space-y-2">
				<div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
				<div class="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
			</CollapsibleContent>
		</Collapsible>
	</div>
</Story>

<Story name="Open by Default">
	<div class="w-full max-w-md">
		<Collapsible open={true}>
			<div class="flex items-center justify-between space-x-4 px-4">
				<h4 class="text-sm font-semibold">Recent Projects</h4>
				<CollapsibleTrigger>
					<Button variant="ghost" size="sm" class="w-9 p-0">
						<ChevronDown class="h-4 w-4" />
						<span class="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent class="space-y-2">
				<div class="rounded-md border px-4 py-3 text-sm">Project Alpha - Web Application</div>
				<div class="rounded-md border px-4 py-3 text-sm">Project Beta - Mobile App</div>
				<div class="rounded-md border px-4 py-3 text-sm">Project Gamma - API Service</div>
			</CollapsibleContent>
		</Collapsible>
	</div>
</Story>

<Story name="With Rich Content">
	<div class="w-full max-w-md">
		<Collapsible>
			<div class="flex items-center justify-between space-x-4 px-4">
				<h4 class="text-sm font-semibold">Settings</h4>
				<CollapsibleTrigger>
					<Button variant="ghost" size="sm" class="w-9 p-0">
						<ChevronDown class="h-4 w-4" />
						<span class="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent class="space-y-4 p-4">
				<div class="space-y-2">
					<label class="text-sm font-medium">Theme</label>
					<select class="w-full rounded border p-2">
						<option>Light</option>
						<option>Dark</option>
						<option>System</option>
					</select>
				</div>
				<div class="space-y-2">
					<label class="text-sm font-medium">Language</label>
					<select class="w-full rounded border p-2">
						<option>English</option>
						<option>Spanish</option>
						<option>French</option>
					</select>
				</div>
			</CollapsibleContent>
		</Collapsible>
	</div>
</Story>
