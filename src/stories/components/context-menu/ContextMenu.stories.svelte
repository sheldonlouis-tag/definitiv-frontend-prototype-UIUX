<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		ContextMenu,
		ContextMenuCheckboxItem,
		ContextMenuContent,
		ContextMenuItem,
		ContextMenuLabel,
		ContextMenuRadioGroup,
		ContextMenuRadioItem,
		ContextMenuSeparator,
		ContextMenuShortcut,
		ContextMenuSub,
		ContextMenuSubContent,
		ContextMenuSubTrigger,
		ContextMenuTrigger
	} from '$lib/components/ui/context-menu/index.js';

	const { Story } = defineMeta({
		title: 'Components/ContextMenu',
		component: ContextMenu,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let bookmarksChecked = true;
	let urlsChecked = false;
	let person = 'pedro';
</script>

<Story name="Default">
	<ContextMenu>
		<ContextMenuTrigger
			class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
		>
			Right click here
		</ContextMenuTrigger>
		<ContextMenuContent class="w-64">
			<ContextMenuItem inset>
				Back
				<ContextMenuShortcut>⌘[</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem inset disabled>
				Forward
				<ContextMenuShortcut>⌘]</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem inset>
				Reload
				<ContextMenuShortcut>⌘R</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuSub>
				<ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
				<ContextMenuSubContent class="w-48">
					<ContextMenuItem>
						Save Page As...
						<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>Create Shortcut...</ContextMenuItem>
					<ContextMenuItem>Name Window...</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem>Developer Tools</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>
			<ContextMenuSeparator />
			<ContextMenuCheckboxItem bind:checked={bookmarksChecked}>
				Show Bookmarks Bar
				<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			<ContextMenuCheckboxItem bind:checked={urlsChecked}>Show Full URLs</ContextMenuCheckboxItem>
			<ContextMenuSeparator />
			<ContextMenuRadioGroup bind:value={person}>
				<ContextMenuLabel inset>People</ContextMenuLabel>
				<ContextMenuSeparator />
				<ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
				<ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
			</ContextMenuRadioGroup>
		</ContextMenuContent>
	</ContextMenu>
</Story>

<Story name="Simple">
	<ContextMenu>
		<ContextMenuTrigger
			class="flex h-[100px] w-[200px] items-center justify-center rounded-md border text-sm"
		>
			Right click for menu
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuItem>Copy</ContextMenuItem>
			<ContextMenuItem>Paste</ContextMenuItem>
			<ContextMenuItem>Cut</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Delete</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
</Story>

<Story name="File Context">
	<ContextMenu>
		<ContextMenuTrigger
			class="flex h-[120px] w-[250px] items-center justify-center rounded-md border bg-muted text-sm"
		>
			📄 Document.pdf
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuItem>Open</ContextMenuItem>
			<ContextMenuItem>Open with...</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Copy</ContextMenuItem>
			<ContextMenuItem>Cut</ContextMenuItem>
			<ContextMenuItem>Paste</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Rename</ContextMenuItem>
			<ContextMenuItem>Delete</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Properties</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
</Story>
