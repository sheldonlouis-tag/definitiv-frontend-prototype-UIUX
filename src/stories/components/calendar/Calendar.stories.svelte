<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Calendar } from '$lib/components/ui/calendar/index.js';

	const { Story } = defineMeta({
		title: 'Components/Calendar',
		component: Calendar,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			numberOfMonths: {
				control: { type: 'number' },
				description: 'Number of months to display'
			}
		}
	});
</script>

<script lang="ts">
	import type { DateValue } from '@internationalized/date';

	let value: DateValue | undefined = undefined;
	let multipleValue: DateValue[] = [];
</script>

<Story name="Default">
	<Calendar type="single" bind:value />
</Story>

<Story name="Multiple Selection">
	<Calendar type="multiple" bind:value={multipleValue} />
</Story>

<Story name="Two Months">
	<Calendar type="single" bind:value numberOfMonths={2} />
</Story>

<Story name="With Disabled Dates">
	<Calendar type="single" bind:value />
</Story>

<Story name="Range Selection">
	<Calendar type="single" bind:value />
</Story>
