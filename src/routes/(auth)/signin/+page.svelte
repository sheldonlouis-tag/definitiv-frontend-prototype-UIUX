<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { authStore, authActions } from '$lib/stores/auth.js';
	import { goto } from '$app/navigation';

	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Mail from '@lucide/svelte/icons/mail';
	import Eye from '@lucide/svelte/icons/eye';
	import EyeOff from '@lucide/svelte/icons/eye-off';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	
	let email = '';
	let password = '';
	let isEmailValid = false;
	let isPasswordValid = false;
	let isSubmitting = false;
	let showPassword = false;
	let step = 'email'; // 'email' or 'password'
	
	// Email validation
	$: isEmailValid = email.includes('@') && email.includes('.') && email.length > 5;
	
	// Password validation (minimum 8 characters, at least one letter and one number)
	$: isPasswordValid = password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
	
	$: ({ isLoading, error } = $authStore);
	
	async function handleEmailSubmit() {
		if (!isEmailValid || isSubmitting) return;
		
		isSubmitting = true;
		// Simulate email validation
		await new Promise(resolve => setTimeout(resolve, 1000));
		step = 'password';
		isSubmitting = false;
	}
	
	async function handlePasswordSubmit() {
		if (!isPasswordValid || isSubmitting) return;
		
		isSubmitting = true;
		const success = await authActions.signIn(email);
		
		if (success) {
			// Redirect to dashboard after successful signin
			await goto('/app?auth=true');
		}
		
		isSubmitting = false;
	}
	
	function goBackToEmail() {
		step = 'email';
		password = '';
	}
	
	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
</script>


