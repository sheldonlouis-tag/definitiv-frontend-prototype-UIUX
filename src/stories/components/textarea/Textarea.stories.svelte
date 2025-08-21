<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	/**
	 * Textarea component stories showcasing different states and usage patterns.
	 * Textareas are multi-line text input controls for longer text content.
	 */
	const { Story } = defineMeta({
		title: 'Components/Textarea',
		component: Textarea,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		args: {
			placeholder: 'Type your message here...'
		},
		argTypes: {
			placeholder: {
				control: { type: 'text' }
			},
			disabled: {
				control: { type: 'boolean' }
			},
			value: {
				control: { type: 'text' }
			},
			rows: {
				control: { type: 'number' }
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<Textarea {...args} />
{/snippet}

<Story name="Default" />

<Story name="With Value" args={{ value: 'This is some sample text in the textarea.' }} />

<Story name="With Rows" args={{ rows: 6 }} />

<Story name="Disabled" args={{ disabled: true, placeholder: 'This textarea is disabled' }} />

<Story name="With Label">
	{#snippet template()}
		<div class="grid w-full gap-1.5">
			<Label for="message">Your message</Label>
			<Textarea placeholder="Type your message here." id="message" />
		</div>
	{/snippet}
</Story>

<Story name="With Error">
	{#snippet template()}
		<div class="grid w-full gap-1.5">
			<Label for="message-error">Your message</Label>
			<Textarea placeholder="Type your message here." id="message-error" aria-invalid="true" />
			<p class="text-sm text-destructive">Your message must be at least 10 characters.</p>
		</div>
	{/snippet}
</Story>

<Story name="With Helper Text">
	{#snippet template()}
		<div class="grid w-full gap-1.5">
			<Label for="message-help">Your message</Label>
			<Textarea placeholder="Type your message here." id="message-help" />
			<p class="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
		</div>
	{/snippet}
</Story>
