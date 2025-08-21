<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		DropdownMenu,
		DropdownMenuCheckboxItem,
		DropdownMenuContent,
		DropdownMenuGroup,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuRadioGroup,
		DropdownMenuRadioItem,
		DropdownMenuSeparator,
		DropdownMenuShortcut,
		DropdownMenuSub,
		DropdownMenuSubContent,
		DropdownMenuSubTrigger,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import User from 'lucide-svelte/icons/user';
	import Settings from 'lucide-svelte/icons/settings';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Plus from 'lucide-svelte/icons/plus';
	import Mail from 'lucide-svelte/icons/mail';
	import MessageSquare from 'lucide-svelte/icons/message-square';
	import UserRoundPlus from 'lucide-svelte/icons/user-round-plus';

	const { Story } = defineMeta({
		title: 'Components/DropdownMenu',
		component: DropdownMenu,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let showStatusBar = true;
	let showActivityBar = false;
	let showPanel = false;
	let position = 'bottom';
</script>

<Story name="Default">
	<DropdownMenu>
		<DropdownMenuTrigger>
			<Button variant="outline">Open</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-56">
			<DropdownMenuLabel>My Account</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuItem>
				<User class="mr-2 h-4 w-4" />
				<span>Profile</span>
				<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
			</DropdownMenuItem>
			<DropdownMenuItem>
				<Settings class="mr-2 h-4 w-4" />
				<span>Settings</span>
				<DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
			</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem>
				<LogOut class="mr-2 h-4 w-4" />
				<span>Log out</span>
				<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</Story>

<Story name="With Checkboxes">
	<DropdownMenu>
		<DropdownMenuTrigger>
			<Button variant="outline">
				View
				<ChevronDown class="ml-2 h-4 w-4" />
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-56">
			<DropdownMenuLabel>Appearance</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuCheckboxItem bind:checked={showStatusBar}>Status Bar</DropdownMenuCheckboxItem>
			<DropdownMenuCheckboxItem bind:checked={showActivityBar} disabled>
				Activity Bar
			</DropdownMenuCheckboxItem>
			<DropdownMenuCheckboxItem bind:checked={showPanel}>Panel</DropdownMenuCheckboxItem>
		</DropdownMenuContent>
	</DropdownMenu>
</Story>

<Story name="With Radio Group">
	<DropdownMenu>
		<DropdownMenuTrigger>
			<Button variant="outline">
				Position: {position}
				<ChevronDown class="ml-2 h-4 w-4" />
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-56">
			<DropdownMenuLabel>Panel Position</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuRadioGroup bind:value={position}>
				<DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
				<DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
				<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
			</DropdownMenuRadioGroup>
		</DropdownMenuContent>
	</DropdownMenu>
</Story>

<Story name="With Submenu">
	<DropdownMenu>
		<DropdownMenuTrigger>
			<Button variant="outline">Actions</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent class="w-56">
			<DropdownMenuLabel>Actions</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuItem>
					<User class="mr-2 h-4 w-4" />
					<span>Profile</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Settings class="mr-2 h-4 w-4" />
					<span>Settings</span>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuSub>
				<DropdownMenuSubTrigger>
					<UserRoundPlus class="mr-2 h-4 w-4" />
					<span>Invite users</span>
				</DropdownMenuSubTrigger>
				<DropdownMenuSubContent>
					<DropdownMenuItem>
						<Mail class="mr-2 h-4 w-4" />
						<span>Email</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<MessageSquare class="mr-2 h-4 w-4" />
						<span>Message</span>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Plus class="mr-2 h-4 w-4" />
						<span>More...</span>
					</DropdownMenuItem>
				</DropdownMenuSubContent>
			</DropdownMenuSub>
			<DropdownMenuSeparator />
			<DropdownMenuItem>
				<LogOut class="mr-2 h-4 w-4" />
				<span>Log out</span>
				<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
</Story>
