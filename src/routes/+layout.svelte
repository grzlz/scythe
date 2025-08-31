<script>
	import '../app.css';
	import  { injectAnalytics }  from '@vercel/analytics/sveltekit';

	injectAnalytics()

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<title>Scythe</title>
	<meta name="description" content="Producir sin capital." />
</svelte:head>

<nav class="flex justify-between items-center px-3 py-1 fixed top-0 left-1 right-0 z-10 backdrop-blur-xs">
	<div class="flex items-center">
		<img src="/logo.png" alt="Scythe" class="h-9.5 w-auto" />
		<span class="text-white font-primary text-xl">Scythe</span>
	</div>
	
	<div class="flex items-center gap-4 mr-1">
		<!-- Help Icon -->
		<button class="text-white">	
			?
		</button>
		
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="text-white">
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</nav>

{@render children?.()}
