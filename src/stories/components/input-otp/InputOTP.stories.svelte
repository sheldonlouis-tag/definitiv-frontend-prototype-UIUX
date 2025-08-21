<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		InputOTP,
		InputOTPGroup,
		InputOTPSeparator,
		InputOTPSlot
	} from '$lib/components/ui/input-otp/index.js';

	const { Story } = defineMeta({
		title: 'Components/InputOTP',
		component: InputOTP,
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		argTypes: {
			maxlength: {
				control: { type: 'number' },
				description: 'Maximum number of characters'
			},
			value: {
				control: { type: 'text' },
				description: 'The OTP value'
			}
		}
	});
</script>

<script lang="ts">
	let value = '';
	let value6 = '';
	let valuePattern = '';
</script>

<Story name="Default">
	<div class="space-y-2">
		<InputOTP maxlength={6} bind:value>
			{#snippet children({ cells })}
				<InputOTPGroup>
					{#each cells as cell, i (i)}
						{#if i < 6}
							<InputOTPSlot {cell} />
						{/if}
					{/each}
				</InputOTPGroup>
			{/snippet}
		</InputOTP>
		<div class="text-center text-sm">
			{value ? `Entered value: ${value}` : 'Enter your one-time password'}
		</div>
	</div>
</Story>

<Story name="With Separator">
	<div class="space-y-2">
		<InputOTP maxlength={6} bind:value={value6}>
			{#snippet children({ cells })}
				<InputOTPGroup>
					{#each cells.slice(0, 3) as cell, i (i)}
						<InputOTPSlot {cell} />
					{/each}
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup>
					{#each cells.slice(3, 6) as cell, i (i + 3)}
						<InputOTPSlot {cell} />
					{/each}
				</InputOTPGroup>
			{/snippet}
		</InputOTP>
		<div class="text-center text-sm">
			{value6 ? `Entered value: ${value6}` : 'Enter your verification code'}
		</div>
	</div>
</Story>

<Story name="Pattern (Numbers Only)">
	<div class="space-y-2">
		<InputOTP maxlength={4} pattern="[0-9]*" bind:value={valuePattern}>
			{#snippet children({ cells })}
				<InputOTPGroup>
					{#each cells as cell, i (i)}
						<InputOTPSlot {cell} />
					{/each}
				</InputOTPGroup>
			{/snippet}
		</InputOTP>
		<div class="text-center text-sm">
			{valuePattern ? `PIN: ${valuePattern}` : 'Enter your 4-digit PIN'}
		</div>
	</div>
</Story>

<Story name="Different Sizes">
	<div class="space-y-6">
		<div class="space-y-2">
			<div class="text-sm font-medium">Small (4 digits)</div>
			<InputOTP maxlength={4}>
				{#snippet children({ cells })}
					<InputOTPGroup>
						{#each cells as cell, i (i)}
							<InputOTPSlot {cell} />
						{/each}
					</InputOTPGroup>
				{/snippet}
			</InputOTP>
		</div>

		<div class="space-y-2">
			<div class="text-sm font-medium">Medium (6 digits)</div>
			<InputOTP maxlength={6}>
				{#snippet children({ cells })}
					<InputOTPGroup>
						{#each cells as cell, i (i)}
							<InputOTPSlot {cell} />
						{/each}
					</InputOTPGroup>
				{/snippet}
			</InputOTP>
		</div>

		<div class="space-y-2">
			<div class="text-sm font-medium">Large (8 digits)</div>
			<InputOTP maxlength={8}>
				{#snippet children({ cells })}
					<InputOTPGroup>
						{#each cells.slice(0, 4) as cell, i (i)}
							<InputOTPSlot {cell} />
						{/each}
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						{#each cells.slice(4, 8) as cell, i (i + 4)}
							<InputOTPSlot {cell} />
						{/each}
					</InputOTPGroup>
				{/snippet}
			</InputOTP>
		</div>
	</div>
</Story>
