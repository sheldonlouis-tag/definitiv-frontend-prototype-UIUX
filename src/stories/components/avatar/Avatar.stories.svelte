<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar/index.js';

	const { Story } = defineMeta({
		title: 'Components/Avatar',
		component: Avatar,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Avatar>
		<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
		<AvatarFallback>CN</AvatarFallback>
	</Avatar>
</Story>

<Story name="Fallback">
	<Avatar>
		<AvatarImage src="https://broken-link.jpg" alt="@johndoe" />
		<AvatarFallback>JD</AvatarFallback>
	</Avatar>
</Story>

<Story name="Sizes">
	<div class="flex items-center space-x-4">
		<Avatar class="h-8 w-8">
			<AvatarImage src="https://github.com/shadcn.png" alt="Small" />
			<AvatarFallback class="text-xs">SM</AvatarFallback>
		</Avatar>
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="Default" />
			<AvatarFallback>MD</AvatarFallback>
		</Avatar>
		<Avatar class="h-12 w-12">
			<AvatarImage src="https://github.com/shadcn.png" alt="Large" />
			<AvatarFallback>LG</AvatarFallback>
		</Avatar>
		<Avatar class="h-16 w-16">
			<AvatarImage src="https://github.com/shadcn.png" alt="Extra Large" />
			<AvatarFallback class="text-lg">XL</AvatarFallback>
		</Avatar>
	</div>
</Story>

<Story name="Group">
	<div class="flex -space-x-2">
		<Avatar class="border-2 border-background">
			<AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
			<AvatarFallback>U1</AvatarFallback>
		</Avatar>
		<Avatar class="border-2 border-background">
			<AvatarImage src="https://github.com/vercel.png" alt="User 2" />
			<AvatarFallback>U2</AvatarFallback>
		</Avatar>
		<Avatar class="border-2 border-background">
			<AvatarFallback>U3</AvatarFallback>
		</Avatar>
		<Avatar class="border-2 border-background">
			<AvatarFallback>+2</AvatarFallback>
		</Avatar>
	</div>
</Story>

<Story name="With Status">
	<div class="flex items-center space-x-4">
		<div class="relative">
			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" alt="Online" />
				<AvatarFallback>ON</AvatarFallback>
			</Avatar>
			<div
				class="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-background bg-green-500"
			></div>
		</div>
		<div class="relative">
			<Avatar>
				<AvatarImage src="https://github.com/vercel.png" alt="Away" />
				<AvatarFallback>AW</AvatarFallback>
			</Avatar>
			<div
				class="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-background bg-yellow-500"
			></div>
		</div>
		<div class="relative">
			<Avatar>
				<AvatarFallback>OF</AvatarFallback>
			</Avatar>
			<div
				class="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-background bg-gray-400"
			></div>
		</div>
	</div>
</Story>
