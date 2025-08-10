<script>
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics';

	injectAnalytics()

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/icarus_logo.png" />
	<title>Scythe - Work-Based Economy</title>
	<meta name="description" content="Educational platform combining digital wallet, marketplace, and governance for work-based economy." />
</svelte:head>

{@render children?.()}