<div class="w-full max-w-[544px]">
	<!-- Login Form Card -->
	<div class="bg-white rounded-xl p-6 shadow-[0px_0px_12px_0px_rgba(6,12,19,0.12)] border border-[#dadee3]">
		<div class="flex flex-col gap-5">
			<!-- Header Section -->
			<div class="flex flex-col gap-4">
				<!-- Access Logo -->
				<div class="h-[33px] w-36">
					<img src="/Access_Logo.png" alt="Access" class="h-full w-auto" />
				</div>
				
				<!-- Title -->
				<h1 class="text-[28px] font-semibold text-[#2a2e33] leading-[36px] tracking-[-0.24px]">
					Sign in
				</h1>
				
				<!-- Description -->
				<p class="text-[16px] text-[#43484e] leading-[24px]">
					{#if step === 'email'}
						Please enter your email address to sign in to your Access products.
					{:else}
						Good morning, {email.split('@')[0]}. Please enter your password to continue signing in.
					{/if}
				</p>
			</div>
			
			<!-- Form Section -->
			{#if step === 'email'}
				<form on:submit|preventDefault={handleEmailSubmit} class="flex flex-col gap-3">
					<!-- Email Input -->
					<div class="flex flex-col gap-2">
						<Label class="text-[14px] font-semibold text-[#12171b] leading-[16px] tracking-[0.24px]">
							Email address <span class="text-[#be0000]">*</span>
						</Label>
						<div class="relative">
							<Input
								bind:value={email}
								type="email"
								placeholder="Enter your email address"
								class="h-10 px-3 py-2 text-[14px] leading-[20px] tracking-[0.18px] border-[#007373] focus:border-[#007373] focus:ring-[#0065b7] focus:ring-4 focus:ring-opacity-50 rounded-lg bg-white"
							/>
							<div class="absolute right-3 top-1/2 transform -translate-y-1/2">
								<Mail class="w-5 h-5 text-[#5e6469]" />
							</div>
						</div>
						{#if email && !isEmailValid}
							<div class="text-[14px] text-[#be0000] leading-[16px]">
								Please enter a valid email address.
							</div>
						{/if}
					</div>
					
					<!-- Error Message -->
					{#if error}
						<div class="text-[14px] text-[#be0000] leading-[16px]">
							{error}
						</div>
					{/if}
					
					<!-- Button Row -->
					<div class="flex items-center justify-between">
						<!-- Forgotten password link (hidden for now) -->
						<div class="text-[0px] text-[#0065b7]">
							Forgotten your password?
						</div>
						
						<!-- Next Button -->
						<Button
							type="submit"
							disabled={!isEmailValid || isLoading || isSubmitting}
							class="h-9 px-3.5 bg-[#007373] text-white hover:bg-[#005a5a] disabled:bg-[#dadee3] disabled:text-[#999fa5] rounded-lg font-semibold text-[16px] leading-[16px] tracking-[0.24px] transition-colors"
						>
							{#if isLoading || isSubmitting}
								Signing in...
							{:else}
								Next
								<ChevronRight class="w-4 h-4" />
							{/if}
						</Button>
					</div>
				</form>
			{:else}
				<form on:submit|preventDefault={handlePasswordSubmit} class="flex flex-col gap-3">
					<!-- Password Input -->
					<div class="flex flex-col gap-2">
						<Label class="text-[14px] font-semibold text-[#12171b] leading-[16px] tracking-[0.24px]">
							Password <span class="text-[#be0000]">*</span>
						</Label>
						<div class="relative">
							<Input
								bind:value={password}
								type={showPassword ? 'text' : 'password'}
								placeholder="Enter your password"
								class="h-10 px-3 py-2 text-[14px] leading-[20px] tracking-[0.18px] border-[#007373] focus:border-[#007373] focus:ring-[#0065b7] focus:ring-4 focus:ring-opacity-50 rounded-lg bg-white pr-10"
							/>
							<button
								type="button"
								on:click={togglePasswordVisibility}
								class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5e6469] hover:text-[#2a2e33]"
							>
								{#if showPassword}
									<EyeOff class="w-5 h-5" />
								{:else}
									<Eye class="w-5 h-5" />
								{/if}
							</button>
						</div>
						{#if password && !isPasswordValid}
							<div class="text-[14px] text-[#be0000] leading-[16px]">
								Password must be at least 8 characters with letters and numbers.
							</div>
						{/if}
					</div>
					
					<!-- Error Message -->
					{#if error}
						<div class="text-[14px] text-[#be0000] leading-[16px]">
							{error}
						</div>
					{/if}
					
					<!-- Button Row -->
					<div class="flex items-center justify-between">
						<!-- Back to email link -->
						<button
							type="button"
							on:click={goBackToEmail}
							class="text-[14px] text-[#0065b7] hover:text-[#005a5a] flex items-center gap-1"
						>
							<ArrowLeft class="w-4 h-4" />
							Back
						</button>
						
						<!-- Continue Button -->
						<Button
							type="submit"
							disabled={!isPasswordValid || isLoading || isSubmitting}
							class="h-9 px-3.5 bg-[#007373] text-white hover:bg-[#005a5a] disabled:bg-[#dadee3] disabled:text-[#999fa5] rounded-lg font-semibold text-[16px] leading-[16px] tracking-[0.24px] transition-colors"
						>
							{#if isLoading || isSubmitting}
								Signing in...
							{:else}
								Continue
								<ChevronRight class="w-4 h-4" />
							{/if}
						</Button>
					</div>
				</form>
			{/if}
		</div>
	</div>
	
	<!-- Footer Section -->
	<div class="mt-16 px-8">
		<div class="flex flex-col gap-4">
			<!-- Access Logo + Socials Row -->
			<div class="flex items-start justify-between">
				<!-- Access Logo -->
				<div class="flex items-center gap-2">
					<img src="/Access_Logo_Tagline.png" alt="Access - freedom to do more" class="h-6 w-auto" />
				</div>
				
				<!-- Social Icons -->
				<div class="flex gap-2">
					<!-- Facebook -->
					<div class="w-6 h-6 bg-[#1877f2] rounded flex items-center justify-center">
						<span class="text-white text-xs">f</span>
					</div>
					<!-- LinkedIn -->
					<div class="w-6 h-6 bg-[#0077b5] rounded flex items-center justify-center">
						<span class="text-white text-xs">in</span>
					</div>
					<!-- Twitter/X -->
					<div class="w-6 h-6 bg-black rounded flex items-center justify-center">
						<span class="text-white text-xs">𝕏</span>
					</div>
					<!-- Play -->
					<div class="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
						<span class="text-white text-xs">▶</span>
					</div>
				</div>
			</div>
			
			<!-- Copyright -->
			<p class="text-[14px] text-[#43484e] leading-[16px] tracking-[0.18px]">
				Copyright © 2025 The Access Group. All rights reserved.
			</p>
		</div>
	</div>
</div>
