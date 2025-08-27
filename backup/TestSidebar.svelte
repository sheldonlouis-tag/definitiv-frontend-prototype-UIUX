<script lang="ts">
	console.log('TestSidebar component loaded');
	
	let testItems = [
		{ label: 'Test Item 1', href: '/test1' },
		{ label: 'Test Item 2', subItems: [
			{ label: 'Sub Item 1', href: '/test2/sub1' },
			{ label: 'Sub Item 2', href: '/test2/sub2' }
		]},
		{ label: 'Test Item 3', onclick: () => console.log('Test click!') }
	];
	
	function handleClick(item: any) {
		console.log('🔥 CLICK DETECTED:', item.label);
		
		if (item.onclick) {
			console.log('🔥 Calling onclick');
			item.onclick();
		} else if (item.href) {
			console.log('🔥 Would navigate to:', item.href);
		} else {
			console.log('🔥 No action defined');
		}
	}
</script>

<div class="p-4 border">
	<h3>Test Sidebar</h3>
	<ul>
		{#each testItems as item}
			<li class="p-2 border-b">
				<button 
					type="button"
					class="text-left hover:bg-gray-100 p-2 rounded w-full"
					onclick={() => handleClick(item)}
				>
					{item.label}
				</button>
				
				{#if item.subItems}
					<ul class="ml-4 mt-2">
						{#each item.subItems as subItem}
							<li>
								<button 
									type="button"
									class="text-left hover:bg-gray-200 p-1 rounded w-full text-sm"
									onclick={() => handleClick(subItem)}
								>
									{subItem.label}
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</div>
