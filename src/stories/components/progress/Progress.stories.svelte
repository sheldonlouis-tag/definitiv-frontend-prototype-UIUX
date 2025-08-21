<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Progress } from '$lib/components/ui/progress/index.js';

	const { Story } = defineMeta({
		title: 'Components/Progress',
		component: Progress,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			value: {
				control: { type: 'number', min: 0, max: 100 },
				description: 'The progress value'
			},
			max: {
				control: { type: 'number' },
				description: 'The maximum value'
			}
		}
	});
</script>

<Story name="Default">
	<div class="w-full max-w-md">
		<Progress value={33} class="w-full" />
	</div>
</Story>

<Story name="Different Values">
	<div class="w-full max-w-md space-y-4">
		<div class="space-y-2">
			<div class="flex justify-between text-sm">
				<span>0%</span>
				<span>0/100</span>
			</div>
			<Progress value={0} class="w-full" />
		</div>

		<div class="space-y-2">
			<div class="flex justify-between text-sm">
				<span>25%</span>
				<span>25/100</span>
			</div>
			<Progress value={25} class="w-full" />
		</div>

		<div class="space-y-2">
			<div class="flex justify-between text-sm">
				<span>50%</span>
				<span>50/100</span>
			</div>
			<Progress value={50} class="w-full" />
		</div>

		<div class="space-y-2">
			<div class="flex justify-between text-sm">
				<span>75%</span>
				<span>75/100</span>
			</div>
			<Progress value={75} class="w-full" />
		</div>

		<div class="space-y-2">
			<div class="flex justify-between text-sm">
				<span>100%</span>
				<span>100/100</span>
			</div>
			<Progress value={100} class="w-full" />
		</div>
	</div>
</Story>

<Story name="With Labels">
	<div class="w-full max-w-md space-y-6">
		<div class="space-y-2">
			<div class="flex justify-between text-sm font-medium">
				<span>Uploading files...</span>
				<span>45%</span>
			</div>
			<Progress value={45} class="w-full" />
		</div>

		<div class="space-y-2">
			<div class="flex justify-between text-sm font-medium">
				<span>Processing data</span>
				<span>78%</span>
			</div>
			<Progress value={78} class="w-full" />
		</div>

		<div class="space-y-2">
			<div class="flex justify-between text-sm font-medium">
				<span>Installation complete</span>
				<span>100%</span>
			</div>
			<Progress value={100} class="w-full" />
		</div>
	</div>
</Story>

<Story name="Sizes">
	<div class="w-full max-w-md space-y-4">
		<div class="space-y-2">
			<div class="text-sm">Small</div>
			<Progress value={60} class="h-2 w-full" />
		</div>

		<div class="space-y-2">
			<div class="text-sm">Default</div>
			<Progress value={60} class="w-full" />
		</div>

		<div class="space-y-2">
			<div class="text-sm">Large</div>
			<Progress value={60} class="h-6 w-full" />
		</div>
	</div>
</Story>

<Story name="Animated">
	<div class="w-full max-w-md space-y-2">
		<div class="flex justify-between text-sm">
			<span>Loading...</span>
			<span>60%</span>
		</div>
		<Progress value={60} class="w-full" />
	</div>
</Story>
