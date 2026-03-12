<template>
    <div>
        <!-- Not found -->
        <div v-if="!service" class="max-w-2xl mx-auto px-6 text-center py-32">
            <span class="text-6xl">🔍</span>
            <h1 class="section-title mt-6 mb-4">Servicio no encontrado</h1>
            <p class="text-gray-400 mb-8">El servicio que buscas no existe.</p>
            <RouterLink to="/" class="btn-primary">← Volver al inicio</RouterLink>
        </div>

        <template v-else>
            <!-- ── Hero del servicio ── -->
            <section class="relative overflow-hidden pb-4">

                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <!-- Left: info -->
                        <div>
                            <!-- Emoji badge -->
                            <div
                                class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-500/30 border border-primary-500/20 text-4xl mb-6">
                                {{ service.emoji }}
                            </div>

                            <h1 class="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                                {{ service.title }}
                            </h1>

                            <p class="text-gray-600 font-body text-lg leading-relaxed mb-8">
                                {{ service.description }}
                            </p>

                            <!-- Tags -->
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tag in service.tags" :key="tag"
                                    class="px-3 py-1 rounded-full glass-card border-primary-500/20 text-primary-500 text-xs font-body font-medium">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>

                        <!-- Right: imagen con overlay -->
                        <div class="relative">
                            <div
                                class="glass-card overflow-hidden rounded-2xl aspect-[4/3] flex items-center justify-center">
                                <!-- Placeholder visual cuando no hay imagen real -->
                                <div
                                    class="w-full h-full bg-gradient-to-br from-primary-900/40 via-dark-700 to-primary-800/20 flex flex-col items-center justify-center gap-4">
                                    <span class="text-8xl opacity-60">{{ service.emoji }}</span>
                                    <div
                                        class="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500/40 to-transparent rounded-full" />
                                </div>
                                <!-- <img :src="service.image" :alt="service.title" class="w-full h-full object-cover" /> -->
                            </div>
                            <!-- Glow bajo la imagen -->
                            <div
                                class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary-600/20 blur-xl rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- ── Descripción larga ── -->
            <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
                <div class="grid lg:grid-cols-3 gap-12">
                    <!-- Texto largo -->
                    <div class="lg:col-span-2 space-y-6">
                        <h2 class="font-display text-2xl font-bold gradient-text">Acerca de este servicio</h2>
                        <div class="text-gray-6 00 font-body leading-relaxed space-y-4">
                            <p>{{ service.longDescription }}</p>
                            <p v-if="service.longDescription2">{{ service.longDescription2 }}</p>
                        </div>

                        <!-- Highlights -->
                        <div v-if="service.highlights?.length" class="grid sm:grid-cols-2 gap-4 pt-4">
                            <div v-for="item in service.highlights" :key="item"
                                class="glass-card p-4 flex items-start gap-3 border-primary-500/30 transition-all duration-300">
                                <span class="text-primary-400 mt-0.5">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span class="text-gray-600 text-sm font-body">{{ item }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar: datos rápidos -->
                    <aside class="space-y-4">
                        <div class="glass-card p-6 space-y-4">
                            <h3 class="font-display text-lg font-semibold gradient-text border-b border-gary/50 pb-3">
                                Detalles
                            </h3>
                            <div v-for="detail in service.details" :key="detail.label"
                                class="flex justify-between text-sm">
                                <span class="text-primary-500 font-body">{{ detail.label }}</span>
                                <span class="text-gray-600 font-body font-medium">{{ detail.value }}</span>
                            </div>
                            <a href="#formulario" class="btn-primary w-full justify-center mt-4 text-sm">
                                Solicitar información
                            </a>
                        </div>
                    </aside>
                </div>
            </section>

            <!-- ── Formulario de contacto ── -->
            <section id="formulario" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/5">
                <div class="max-w-2xl mx-auto">
                    <div class="text-center mb-10">
                        <p class="text-primary-400 font-body text-sm tracking-widest uppercase mb-2">¿Te interesa?</p>
                        <h2 class="font-display text-3xl font-bold">Solicita más información</h2>
                        <p class="text-gray-500 font-body mt-2">
                            Cuéntanos sobre tu empresa y nos ponemos en contacto contigo.
                        </p>
                    </div>

                    <!-- Success -->
                    <Transition enter-active-class="transition-all duration-300" enter-from-class="opacity-0 scale-95"
                        enter-to-class="opacity-100 scale-100">
                        <div v-if="formSuccess" class="glass-card p-10 text-center">
                            <span class="text-5xl">✅</span>
                            <h3 class="font-display text-xl font-bold mt-4 mb-2">¡Mensaje enviado!</h3>
                            <p class="text-gray-400 text-sm font-body">Nos pondremos en contacto contigo a la brevedad.
                            </p>
                            <button @click="formSuccess = false" class="btn-outline mt-6 text-sm">Enviar otro</button>
                        </div>
                    </Transition>

                    <div v-if="!formSuccess" class="glass-card p-8 space-y-5">
                        <!-- Nombre -->
                        <div>
                            <label class="block text-gray-400 text-sm font-body mb-2">Nombre completo <span
                                    class="text-primary-500">*</span></label>
                            <input v-model="form.name" type="text" placeholder="Tu nombre completo"
                                class="form-input" />
                        </div>

                        <!-- Teléfono -->
                        <div>
                            <label class="block text-gray-400 text-sm font-body mb-2">Teléfono <span
                                    class="text-primary-500">*</span></label>
                            <input v-model="form.phone" type="tel" placeholder="+52 55 1234 5678" class="form-input" />
                        </div>

                        <!-- Correo -->
                        <div>
                            <label class="block text-gray-400 text-sm font-body mb-2">Correo electrónico <span
                                    class="text-primary-500">*</span></label>
                            <input v-model="form.email" type="email" placeholder="tu@empresa.com" class="form-input" />
                        </div>

                        <!-- Por qué le interesa -->
                        <div>
                            <label class="block text-gray-400 text-sm font-body mb-2">¿Por qué te interesa este
                                servicio? <span class="text-primary-500">*</span></label>
                            <textarea v-model="form.reason" rows="4"
                                :placeholder="`Cuéntanos cómo podemos ayudarte con: ${service.title}`"
                                class="form-input resize-none" />
                        </div>

                        <!-- Error -->
                        <p v-if="formError" class="text-red-400 text-sm font-body">{{ formError }}</p>

                        <!-- Submit -->
                        <button @click="handleSubmit" :disabled="isLoading"
                            class="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                            <template v-if="!isLoading">
                                Enviar solicitud
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </template>
                            <template v-else>
                                <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4" />
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Enviando...
                            </template>
                        </button>
                    </div>
                </div>
            </section>
        </template>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const vueRoute = useRoute()

// Datos de servicios
const services = [
    {
        id: 1,
        emoji: '👥',
        title: 'Migración de correos',
        description: 'Migración de correos empresarial, gmail, outlook, smtp. Somos especialistas en migrar tu información.',
        longDescription: 'Nuestro servicio de migración de correos empresariales garantiza que toda tu información se transfiera de forma segura y sin pérdida de datos. Trabajamos con las principales plataformas del mercado: Gmail Workspace, Microsoft Outlook, servidores SMTP personalizados y más.',
        longDescription2: 'El proceso incluye un análisis previo de tu infraestructura actual, una migración controlada en etapas y verificación completa al finalizar. Tu equipo no perderá ni un solo correo durante la transición.',
        tags: ['Gmail', 'Outlook', 'SMTP', 'Empresarial'],
        highlights: [
            'Migración sin pérdida de datos',
            'Compatible con Gmail y Outlook',
            'Proceso por etapas controladas',
            'Soporte durante toda la migración',
            'Verificación de integridad incluida',
            'Tiempo de inactividad mínimo',
        ],
        details: [
            { label: 'Duración estimada', value: '1-3 días' },
            { label: 'Modalidad', value: 'Remoto / Presencial' },
            { label: 'Disponibilidad', value: 'Inmediata' },
        ],
    },
    {
        id: 2,
        emoji: '📊',
        title: 'Análisis de su infraestructura',
        description: 'Hacemos el análisis que tu empresa necesita, desarrollamos las herramientas a la medida para optimizar tus procesos.',
        longDescription: 'Realizamos un diagnóstico completo de tu infraestructura tecnológica para identificar cuellos de botella, vulnerabilidades y oportunidades de mejora. Entregamos un reporte detallado con recomendaciones accionables.',
        longDescription2: 'Nuestro equipo de consultores especializados evaluará servidores, redes, software y procesos internos para darte una visión 360° del estado tecnológico de tu empresa.',
        tags: ['Diagnóstico', 'Optimización', 'Consultoría', 'A la medida'],
        highlights: [
            'Reporte detallado de hallazgos',
            'Análisis de servidores y redes',
            'Evaluación de software actual',
            'Recomendaciones prioritizadas',
            'Plan de mejora incluido',
            'Herramientas a la medida',
        ],
        details: [
            { label: 'Duración estimada', value: '3-5 días' },
            { label: 'Modalidad', value: 'Presencial / Remoto' },
            { label: 'Entregable', value: 'Reporte PDF' },
        ],
    },
    {
        id: 3,
        emoji: '🔒',
        title: 'Proveedores de licenciamiento',
        description: "Licencias para escritorio remoto RDP, CAL's.",
        longDescription: "Somos distribuidores autorizados de licencias de software empresarial. Ofrecemos RDP (Remote Desktop Protocol), CAL's (Client Access Licenses) y más, siempre con respaldo oficial y garantía del fabricante.",
        longDescription2: 'Te asesoramos para que adquieras únicamente las licencias que tu empresa necesita, evitando gastos innecesarios y asegurando el cumplimiento legal de tu software.',
        tags: ['RDP', "CAL's", 'Microsoft', 'Licencias'],
        highlights: [
            'Licencias 100% originales',
            'RDP y escritorio remoto',
            "CAL's de usuario y dispositivo",
            'Asesoría de compra incluida',
            'Precios competitivos',
            'Facturación fiscal',
        ],
        details: [
            { label: 'Entrega', value: 'Digital inmediata' },
            { label: 'Garantía', value: 'Oficial del fabricante' },
            { label: 'Facturación', value: 'Disponible' },
        ],
    },
    {
        id: 4,
        emoji: '🖥️',
        title: 'Consultoría en TI',
        description: 'Ayudamos a tu empresa en todo lo referente con TI, certificados SSL para tu página web.',
        longDescription: 'Nuestro servicio de consultoría en TI abarca desde la estrategia tecnológica hasta la implementación de soluciones específicas. Ayudamos a empresas de cualquier tamaño a tomar las mejores decisiones tecnológicas.',
        longDescription2: 'Incluye gestión de certificados SSL, configuración de dominio, seguridad perimetral, respaldos en nube y más. Todo adaptado a las necesidades y presupuesto de tu empresa.',
        tags: ['SSL', 'Seguridad', 'Estrategia TI', 'Cloud'],
        highlights: [
            'Certificados SSL incluidos',
            'Estrategia tecnológica',
            'Seguridad perimetral',
            'Respaldos en la nube',
            'Gestión de dominios',
            'Consultor dedicado',
        ],
        details: [
            { label: 'Modalidad', value: 'Mensual / Por proyecto' },
            { label: 'Respuesta', value: 'Menos de 4 hrs' },
            { label: 'Cobertura', value: 'Nacional' },
        ],
    },
    {
        id: 5,
        emoji: '📥',
        title: 'Migración de pág. web',
        description: 'Migramos tu página web, sistema informático CRM, ERP o sistema hecho a la medida.',
        longDescription: 'Realizamos la migración completa de sitios web, aplicaciones web, CRM, ERP y cualquier sistema a medida hacia un nuevo hosting, servidor o infraestructura en la nube, sin tiempo de inactividad.',
        longDescription2: 'Nuestro proceso garantiza que todo funcione exactamente igual (o mejor) en el nuevo entorno, incluyendo bases de datos, archivos, configuraciones y correos asociados al dominio.',
        tags: ['WordPress', 'CRM', 'ERP', 'Hosting', 'Cloud'],
        highlights: [
            'Sin tiempo de inactividad',
            'Migración de base de datos',
            'CRM y ERP compatible',
            'Pruebas en staging previas',
            'Configuración de DNS incluida',
            'Soporte post-migración',
        ],
        details: [
            { label: 'Duración estimada', value: '1-5 días' },
            { label: 'Modalidad', value: 'Remoto' },
            { label: 'Garantía', value: '30 días' },
        ],
    },
    {
        id: 6,
        emoji: '⏳',
        title: 'Soporte continuo',
        description: 'Ofrecemos planes de soporte 8/5 ó 24/7, en caso de necesitar soporte cualquier día de la semana, en cualquier horario.',
        longDescription: 'Nuestros planes de soporte continuo están diseñados para que tu empresa nunca se detenga. Ofrecemos atención por ticket, teléfono y remoto con tiempos de respuesta garantizados según el nivel del plan.',
        longDescription2: 'Contamos con planes desde soporte en horario de oficina (8/5) hasta cobertura completa (24/7), con técnicos especializados listos para resolver cualquier incidente de TI.',
        tags: ['24/7', '8/5', 'Helpdesk', 'Remoto'],
        highlights: [
            'Atención 24/7 disponible',
            'Soporte remoto y presencial',
            'Tiempo de respuesta garantizado',
            'Ticket de seguimiento',
            'Técnicos certificados',
            'Reportes mensuales',
        ],
        details: [
            { label: 'Plan básico', value: '8/5 (L-V)' },
            { label: 'Plan premium', value: '24/7' },
            { label: 'Contrato', value: 'Mensual / Anual' },
        ],
    },
]

const service = services.find(s => s.id == vueRoute.params.id)

// Formulario 
const form = reactive({ name: '', phone: '', email: '', reason: '' })
const isLoading = ref(false)
const formSuccess = ref(false)
const formError = ref('')

const handleSubmit = async () => {
    formError.value = ''

    if (!form.name || !form.phone || !form.email || !form.reason) {
        formError.value = 'Por favor completa todos los campos.'
        return
    }

    isLoading.value = true
    try {
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Formulario enviado:', { service: service?.title, ...form })
        formSuccess.value = true
        Object.assign(form, { name: '', phone: '', email: '', reason: '' })
    } catch {
        formError.value = 'Ocurrió un error. Intenta de nuevo.'
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>

</style>