<template>
  <section id="beneficios" class=" relative overflow-hidden">
    <!-- Decorative element -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div>
          <p class="text-primary-400 font-body font-medium tracking-widest uppercase text-sm mb-3">Ventajas</p>
          <h2 class="section-title mb-6">
            ¿Por qué encodex <br/><span class="gradient-text"></span>
          </h2>
          <p class="section-subtitle mb-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut laborum vitae quaerat quam mollitia aperiam autem dolorum accusamus dolor recusandae accusantium consequuntur aliquam officiis sunt, repellendus similique consequatur! Quam, fugit.
          </p>
          <a href="#contacto" class="btn-primary">
            Empieza hoy
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <!-- Right: Benefits list -->
        <div class="space-y-4">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="glass-card p-5 flex items-start gap-4 group hover:border-primary-500/30 transition-all duration-300 hover:-translate-x-1"
          >
            <div class="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
              <span class="text-lg">{{ benefit.emoji }}</span>
            </div>
            <div>
              <h3 class="font-display text-white font-semibold mb-1">{{ benefit.title }}</h3>
              <p class="text-gray-500 text-sm font-body">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    emoji: '📈',
    title: 'Elemento 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    emoji: '⚡',
    title: 'Elemento 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    emoji: '🎯',
    title: 'Elemento 3',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    emoji: '☁️',
    title: 'Elemento 4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    emoji: '🏆',
    title: 'Elemento 5',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    emoji: '🤝',
    title: 'Elemento 6',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
]
</script>
