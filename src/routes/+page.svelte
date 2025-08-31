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

<div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-secondary-900 to-secondary-800 p-6 font-primary">
  <div class="max-w-lg text-left space-y-16">
    <!-- Hero Text -->
    <div>
      <h1 class="text-5xl font-light text-white/95 tracking-wide leading-tight">
        Acceso temprano a Scythe
      </h1>
    </div>
    
    <!-- Enter Button -->
    <div>
      <button
        onclick={() => goto('/auth/login')}
        class="px-6 py-2 bg-white/5 hover:bg-white/10 text-white font-medium text-lg rounded-md border border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300"
      >
        Entrar
      </button>
    </div>

    <!-- Message Display -->
    {#if message}
      <div class="mt-6 p-4 rounded-xl bg-primary-500/10 border border-primary-400/20 backdrop-blur-xl">
        <p class="text-primary-200 text-sm text-center font-light">{message}</p>
      </div>
    {/if}

  </div>
</div>