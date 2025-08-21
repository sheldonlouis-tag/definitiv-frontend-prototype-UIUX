<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Command,
		CommandDialog,
		CommandEmpty,
		CommandGroup,
		CommandInput,
		CommandItem,
		CommandList,
		CommandSeparator,
		CommandShortcut
	} from '$lib/components/ui/command/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Calendar from 'lucide-svelte/icons/calendar';
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import Settings from 'lucide-svelte/icons/settings';
	import Smile from 'lucide-svelte/icons/smile';
	import User from 'lucide-svelte/icons/user';

	const { Story } = defineMeta({
		title: 'Components/Command',
		component: Command,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let open = false;
</script>

<Story name="Default">
	<div class="w-full max-w-md">
		<Command class="rounded-lg border shadow-md">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<Calendar class="mr-2 h-4 w-4" />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<Smile class="mr-2 h-4 w-4" />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem>
						<CreditCard class="mr-2 h-4 w-4" />
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<User class="mr-2 h-4 w-4" />
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCard class="mr-2 h-4 w-4" />
						<span>Billing</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<Settings class="mr-2 h-4 w-4" />
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	</div>
</Story>

<Story name="Dialog">
	<div>
		<p class="mb-4 text-sm text-muted-foreground">
			Press
			<kbd
				class="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 select-none"
			>
				<span class="text-xs">⌘</span>J
			</kbd>
		</p>
		<Button>Open Command Dialog</Button>
		<CommandDialog bind:open>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<Calendar class="mr-2 h-4 w-4" />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<Smile class="mr-2 h-4 w-4" />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem>
						<CreditCard class="mr-2 h-4 w-4" />
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<User class="mr-2 h-4 w-4" />
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCard class="mr-2 h-4 w-4" />
						<span>Billing</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<Settings class="mr-2 h-4 w-4" />
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	</div>
</Story>

<Story name="With Icons">
	<div class="w-full max-w-md">
		<Command class="rounded-lg border shadow-md">
			<CommandInput placeholder="Search files and folders..." />
			<CommandList>
				<CommandEmpty>No files found.</CommandEmpty>
				<CommandGroup heading="Recent Files">
					<CommandItem>
						<span>📄</span>
						<span class="ml-2">Document.pdf</span>
					</CommandItem>
					<CommandItem>
						<span>📊</span>
						<span class="ml-2">Spreadsheet.xlsx</span>
					</CommandItem>
					<CommandItem>
						<span>🖼️</span>
						<span class="ml-2">Image.png</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Folders">
					<CommandItem>
						<span>📁</span>
						<span class="ml-2">Documents</span>
					</CommandItem>
					<CommandItem>
						<span>📁</span>
						<span class="ml-2">Downloads</span>
					</CommandItem>
					<CommandItem>
						<span>📁</span>
						<span class="ml-2">Pictures</span>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	</div>
</Story>
