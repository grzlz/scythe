<script>
  import { onMount } from 'svelte';
  
  let timeLeft = $state({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  let targetDate = $state(null);
  let intervalId = $state(null);

  onMount(() => {
    targetDate = new Date('2025-09-22T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        timeLeft = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        if (intervalId) clearInterval(intervalId);
      }
    };
    
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  });
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br  from-secondary-900 to-secondary-800  p-6 font-primary">
  <div class="text-center space-y-12">
    <!-- Hero Text -->
    <div class="space-y-4">
      <h1 class="text-5xl font-light text-white/95 tracking-wide leading-tight">
        El lanzamiento se acerca
      </h1>
      <p class="text-white/60 text-lg font-light">
        Scythe estará disponible pronto
      </p>
    </div>

    <!-- Countdown Display -->
    <div class="grid grid-cols-4 gap-6 max-w-2xl mx-auto">
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
        <div class="text-4xl font-light text-white/95 mb-2">{String(timeLeft.days).padStart(2, '0')}</div>
        <div class="text-white/60 text-sm font-light tracking-wide">DÍAS</div>
      </div>
      
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
        <div class="text-4xl font-light text-white/95 mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div class="text-white/60 text-sm font-light tracking-wide">HORAS</div>
      </div>
      
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
        <div class="text-4xl font-light text-white/95 mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div class="text-white/60 text-sm font-light tracking-wide">MINUTOS</div>
      </div>
      
      <div class="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
        <div class="text-4xl font-light text-white/95 mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div class="text-white/60 text-sm font-light tracking-wide">SEGUNDOS</div>
      </div>
    </div>

    <!-- Footer -->
    <div class="space-y-6">
      <p class="text-white/40 text-sm font-light">
        Mientras tanto, puedes 
        <a href="https://blog.scythe.mx" target="_blank" class="text-white/70 hover:text-white/90 transition-all duration-300 font-normal">
          conocer más sobre Scythe
        </a>
      </p>
      
      <a href="/" class="inline-block text-white/30 hover:text-white/50 transition-all duration-300 text-xs font-light tracking-wide">
        ← Volver al inicio
      </a>
    </div>
  </div>
</div>