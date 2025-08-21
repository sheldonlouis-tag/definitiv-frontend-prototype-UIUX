<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion/index.js';

	const { Story } = defineMeta({
		title: 'Components/Accordion',
		component: Accordion,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			type: {
				control: { type: 'select' },
				options: ['single', 'multiple'],
				description: 'Whether single or multiple items can be open'
			},
			value: {
				control: { type: 'text' },
				description: 'The controlled value of the item to expand'
			}
		}
	});
</script>

<Story name="Default">
	<div class="w-full max-w-md">
		<Accordion type="single">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that matches the other components' aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It's animated by default, but you can disable it if you prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	</div>
</Story>

<Story name="Multiple">
	<div class="w-full max-w-md">
		<Accordion type="multiple">
			<AccordionItem value="item-1">
				<AccordionTrigger>Can I open multiple items?</AccordionTrigger>
				<AccordionContent>
					Yes! When multiple is enabled, you can have several accordion items open at once.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>How does it work?</AccordionTrigger>
				<AccordionContent>
					Simply set the multiple prop to true and users can expand multiple sections
					simultaneously.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Any limitations?</AccordionTrigger>
				<AccordionContent>
					No significant limitations. It works great for FAQ sections and content organization.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	</div>
</Story>

<Story name="With Rich Content">
	<div class="w-full max-w-md">
		<Accordion type="single">
			<AccordionItem value="features">
				<AccordionTrigger>Key Features</AccordionTrigger>
				<AccordionContent>
					<ul class="list-disc space-y-1 pl-4">
						<li>Fully accessible with keyboard navigation</li>
						<li>Smooth animations and transitions</li>
						<li>Customizable styling</li>
						<li>Support for rich content</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="usage">
				<AccordionTrigger>Usage Examples</AccordionTrigger>
				<AccordionContent>
					<div class="space-y-2">
						<p><strong>FAQ Sections:</strong> Perfect for organizing frequently asked questions.</p>
						<p><strong>Settings Panels:</strong> Group related configuration options.</p>
						<p>
							<strong>Content Organization:</strong> Structure complex information hierarchically.
						</p>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	</div>
</Story>
