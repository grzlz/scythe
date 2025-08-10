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
      message = '¡Enlace mágico enviado! Revisa tu email.';
    } catch (error) {
      message = error.message;
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700 p-4 font-primary">
  <div class="w-full max-w-md">
    <!-- Login Card -->
    <div class="glass-accent rounded-3xl p-10 shadow-2xl border border-white/10">
      <div class="mb-8 text-center">
        <h2 class="text-2xl font-light text-white/95 mb-3 tracking-wide">Bienvenido</h2>
        <p class="text-white/60 font-light text-sm">Ingresa tu email para continuar</p>
      </div>

      <form onsubmit={handleLogin} class="space-y-6">
        <!-- Email Input -->
        <div class="space-y-3">
          <input
            id="email"
            type="email"
            bind:value={email}
            disabled={isLoading}
            class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all duration-300 backdrop-blur-xl font-light"
            placeholder="Correo electrónico"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          disabled={isLoading || !email}
          class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary-500/20 to-primary-600/30 hover:from-primary-400/30 hover:to-primary-500/40 disabled:from-white/5 disabled:to-white/5 disabled:cursor-not-allowed text-white font-light backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-primary-500/10"
        >
          {isLoading ? 'Enviando...' : 'Continuar'}
        </button>
      </form>

      <!-- Message Display -->
      {#if message}
        <div class="mt-6 p-4 rounded-xl bg-primary-500/10 border border-primary-400/20 backdrop-blur-xl">
          <p class="text-primary-200 text-sm text-center font-light">{message}</p>
        </div>
      {/if}

      <!-- Footer -->
      <div class="mt-10 text-center">
        <p class="text-white/40 text-sm font-light">
          ¿Nuevo aquí? 
          <a href="/auth/register" class="text-white/70 hover:text-white/90 transition-all duration-300 font-normal ml-1">
            Solicitar acceso
          </a>
        </p>
      </div>
    </div>

    <!-- Additional Info -->
    <div class="mt-8 text-center">
      <a href="/about" class="text-white/30 hover:text-white/50 transition-all duration-300 text-xs font-light tracking-wide">
        Saber más →
      </a>
    </div>
  </div>
</div>