<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	/**
	 * RadioGroup component stories showcasing different configurations and usage patterns.
	 * Radio groups allow users to select one option from a set of mutually exclusive choices.
	 */
	const { Story } = defineMeta({
		title: 'Components/RadioGroup',
		component: RadioGroup,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			value: {
				control: { type: 'text' }
			},
			disabled: {
				control: { type: 'boolean' }
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<RadioGroup {...args} value="option-one">
		<div class="flex items-center space-x-2">
			<RadioGroupItem value="option-one" id="option-one" />
			<Label for="option-one">Option One</Label>
		</div>
		<div class="flex items-center space-x-2">
			<RadioGroupItem value="option-two" id="option-two" />
			<Label for="option-two">Option Two</Label>
		</div>
		<div class="flex items-center space-x-2">
			<RadioGroupItem value="option-three" id="option-three" />
			<Label for="option-three">Option Three</Label>
		</div>
	</RadioGroup>
{/snippet}

<Story name="Default" />

<Story name="Without Default">
	{#snippet template()}
		<RadioGroup>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="r1" />
				<Label for="r1">Option One</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="r2" />
				<Label for="r2">Option Two</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="option-three" id="r3" />
				<Label for="r3">Option Three</Label>
			</div>
		</RadioGroup>
	{/snippet}
</Story>

<Story name="Disabled">
	{#snippet template()}
		<RadioGroup disabled>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="d1" />
				<Label for="d1">Option One</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="d2" />
				<Label for="d2">Option Two</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="option-three" id="d3" />
				<Label for="d3">Option Three</Label>
			</div>
		</RadioGroup>
	{/snippet}
</Story>

<Story name="With Descriptions">
	{#snippet template()}
		<RadioGroup value="comfortable">
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="default" id="r1-desc" />
				<div class="grid gap-1.5 leading-none">
					<Label for="r1-desc">Default</Label>
					<p class="text-xs text-muted-foreground">The default spacing and sizing.</p>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="comfortable" id="r2-desc" />
				<div class="grid gap-1.5 leading-none">
					<Label for="r2-desc">Comfortable</Label>
					<p class="text-xs text-muted-foreground">More spacing for better readability.</p>
				</div>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="compact" id="r3-desc" />
				<div class="grid gap-1.5 leading-none">
					<Label for="r3-desc">Compact</Label>
					<p class="text-xs text-muted-foreground">Less spacing to fit more content.</p>
				</div>
			</div>
		</RadioGroup>
	{/snippet}
</Story>

<Story name="Payment Method">
	{#snippet template()}
		<div class="space-y-3">
			<h3 class="text-lg font-medium">Payment Method</h3>
			<RadioGroup value="card">
				<div class="flex items-center space-x-2">
					<RadioGroupItem value="card" id="card" />
					<Label for="card">Credit Card</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroupItem value="paypal" id="paypal" />
					<Label for="paypal">PayPal</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroupItem value="apple" id="apple" />
					<Label for="apple">Apple Pay</Label>
				</div>
				<div class="flex items-center space-x-2">
					<RadioGroupItem value="google" id="google" />
					<Label for="google">Google Pay</Label>
				</div>
			</RadioGroup>
		</div>
	{/snippet}
</Story>

<Story name="Horizontal">
	{#snippet template()}
		<RadioGroup value="medium" class="flex">
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="small" id="small" />
				<Label for="small">Small</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="medium" id="medium" />
				<Label for="medium">Medium</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="large" id="large" />
				<Label for="large">Large</Label>
			</div>
		</RadioGroup>
	{/snippet}
</Story>
