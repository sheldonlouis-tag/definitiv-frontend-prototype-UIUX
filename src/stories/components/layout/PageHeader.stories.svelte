<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { PageHeader } from '$lib/components/layout/index.js';

	/**
	 * PageHeader component stories showcasing different usage patterns.
	 * The PageHeader component provides a consistent header with title, subtitle, and breadcrumbs.
	 */
	const { Story } = defineMeta({
		title: 'Layout/PageHeader',
		component: PageHeader,
		parameters: {
			layout: 'padded'
		},
		tags: ['autodocs'],
		args: {
			title: 'Page Title',
			subtitle: '',
			showBreadcrumbs: true
		},
		argTypes: {
			title: {
				control: { type: 'text' },
				description: 'Main title text'
			},
			subtitle: {
				control: { type: 'text' },
				description: 'Subtitle text (appears after title with colon)'
			},
			showBreadcrumbs: {
				control: { type: 'boolean' },
				description: 'Whether to show breadcrumbs'
			}
		},
		render: template
	});
</script>

{#snippet template(args: Record<string, unknown>)}
	<PageHeader {...args} />
{/snippet}

<Story name="Basic" />

<Story name="With Subtitle" args={{ title: 'Employee', subtitle: 'Ms Doris Boyd' }} />

<Story name="Without Breadcrumbs" args={{ title: 'Employees', showBreadcrumbs: false }} />

<Story name="Long Title" args={{ 
	title: 'Department Management', 
	subtitle: 'Human Resources Department Overview' 
}} />

<Story name="Custom Breadcrumbs">
	{#snippet template()}
		<PageHeader 
			title="Employee" 
			subtitle="Ms Doris Boyd"
			breadcrumbs={[
							{ label: 'Employee Hub', href: '/employee' },
			{ label: 'My Details', href: '/employee/details' }
			]}
		/>
	{/snippet}
</Story>

<Story name="Multiple Breadcrumbs">
	{#snippet template()}
		<PageHeader 
			title="Settings" 
			subtitle="User Preferences"
			breadcrumbs={[
				{ label: 'Home', href: '/' },
							{ label: 'Settings', href: '/settings' },
			{ label: 'User Preferences', href: '/settings/preferences' }
			]}
		/>
	{/snippet}
</Story>
