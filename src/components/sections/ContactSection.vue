<template>
  <section id="contacto" class="py-20 relative overflow-hidden">
    <!-- Background glow -->
    <div class="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        
        <!-- Left: Info -->
        <div>
          <p class="text-primary-400 font-body font-medium tracking-widest uppercase text-sm mb-3">Contacto</p>
          <h2 class="section-title mb-6">
            ¿Tienes alguna<br />
            <span class="gradient-text">duda?</span>
          </h2>
          <p class="section-subtitle mb-10">
            Déjanos tus datos y nos ponemos en contacto contigo para brindarte toda la información que necesitas.
          </p>

          <!-- Contact info cards -->
          <div class="space-y-4">
            <a
              v-for="contact in contactInfo"
              :key="contact.label"
              :href="contact.href"
              target="_blank"
              rel="noopener noreferrer"
              class="glass-card p-4 flex items-center gap-4 hover:border-primary-500/30 transition-all duration-300 group"
            >
              <div class="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                <span class="text-lg">{{ contact.emoji }}</span>
              </div>
              <div>
                <p class="text-gray-500 text-xs font-body mb-0.5">{{ contact.label }}</p>
                <p class="text-primary-500 text-sm font-body font-medium">{{ contact.value }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="glass-card p-8">
          <!-- Success message -->
          <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
          >
            <div v-if="contactStore.isSuccess" class="text-center py-8">
              <div class="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl">✅</span>
              </div>
              <h3 class="font-display text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
              <p class="text-gray-400 text-sm">Nos pondremos en contacto contigo pronto.</p>
              <button @click="contactStore.resetForm()" class="btn-outline mt-6 text-sm">
                Enviar otro mensaje
              </button>
            </div>
          </Transition>

          <div v-if="!contactStore.isSuccess">
            <h3 class="font-display text-xl font-semibold text-primary-500 mb-6">Envíanos un mensaje</h3>

            <div class="space-y-4">
              <!-- Name -->
              <div>
                <label class="block text-gray-400 text-sm font-body mb-2">Nombre completo</label>
                <input
                  v-model="contactStore.form.name"
                  type="text"
                  placeholder="Tu nombre"
                  class="form-input"
                />
              </div>

              <!-- Email -->
              <div>
                <label class="block text-gray-400 text-sm font-body mb-2">Correo electrónico</label>
                <input
                  v-model="contactStore.form.email"
                  type="email"
                  placeholder="tu@correo.com"
                  class="form-input"
                />
              </div>

              <!-- Phone -->
              <div>
                <label class="block text-gray-400 text-sm font-body mb-2">Teléfono (opcional)</label>
                <input
                  v-model="contactStore.form.phone"
                  type="tel"
                  placeholder="+52 55 1234 5678"
                  class="form-input"
                />
              </div>

              <!-- Message -->
              <div>
                <label class="block text-gray-400 text-sm font-body mb-2">Mensaje</label>
                <textarea
                  v-model="contactStore.form.message"
                  rows="4"
                  placeholder="¿En qué podemos ayudarte?"
                  class="form-input resize-none"
                />
              </div>

              <!-- Error -->
              <p v-if="contactStore.errorMessage" class="text-red-400 text-sm font-body">
                {{ contactStore.errorMessage }}
              </p>

              <!-- Submit -->
              <button
                @click="contactStore.submitForm()"
                :disabled="contactStore.isLoading"
                class="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <span v-if="!contactStore.isLoading">Enviar mensaje</span>
                <span v-else class="flex items-center gap-2">
                  <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Enviando...
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContactStore } from '@/stores/contact'

const contactStore = useContactStore()

const contactInfo = [
  {
    emoji: '📱',
    label: 'WhatsApp',
    value: '+52 55 0000 0000',
    href: 'https://api.whatsapp.com/send?phone=5620860800&text=Hola, me gustaría obtener más información sobre sus servicios.'
  },
  {
    emoji: '📘',
    label: 'Facebook',
    value: 'Facebook',
    href: '#'
  },
  {
    emoji: '📍',
    label: 'Ubicación',
    value: 'Lorem ipsum dolor sit amet consectetur,',
    href: '#'
  },
]
</script>

<style scoped>

</style>