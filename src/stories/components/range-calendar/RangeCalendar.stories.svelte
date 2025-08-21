<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';

	const { Story } = defineMeta({
		title: 'Components/RangeCalendar',
		component: RangeCalendar,
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
	import { today, getLocalTimeZone } from '@internationalized/date';

	let value = {
		start: today(getLocalTimeZone()),
		end: today(getLocalTimeZone()).add({ days: 7 })
	};
	let singleValue = {
		start: today(getLocalTimeZone()),
		end: undefined
	};
</script>

<Story name="Default">
	<RangeCalendar bind:value />
</Story>

<Story name="Two Months">
	<RangeCalendar bind:value numberOfMonths={2} />
</Story>

<Story name="Single Date Selected">
	<RangeCalendar bind:value={singleValue} />
</Story>

<Story name="With Disabled Dates">
	<RangeCalendar
		bind:value
		isDateDisabled={(date) => {
			const todayDate = today(getLocalTimeZone());
			const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
			return date.compare(todayDate) < 0 || dayOfWeek === 0 || dayOfWeek === 6;
		}}
	/>
</Story>

<Story name="Preset Ranges">
	<div class="space-y-4">
		<div class="flex space-x-2">
			<button class="rounded border px-3 py-1 text-sm hover:bg-muted">Today</button>
			<button class="rounded border px-3 py-1 text-sm hover:bg-muted">Yesterday</button>
			<button class="rounded border px-3 py-1 text-sm hover:bg-muted">Last 7 days</button>
			<button class="rounded border px-3 py-1 text-sm hover:bg-muted">Last 30 days</button>
		</div>
		<RangeCalendar bind:value class="rounded-md border" />
	</div>
</Story>
