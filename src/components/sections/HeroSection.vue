<template>
  <section id="inicio" class="py-24 relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background grid -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_5px,transparent_5px),linear-gradient(90deg,rgba(99,102,241,0.03)_5px,transparent_5px)] bg-[size:64px_64px]" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary-500/40 mb-8 animate-fade-up">
        <span class="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
        <span class="text-primary-500 text-sm font-body font-medium">¡Explora la automatizacion empresarial!</span>
      </div>

      <!-- Main heading -->
      <h1 class="section-title text-4xl md:text-7xl lg:text-8xl mb-6" style="animation-delay: 100ms">
        Automatiza tu
        <br />
        <span class="gradient-text">empresa con</span> <Encodex class="text-5xl md:text-7xl lg:text-8xl"/>
      </h1>

      <!-- Subheading -->
      <p class="section-subtitle max-w-2xl mx-auto mb-10 text-xl" style="animation-delay: 200ms">
        Automatiza, conecta y escala tu negocio desde un solo lugar.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" style="animation-delay: 300ms">
        <p class="btn-primary text-base px-10 py-3" @click="vueRouter.push({name: 'modulos'})">
          Cotizar
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </p>
        <a href="#servicios" class="btn-outline text-base px-10 py-3">
          Ver servicios
        </a>
      </div>

      <!-- Stats row -->
      <div class="grid grid-cols-4 gap-8 max-w-xl mx-auto mt-10  pt-12 border-t border-white/5">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="font-display text-3xl font-bold gradient-text">{{ stat.value }}</p>
          <p class="text-gray-500 text-sm font-body mt-1">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
      <span class="text-xs font-body tracking-widest uppercase"></span>
      <div class="w-px h-12 bg-gradient-to-b from-primary-500/50 to-transparent" />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Encodex from '../ui/encodex.vue';

const vueRouter = useRouter();

const stats = [
  { value: '75', label: 'Clientes' },
  { value: '96',  label: 'Proyectos' },
  { value: '24', label: 'Casos de éxito' },
  { value: '99%', label: 'Porcentaje de satisfacción' },
]
</script>
