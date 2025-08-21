<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		FormButton,
		FormDescription,
		FormFieldErrors,
		FormLabel
	} from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';

	const { Story } = defineMeta({
		title: 'Components/Form',
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<div class="w-full max-w-md">
		<form class="space-y-6">
			<div class="space-y-2">
				<FormLabel>Email</FormLabel>
				<Input type="email" placeholder="Enter your email" />
				<FormDescription>We'll never share your email with anyone else.</FormDescription>
				<FormFieldErrors />
			</div>

			<div class="space-y-2">
				<FormLabel>Password</FormLabel>
				<Input type="password" placeholder="Enter your password" />
				<FormFieldErrors />
			</div>

			<FormButton>
				<Button type="submit" class="w-full">Sign In</Button>
			</FormButton>
		</form>
	</div>
</Story>

<Story name="Registration Form">
	<div class="w-full max-w-md">
		<form class="space-y-6">
			<div class="space-y-2">
				<FormLabel>First Name</FormLabel>
				<Input placeholder="John" />
				<FormFieldErrors />
			</div>

			<div class="space-y-2">
				<FormLabel>Last Name</FormLabel>
				<Input placeholder="Doe" />
				<FormFieldErrors />
			</div>

			<div class="space-y-2">
				<FormLabel>Email</FormLabel>
				<Input type="email" placeholder="john@example.com" />
				<FormDescription>This will be your login email.</FormDescription>
				<FormFieldErrors />
			</div>

			<div class="space-y-2">
				<FormLabel>Bio</FormLabel>
				<Textarea placeholder="Tell us about yourself..." />
				<FormDescription>Optional: Share a brief description about yourself.</FormDescription>
				<FormFieldErrors />
			</div>

			<FormButton>
				<Button type="submit" class="w-full">Create Account</Button>
			</FormButton>
		</form>
	</div>
</Story>

<Story name="Contact Form">
	<div class="w-full max-w-lg">
		<form class="space-y-6">
			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-2">
					<FormLabel>First Name</FormLabel>
					<Input placeholder="First name" />
					<FormFieldErrors />
				</div>

				<div class="space-y-2">
					<FormLabel>Last Name</FormLabel>
					<Input placeholder="Last name" />
					<FormFieldErrors />
				</div>
			</div>

			<div class="space-y-2">
				<FormLabel>Email</FormLabel>
				<Input type="email" placeholder="your@email.com" />
				<FormFieldErrors />
			</div>

			<div class="space-y-2">
				<FormLabel>Subject</FormLabel>
				<Input placeholder="What's this about?" />
				<FormFieldErrors />
			</div>

			<div class="space-y-2">
				<FormLabel>Message</FormLabel>
				<Textarea placeholder="Your message..." rows={4} />
				<FormDescription>Please provide as much detail as possible.</FormDescription>
				<FormFieldErrors />
			</div>

			<FormButton>
				<Button type="submit" class="w-full">Send Message</Button>
			</FormButton>
		</form>
	</div>
</Story>
