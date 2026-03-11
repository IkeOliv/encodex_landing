import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useContactStore = defineStore('contact', () => {
  // State
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref('')

  const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Actions
  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
    isSuccess.value = false
    errorMessage.value = ''
  }

  const submitForm = async () => {
    isLoading.value = true
    errorMessage.value = ''

    try {
      // TODO: Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form submitted:', { ...form })
      isSuccess.value = true
      resetForm()
    } catch (error) {
      errorMessage.value = 'Ocurrió un error. Por favor intenta de nuevo.'
      console.error('Submit error:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    form,
    isLoading,
    isSuccess,
    errorMessage,
    submitForm,
    resetForm
  }
})
