<script>
	import '../app.css';
	import  { injectAnalytics }  from '@vercel/analytics/sveltekit';

	injectAnalytics()

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>Scythe</title>
	<meta name="description" content="Plataforma educativa que combina billetera digital, mercado y gobernanza para economía basada en trabajo." />
</svelte:head>

<!-- Navbar -->
<nav class="flex justify-between items-center p-2 absolute top-0 left-1.5 right-0 z-10">
	<!-- Logo - Left -->
	<div class="flex items-center relative gap-1 ">
		<img src="/logo.png" alt="Scythe" class="h-5 w-auto" />
		<span class="text-white font-primary relative top-0.5" style="font-size: 20px; line-height: 20px;">SCYTHE</span>
	</div>
	
	<!-- Right Icons Group -->
	<div class="flex items-center gap-4 mt-0.5">
		<!-- Help Icon -->
		<button class="text-white">
			?
		</button>
		
		<!-- Hamburger Menu -->
		<button class="text-white">
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</nav>

{@render children?.()}
