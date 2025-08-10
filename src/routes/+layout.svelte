<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/icarus_logo.png" />
	<title>Scythe - Merit-Based Work Economy</title>
	<meta name="description" content="Educational platform combining digital wallet, marketplace, and governance for merit-based work economy." />
</svelte:head>

{@render children?.()}
