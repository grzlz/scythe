<script>
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient.js';
  import { getTokenBalance } from '$lib/tokenUtils.js';
  import { goto } from '$app/navigation';

  let user = $state(null);
  let walletAddress = $state(null);
  let scytheBalance = $state(null);
  let isLoading = $state(true);
  let balanceLoading = $state(false);

  onMount(async () => {
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        goto('/auth/login');
        return;
      }

      user = data.session.user;
      walletAddress = user.user_metadata?.wallet_address;

      if (walletAddress) {
        await fetchBalance();
      }
    } catch (err) {
      console.error('Dashboard error:', err);
      goto('/auth/login');
    } finally {
      isLoading = false;
    }
  });

  async function fetchBalance() {
    if (!walletAddress) return;

    balanceLoading = true;
    try {
      const balance = await getTokenBalance(walletAddress);
      // Remove decimals for cleaner display
      scytheBalance = Math.floor(parseFloat(balance)).toLocaleString();
    } catch (error) {
      console.error('Failed to fetch balance:', error);
      scytheBalance = 'Error loading balance';
    } finally {
      balanceLoading = false;
    }
  }

  async function refreshBalance() {
    await fetchBalance();
  }

  async function logout() {
    await supabase.auth.signOut();
    goto('/auth/login');
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-secondary-900 to-secondary-800 p-3 sm:p-6 font-primary">
  <div class="max-w-4xl mx-auto space-y-8">

    <!-- Header -->
    <div class="flex justify-between items-center gap-2">
      <div class="min-w-0 flex-1 overflow-hidden">
        <h1 class="text-lg font-light text-white/95 tracking-wide truncate">
          Scythe
        </h1>
      </div>
      <button
        onclick={logout}
        class="bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-lg border border-white/10 px-3 py-1.5 text-white/90 font-light transition-all duration-300 whitespace-nowrap text-sm flex-shrink-0"
      >
        Logout
      </button>
    </div>

    {#if isLoading}
      <div class="text-center">
        <p class="text-white/60 text-lg font-light">Loading dashboard...</p>
      </div>
    {:else}
      <!-- Wallet Info Card -->
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-4">
        <h2 class="text-2xl font-light text-white/95">Wallet Information</h2>

        {#if walletAddress}
          <div class="space-y-3">
            <div>
              <p class="text-white/60 text-sm font-light">Connected Wallet</p>
              <p class="text-white/90 font-mono text-sm break-all">{walletAddress}</p>
            </div>

            <div>
              <p class="text-white/60 text-sm font-light">Scythe (SCD) Balance</p>
              <div class="flex items-center gap-3">
                {#if balanceLoading}
                  <p class="text-white/90 text-lg font-light">Loading...</p>
                {:else if scytheBalance}
                  <p class="text-white/90 text-lg font-light">{scytheBalance} SCD</p>
                  <button
                    onclick={refreshBalance}
                    class="bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-lg border border-white/10 px-3 py-1 text-white/90 text-sm font-light transition-all duration-300"
                  >
                    Refresh
                  </button>
                {:else}
                  <p class="text-orange-400 text-lg font-light">Unable to load balance</p>
                {/if}
              </div>
            </div>
          </div>
        {:else}
          <p class="text-orange-400 font-light">No wallet connected</p>
        {/if}
      </div>

      <!-- Future Features Placeholder -->
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
        <h2 class="text-2xl font-light text-white/95 mb-4">Coming Soon</h2>
        <div class="space-y-2 text-white/60 font-light">
          <p>• Sprint rewards & token distribution</p>
          <p>• Token transfer functionality</p>
          <p>• Activity history</p>
          <p>• Team collaboration tools</p>
        </div>
      </div>
    {/if}
  </div>
</div>