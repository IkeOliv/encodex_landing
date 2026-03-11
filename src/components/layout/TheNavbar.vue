<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'py-3 bg-dark-500/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20' : 'py-5'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#inicio" class="flex items-center gap-2 group" @click="uiStore.closeNav()">
          <Encodex/>
        </a>

        <!-- Desktop nav links -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" class="nav-link text-sm" :class="{ 'text-primary-300': activeSection === link.id }">
              {{ link.label }}
              <!-- Active underline -->
              <span class="absolute -bottom-1 left-0 h-0.5 bg-primary-200 transition-all duration-300 rounded-full"
                :class="activeSection === link.id ? 'w-full' : 'w-0'" />
            </a>
          </li>
        </ul>

        <!-- CTA + Mobile hamburger -->
        <div class="flex items-center gap-3">
          <a href="https://admin.encodex.com.mx" class="btn-primary text-sm hidden sm:inline-flex">
            acceder
          </a>

          <!-- Hamburger -->
          <button class="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" @click="uiStore.toggleNav()"
            aria-label="Menu">
            <div class="w-5 flex flex-col gap-1.5 transition-all">
              <span class="block h-0.5 bg-black rounded-full transition-all duration-300"
                :class="uiStore.isNavOpen ? 'rotate-45 translate-y-2' : ''" />
              <span class="block h-0.5 bg-black rounded-full transition-all duration-300"
                :class="uiStore.isNavOpen ? 'opacity-0' : ''" />
              <span class="block h-0.5 bg-black rounded-full transition-all duration-300"
                :class="uiStore.isNavOpen ? '-rotate-45 -translate-y-2' : ''" />
            </div>
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
        <div v-if="uiStore.isNavOpen" class="md:hidden mt-4 pb-4 border-t border-white/10">
          <ul class="flex flex-col gap-2 pt-4">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href"
                class="block py-2.5 px-4 rounded-xl text-gray-800 hover:text-white hover:bg-white/5 font-body font-medium transition-all"
                @click="uiStore.closeNav()">
                {{ link.label }}
              </a>
            </li>
            <li class="pt-2">
              <a href="#contacto" class="btn-primary w-full justify-center" @click="uiStore.closeNav()">
                Cotizar ahora
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useUIStore } from '@/stores/ui'
import Encodex from '../ui/encodex.vue'

const uiStore = useUIStore()
const isScrolled = ref(false)
const activeSection = computed(() => uiStore.activeSection)

const navLinks = [
  { href: '#inicio', label: 'Inicio', id: 'inicio' },
  { href: '#nosotros', label: 'Acerca de', id: 'nosotros' },
  { href: '#servicios', label: 'Servicios', id: 'servicios' },
  { href: '#beneficios', label: 'Beneficios', id: 'beneficios' },
  { href: '#mejoras', label: 'Mejoras', id: 'mejoras' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  // Update active section based on scroll
  const sections = ['inicio', 'nosotros', 'servicios', 'beneficios', 'mejoras', 'contacto']
  for (const id of sections.reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 10) {
      uiStore.setActiveSection(id)
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
