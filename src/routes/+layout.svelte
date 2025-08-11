<script>
	import '../app.css';
	import  { injectAnalytics }  from '@vercel/analytics/sveltekit';

	injectAnalytics()

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>Scythe - Economía Basada en Trabajo</title>
	<meta name="description" content="Plataforma educativa que combina billetera digital, mercado y gobernanza para economía basada en trabajo." />
</svelte:head>

<!-- Navbar -->
<nav class="flex justify-between items-center p-4 absolute top-0 left-3 right-0 z-10">
	<!-- Logo - Left -->
	<div>
		<img src="/logo.png" alt="Scythe" class="w-16 h-auto" />
		<span class="text-white font-bold text-lg font-primary">SCYTHE</span>
	</div>
	
	<!-- Right Icons Group -->
	<div class="flex items-center gap-4">
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
