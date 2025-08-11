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

<div class="min-h-screen flex items-center justify-between bg-gradient-to-br from-secondary-900 to-secondary-800 p-3 font-primary">
  <div class="w-full max-w-md flex flex-col items-center">
    <!-- Hero Text -->
    <div class=" p-6 mb-12">
      <h1 class="text-5xl font-light text-white/95 tracking-wide">
        Acceso temprano a<br>nuestro ecosistema
      </h1>
    </div>
    <!-- Enter Button -->
    <div class="text-center">
      <button
        onclick={() => goto('/auth/login')}
        class="px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-light text-lg backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-lg"
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

    <!-- Footer -->
    <div class="mt-10 text-center">
      <p class="text-white/40 text-sm font-light">
        ¿Nuevo aquí? 
        <a href="/auth/register" class="text-white/70 hover:text-white/90 transition-all duration-300 font-normal ml-1">
          Solicitar acceso
        </a>
      </p>
    </div>

    <!-- Additional Info -->
    <div class="mt-8 text-center">
      <a href="/about" class="text-white/30 hover:text-white/50 transition-all duration-300 text-xs font-light tracking-wide">
        Saber más →
      </a>
    </div>
  </div>
</div>