<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Menubar,
		MenubarCheckboxItem,
		MenubarContent,
		MenubarItem,
		MenubarMenu,
		MenubarRadioGroup,
		MenubarRadioItem,
		MenubarSeparator,
		MenubarShortcut,
		MenubarSub,
		MenubarSubContent,
		MenubarSubTrigger,
		MenubarTrigger
	} from '$lib/components/ui/menubar/index.js';

	const { Story } = defineMeta({
		title: 'Components/Menubar',
		component: Menubar,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let showBookmarks = true;
	let showFullUrls = false;
	let person = 'pedro';
</script>

<Story name="Default">
	<Menubar class="w-fit">
		<MenubarMenu>
			<MenubarTrigger>File</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>
					New Tab <MenubarShortcut>⌘T</MenubarShortcut>
				</MenubarItem>
				<MenubarItem>
					New Window <MenubarShortcut>⌘N</MenubarShortcut>
				</MenubarItem>
				<MenubarItem disabled>New Incognito Window</MenubarItem>
				<MenubarSeparator />
				<MenubarSub>
					<MenubarSubTrigger>Share</MenubarSubTrigger>
					<MenubarSubContent>
						<MenubarItem>Email link</MenubarItem>
						<MenubarItem>Messages</MenubarItem>
						<MenubarItem>Notes</MenubarItem>
					</MenubarSubContent>
				</MenubarSub>
				<MenubarSeparator />
				<MenubarItem>
					Print... <MenubarShortcut>⌘P</MenubarShortcut>
				</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>Edit</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>
					Undo <MenubarShortcut>⌘Z</MenubarShortcut>
				</MenubarItem>
				<MenubarItem>
					Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
				</MenubarItem>
				<MenubarSeparator />
				<MenubarSub>
					<MenubarSubTrigger>Find</MenubarSubTrigger>
					<MenubarSubContent>
						<MenubarItem>Search the web</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>Find...</MenubarItem>
						<MenubarItem>Find Next</MenubarItem>
						<MenubarItem>Find Previous</MenubarItem>
					</MenubarSubContent>
				</MenubarSub>
				<MenubarSeparator />
				<MenubarItem>Cut</MenubarItem>
				<MenubarItem>Copy</MenubarItem>
				<MenubarItem>Paste</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>View</MenubarTrigger>
			<MenubarContent>
				<MenubarCheckboxItem bind:checked={showBookmarks}>
					Always Show Bookmarks Bar
				</MenubarCheckboxItem>
				<MenubarCheckboxItem bind:checked={showFullUrls}>Always Show Full URLs</MenubarCheckboxItem>
				<MenubarSeparator />
				<MenubarItem inset>
					Reload <MenubarShortcut>⌘R</MenubarShortcut>
				</MenubarItem>
				<MenubarItem disabled inset>
					Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
				</MenubarItem>
				<MenubarSeparator />
				<MenubarItem inset>Toggle Fullscreen</MenubarItem>
				<MenubarSeparator />
				<MenubarItem inset>Hide Sidebar</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>Profiles</MenubarTrigger>
			<MenubarContent>
				<MenubarRadioGroup bind:value={person}>
					<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
					<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
					<MenubarRadioItem value="luis">Luis</MenubarRadioItem>
				</MenubarRadioGroup>
				<MenubarSeparator />
				<MenubarItem inset>Edit...</MenubarItem>
				<MenubarSeparator />
				<MenubarItem inset>Add Profile...</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
	</Menubar>
</Story>

<Story name="Simple">
	<Menubar class="w-fit">
		<MenubarMenu>
			<MenubarTrigger>File</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>New</MenubarItem>
				<MenubarItem>Open</MenubarItem>
				<MenubarItem>Save</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Exit</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>Edit</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>Cut</MenubarItem>
				<MenubarItem>Copy</MenubarItem>
				<MenubarItem>Paste</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>Help</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>Documentation</MenubarItem>
				<MenubarItem>About</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
	</Menubar>
</Story>

<Story name="Application Menu">
	<Menubar class="w-fit">
		<MenubarMenu>
			<MenubarTrigger>Application</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>About Application</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Preferences... <MenubarShortcut>⌘,</MenubarShortcut></MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Hide Application <MenubarShortcut>⌘H</MenubarShortcut></MenubarItem>
				<MenubarItem>Hide Others <MenubarShortcut>⌥⌘H</MenubarShortcut></MenubarItem>
				<MenubarItem>Show All</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Quit Application <MenubarShortcut>⌘Q</MenubarShortcut></MenubarItem>
			</MenubarContent>
		</MenubarMenu>
		<MenubarMenu>
			<MenubarTrigger>Window</MenubarTrigger>
			<MenubarContent>
				<MenubarItem>Minimize <MenubarShortcut>⌘M</MenubarShortcut></MenubarItem>
				<MenubarItem>Zoom</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>Bring All to Front</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
	</Menubar>
</Story>
