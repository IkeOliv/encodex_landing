import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// ─── UI Store ────────────────────────────────────────────────────────────────
export const useUIStore = defineStore('ui', () => {
  const isNavOpen = ref(false)
  const isContactModalOpen = ref(false)
  const activeSection = ref('inicio')

  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
  }

  const closeNav = () => {
    isNavOpen.value = false
  }

  const openContactModal = () => {
    isContactModalOpen.value = true
  }

  const closeContactModal = () => {
    isContactModalOpen.value = false
  }

  const setActiveSection = (section) => {
    activeSection.value = section
  }

  return {
    isNavOpen,
    isContactModalOpen,
    activeSection,
    toggleNav,
    closeNav,
    openContactModal,
    closeContactModal,
    setActiveSection
  }
})
