<script>
  import { goto } from '$app/navigation';
  
  let email = $state('');
  let isLoading = $state(false);
  let message = $state('');

  async function handleLogin() {
    if (!email) return;
    
    isLoading = true;
    message = '';
    
    try {
      // TODO: Implement Supabase magic link auth
      message = 'Magic link sent! Check your email.';
    } catch (error) {
      message = error.message;
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 p-4 font-primary">
  <div class="w-full max-w-md">
    <!-- Logo/Brand Section -->
    <div class="text-center mb-8">
      <img src="/logo.png" alt="Scythe Logo" class="w-20 h-20 mx-auto mb-4 rounded-xl" />
      <h1 class="text-3xl font-bold text-white mb-2">Scythe</h1>
      <p class="text-white/70">Merit-Based Work Economy</p>
    </div>

    <!-- Login Card -->
    <div class="glass-accent rounded-2xl p-8 shadow-2xl">
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-white mb-2">Welcome Back</h2>
        <p class="text-white/70">Enter your email to receive a magic link</p>
      </div>

      <form onsubmit={handleLogin} class="space-y-6">
        <!-- Email Input -->
        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-white/90">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            bind:value={email}
            disabled={isLoading}
            class="w-full px-4 py-3 rounded-lg bg-secondary-800/20 border border-secondary-600/30 text-white placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-400/50 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
            placeholder="your@email.com"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          disabled={isLoading || !email}
          class="w-full py-3 px-4 rounded-lg bg-primary-600/50 hover:bg-primary-500/60 disabled:bg-secondary-800/50 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
        >
          {isLoading ? 'Sending Magic Link...' : 'Send Magic Link'}
        </button>
      </form>

      <!-- Message Display -->
      {#if message}
        <div class="mt-4 p-3 rounded-lg bg-primary-500/20 border border-primary-400/30">
          <p class="text-primary-100 text-sm text-center">{message}</p>
        </div>
      {/if}

      <!-- Footer -->
      <div class="mt-8 text-center">
        <p class="text-white/50 text-sm">
          New to Scythe? 
          <a href="/auth/register" class="text-primary-300 hover:text-primary-200 transition-colors underline">
            Request Access
          </a>
        </p>
      </div>
    </div>

    <!-- Additional Info -->
    <div class="mt-6 text-center">
      <a href="/about" class="text-secondary-400 hover:text-secondary-300 transition-colors text-sm">
        Learn more about Scythe →
      </a>
    </div>
  </div>
</div>