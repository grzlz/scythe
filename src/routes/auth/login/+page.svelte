<script>
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient.js';
  import { connectWallet, isWalletAvailable } from '$lib/web3Auth.js';

  let connectionStatus = $state('testing...');
  let walletAddress = $state(null);
  let isConnecting = $state(false);
  let walletAvailable = $state(false);

  onMount(async () => {
    walletAvailable = isWalletAvailable();

    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        connectionStatus = `Error: ${error.message}`;
      } else {
        connectionStatus = 'Connected to Supabase ✅';
      }
    } catch (err) {
      connectionStatus = `Connection failed: ${err}`;
    }
  });

  async function handleWalletConnect() {
    if (isConnecting) return;

    isConnecting = true;
    try {
      const address = await connectWallet();
      walletAddress = address;

      await authenticateWithSupabase(address);
    } catch (error) {
      alert(String(error));
    } finally {
      isConnecting = false;
    }
  }

  async function authenticateWithSupabase(address) {
    try {
      const { data, error } = await supabase.auth.signInWithWeb3({
        chain: 'ethereum',
        statement: 'I accept the Terms of Service for Scythe and authorize this wallet connection.'
      });

      if (error) {
        throw error;
      }

      console.log('Authenticated with Supabase:', data);
    } catch (error) {
      console.error('Supabase auth error:', error);
      throw new Error(`Authentication failed: ${String(error)}`);
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-900 to-secondary-800 p-6 font-primary">
  <div class="text-center space-y-12">
    <!-- Hero Text -->
    <div class="space-y-4">
      <h1 class="text-5xl font-light text-white/95 tracking-wide leading-tight">
        Login to Scythe
      </h1>
      <p class="text-white/60 text-lg font-light">
        Connect your Ethereum wallet to continue
      </p>
    </div>

    <!-- Connection Status -->
    <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4">
      <p class="text-white/80 font-light">
        Supabase Status: {connectionStatus}
      </p>

      {#if walletAvailable}
        <div class="space-y-4">
          {#if !walletAddress}
            <button
              onclick={handleWalletConnect}
              disabled={isConnecting}
              class="bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:opacity-50 backdrop-blur-xl rounded-xl border border-white/10 px-6 py-3 text-white/90 font-light transition-all duration-300 disabled:cursor-not-allowed"
            >
              {isConnecting ? 'Connecting...' : 'Connect Uniswap Wallet'}
            </button>
          {:else}
            <div class="space-y-2">
              <p class="text-green-400 font-light">Wallet Connected ✅</p>
              <p class="text-white/60 text-sm font-mono break-all">
                {walletAddress}
              </p>
            </div>
          {/if}
        </div>
      {:else}
        <p class="text-orange-400 font-light">
          Please install Uniswap wallet or compatible Web3 wallet
        </p>
      {/if}
    </div>

    <!-- Footer -->
    <div class="space-y-6">
      <a href="/" class="inline-block text-white/30 hover:text-white/50 transition-all duration-300 text-xs font-light tracking-wide">
        ← Volver al inicio
      </a>
    </div>
  </div>
</div>