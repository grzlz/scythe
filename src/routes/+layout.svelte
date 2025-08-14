<script>
	import '../app.css';
	import  { injectAnalytics }  from '@vercel/analytics/sveltekit';

	injectAnalytics()

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>Scythe</title>
	<meta name="description" content="Ecosistema de producción de software." />
</svelte:head>

<!-- Navbar -->
<nav class="flex justify-between items-center p-2 fixed top-0 left-0 right-0 z-10 backdrop-blur-xs">
	<!-- Logo - Left -->
	<div class="flex items-center relative gap-1 top-0.5">
		<img src="/logo.png" alt="Scythe" class="h-8 w-auto" />
		<span class="text-white font-primary relative top-0.5" style="font-size: 20px; line-height: 20px;">SCYTHE</span>
	</div>
	
	<!-- Right Icons Group -->
	<div class="flex items-center gap-4 mt-1 mr-1">
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
