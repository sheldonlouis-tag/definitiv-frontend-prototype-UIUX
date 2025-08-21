<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		ResizablePaneGroup,
		ResizablePane,
		ResizableHandle
	} from '$lib/components/ui/resizable/index.js';

	const { Story } = defineMeta({
		title: 'Components/Resizable',
		component: ResizablePaneGroup,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			direction: {
				control: { type: 'select' },
				options: ['horizontal', 'vertical'],
				description: 'The direction of the resizable panels'
			}
		}
	});
</script>

<Story name="Horizontal">
	<div class="h-64 w-full max-w-4xl">
		<ResizablePaneGroup direction="horizontal" class="rounded-lg border">
			<ResizablePane defaultSize={25}>
				<div class="flex h-full items-center justify-center p-6">
					<span class="font-semibold">Sidebar</span>
				</div>
			</ResizablePane>
			<ResizableHandle />
			<ResizablePane defaultSize={75}>
				<div class="flex h-full items-center justify-center p-6">
					<span class="font-semibold">Main Content</span>
				</div>
			</ResizablePane>
		</ResizablePaneGroup>
	</div>
</Story>

<Story name="Vertical">
	<div class="h-96 w-full max-w-md">
		<ResizablePaneGroup direction="vertical" class="rounded-lg border">
			<ResizablePane defaultSize={25}>
				<div class="flex h-full items-center justify-center p-6">
					<span class="font-semibold">Header</span>
				</div>
			</ResizablePane>
			<ResizableHandle />
			<ResizablePane defaultSize={75}>
				<div class="flex h-full items-center justify-center p-6">
					<span class="font-semibold">Content</span>
				</div>
			</ResizablePane>
		</ResizablePaneGroup>
	</div>
</Story>

<Story name="Three Panels">
	<div class="h-64 w-full max-w-4xl">
		<ResizablePaneGroup direction="horizontal" class="rounded-lg border">
			<ResizablePane defaultSize={20}>
				<div class="flex h-full items-center justify-center p-6">
					<span class="font-semibold">Left</span>
				</div>
			</ResizablePane>
			<ResizableHandle />
			<ResizablePane defaultSize={60}>
				<div class="flex h-full items-center justify-center p-6">
					<span class="font-semibold">Center</span>
				</div>
			</ResizablePane>
			<ResizableHandle />
			<ResizablePane defaultSize={20}>
				<div class="flex h-full items-center justify-center p-6">
					<span class="font-semibold">Right</span>
				</div>
			</ResizablePane>
		</ResizablePaneGroup>
	</div>
</Story>

<Story name="Nested Layout">
	<div class="h-96 w-full max-w-4xl">
		<ResizablePaneGroup direction="horizontal" class="rounded-lg border">
			<ResizablePane defaultSize={30}>
				<div class="flex h-full items-center justify-center p-6">
					<span class="font-semibold">Sidebar</span>
				</div>
			</ResizablePane>
			<ResizableHandle />
			<ResizablePane defaultSize={70}>
				<ResizablePaneGroup direction="vertical">
					<ResizablePane defaultSize={30}>
						<div class="flex h-full items-center justify-center p-6">
							<span class="font-semibold">Header</span>
						</div>
					</ResizablePane>
					<ResizableHandle />
					<ResizablePane defaultSize={70}>
						<div class="flex h-full items-center justify-center p-6">
							<span class="font-semibold">Main Content</span>
						</div>
					</ResizablePane>
				</ResizablePaneGroup>
			</ResizablePane>
		</ResizablePaneGroup>
	</div>
</Story>
