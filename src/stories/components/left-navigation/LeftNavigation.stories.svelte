<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SimpleNavigation from './SimpleNavigation.svelte';
	import AdvancedNavigation from './AdvancedNavigation.svelte';
	
	const { Story } = defineMeta({
		title: 'Components/LeftNavigation',
		component: SimpleNavigation
	});
</script>

<Story name="Simple">
	<SimpleNavigation />
</Story>

<Story name="Advanced" component={AdvancedNavigation}>
	<AdvancedNavigation />
</Story>
