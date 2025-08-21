<script lang="ts">
	import '../app.css';
	import { CustomSidebar } from '$lib/components/layout/index.js';
	import { sidebarConfig } from '$lib/config/index.js';

	let { children } = $props();
</script>

<CustomSidebar config={sidebarConfig}>
	{@render children()}
</CustomSidebar>
