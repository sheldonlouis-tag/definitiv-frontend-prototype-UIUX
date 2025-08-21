<script lang="ts">
	import '../../app.css';
	// Auth layout for split-screen design - completely independent of main layout
</script>

<div class="flex min-h-screen bg-gray-50 p-2">
	<!-- Left Column - Login Form -->
	<div class="flex-1 flex flex-col items-center justify-center px-2 py-16">
		<slot />
	</div>
	
	<!-- Right Column - Background Image -->
	<div class="flex-1 relative overflow-hidden rounded-lg">
		<div class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
			 style="background-image: url('/auth-hero.jpg');">
		</div>
		<!-- Access Logo overlay -->
		<div class="absolute bottom-14 right-14">
			<div class="flex items-center gap-2.5 h-[46px] w-[200px]">
				<!-- Access Logo in white -->
				<img src="/Access_Logo.png" alt="Access" class="h-full w-auto filter brightness-0 invert" />
			</div>
		</div>
	</div>
</div>
