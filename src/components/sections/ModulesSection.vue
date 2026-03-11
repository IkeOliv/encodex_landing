<template>
  <section id="servicios" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-primary-400 font-body font-medium tracking-widest uppercase text-sm mb-3">Nuestros servicios</p>
        <h2 class="section-title">Servicios <span class="gradient-text">Principales</span></h2>
        <p class="section-subtitle mt-4 max-w-xl mx-auto">
          Todo lo que necesitas para gestionar tu empresa de manera eficiente.
        </p>
      </div>

      <!--  grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="mod in modules" :key="mod.title"
          class="glass-card p-6 group hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 cursor-default">
          <!-- Icon + number  -->
          <div class="flex items-center gap-3 justify-between mb-5">
            <div
              class="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 border border-primary-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
              {{ mod.emoji }}
            </div>
            <h3
              class="font-display text-lg font-semibold text-primary-500 mb-2 group-hover:text-primary-300 transition-colors">
              {{ mod.title }}
            </h3>
          </div>
          <p class="text-gray-500 text-sm font-body leading-relaxed">{{ mod.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const modules = [
  {
    emoji: '👥',
    title: 'Migración de correos',
    description: 'Migración de correos empresarial, gmail, outlook, smtp. Somos especialistas en migrar tu información.'
  },
  {
    emoji: '📊',
    title: 'Análisis de su infraestructura.',
    description: 'Hacemos el análisis que tu empresa necesita, desarrollamos las herramientas a la medida para optimizar tus procesos.'
  },
  {
    emoji: '🔒',
    title: 'Proveedores de licenciamiento.',
    description: "Licencias para escritorio remoto RDP, CAL's."
  },
  {
    emoji: '🖥️',
    title: 'Consultoria en TI',
    description: 'Ayudamos a tu empresa en todo lo referente con TI, certificados SSL para tu página web.'
  },
  {
    emoji: '📥',
    title: 'Migración de pág. web',
    description: 'Migramos tu página web, sistema informático CRM, ERP o sistma hecho a la medida.'
  },
  {
    emoji: '⏳',
    title: 'Soporte continuo',
    description: "Ofrecemos planes de soporte 8/5 ó 24/7, en caso de necesitar soporte cualquier día de la semana, en culquier horario."
  },
]
</script>
