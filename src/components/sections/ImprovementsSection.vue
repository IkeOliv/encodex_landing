<template>
  <section id="mejoras" class="py-24 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-primary-400 font-body font-medium tracking-widest uppercase text-sm mb-3">Hoja de ruta</p>
        <h2 class="section-title">Mejoras <span class="gradient-text">Futuras</span></h2>
        <p class="section-subtitle mt-4 max-w-xl mx-auto">
          Estos son los módulos que estamos desarrollando para llevar SICOV al siguiente nivel.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="improvement in improvements"
          :key="improvement.title"
          class="glass-card p-6 group hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
        >
          <!-- Coming soon badge -->
          <div class="absolute top-4 right-4">
            <span class="px-2 py-0.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-body">
              Próximamente
            </span>
          </div>

          <!-- Icon -->
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-800/10 border border-primary-500/15 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
            {{ improvement.emoji }}
          </div>

          <h3 class="font-display text-lg font-semibold text-white mb-3 leading-snug">
            {{ improvement.title }}
          </h3>
          <p class="text-gray-500 text-sm font-body leading-relaxed">
            {{ improvement.description }}
          </p>

          <!-- Decorative gradient -->
          <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const improvements = [
  {
    emoji: '🏛️',
    title: 'API Consultoría Gubernamental',
    description: 'Integración eficiente de datos gubernamentales en SICOV para acceso y actualización de información relevante.'
  },
  {
    emoji: '💬',
    title: 'API WhatsApp',
    description: 'Integración de WhatsApp en SICOV para facilitar la comunicación con clientes directamente desde la plataforma.'
  },
  {
    emoji: '🌐',
    title: 'Universo de Conexiones',
    description: 'SICOV es altamente adaptable, permitiendo implementar las herramientas específicas que tu empresa requiere.'
  },
  {
    emoji: '🤖',
    title: 'Integración de IA',
    description: 'La inteligencia artificial brindará recomendaciones para ayudar en la toma de decisiones estratégicas.'
  },
]
</script>
