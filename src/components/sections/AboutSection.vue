<template>
  <section id="nosotros" class="py-10 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-primary-400 font-body font-medium tracking-widest uppercase text-sm mb-3">Quiénes somos</p>
        <h2 class="section-title">Sobre <span class="gradient-text">Nosotros</span></h2>
      </div>

      <!-- Cards grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(card, index) in cards"
          :key="card.title"
          class="glass-card p-4 hover:border-primary-300/30 transition-all duration-500 hover:-translate-y-1 group"
          
        >
        <div class="flex justify-start items-center space-x-3">
          <!-- Icon -->
          <div class="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
            <span class="text-2xl">{{ card.emoji }}</span>
          </div>
          <h3 class="font-display text-xl font-semibold text-primary-500 mb-3">{{ card.title }}</h3>
        </div>
          <p class="text-gray-500 font-body leading-relaxed">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    emoji: '🏢',
    title: 'Somos ENCODEX',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nisi nesciunt dignissimos, provident repudiandae corrupti nihil iusto minus molestias aperiam quidem excepturi perferendis repellendus vero officiis reprehenderit consequuntur ut incidunt?'
  },
  {
    emoji: '🔭',
    title: 'Visión en Acción',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nisi nesciunt dignissimos, provident repudiandae corrupti nihil iusto minus molestias aperiam quidem excepturi perferendis repellendus vero officiis reprehenderit consequuntur ut incidunt?'
  },
  {
    emoji: '🚀',
    title: 'Misión Empresarial',
    description: 'Nuestra misión es brindar servicios informáticos de una calidad superior. La atención personal y receptiva que brindamos a cada cliente, sin importar cuán grande o pequeño sea, es la clave de nuestro enfoque.'
  },
  {
    emoji: '🔄',
    title: 'Adaptabilidad en el Centro',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nisi nesciunt dignissimos, provident repudiandae corrupti nihil iusto minus molestias aperiam quidem excepturi perferendis repellendus vero officiis reprehenderit consequuntur ut incidunt?'
  },
]
</script>
