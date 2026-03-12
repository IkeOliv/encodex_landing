<template>
    <div class="max-w-7xl mx-auto">

        <h1 class="section-title text-xl md:text-2xl lg:text-4xl mb-6 flex flex-wrap justify-center  gap-4" style="animation-delay: 100ms">
            Nuestros servicos en 
            <Encodex/>
        </h1>

        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">

            <template v-for="service in services">
                <Card @click="goToServices(service.id)" :emoji="service.emoji" :title="service.title" :description="service.description" />
            </template>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Card from  '../components/ui/Card.vue'
import Encodex from '../components/ui/encodex.vue';

const vuRouter = useRouter();

const services = [
    {
        id: 1,
        emoji: '👥',
        title: 'Migración de correos',
        description: 'Migración de correos empresarial, gmail, outlook, smtp. Somos especialistas en migrar tu información.'
    },
    {
        id: 2,
        emoji: '📊',
        title: 'Análisis de su infraestructura.',
        description: 'Hacemos el análisis que tu empresa necesita, desarrollamos las herramientas a la medida para optimizar tus procesos.'
    },
    {
        id: 3,
        emoji: '🔒',
        title: 'Proveedores de licenciamiento.',
        description: "Licencias para escritorio remoto RDP, CAL's."
    },
    {
        id: 4,
        emoji: '🖥️',
        title: 'Consultoria en TI',
        description: 'Ayudamos a tu empresa en todo lo referente con TI, certificados SSL para tu página web.'
    },
    {
        id: 5,
        emoji: '📥',
        title: 'Migración de pág. web',
        description: 'Migramos tu página web, sistema informático CRM, ERP o sistma hecho a la medida.'
    },
    {
        id: 6,
        emoji: '⏳',
        title: 'Soporte continuo',
        description: "Ofrecemos planes de soporte 8/5 ó 24/7, en caso de necesitar soporte cualquier día de la semana, en culquier horario."
    },
]

const goToServices = (id) => {
    vuRouter.push({ name:  'ver servicio', params: { id } })
}


</script>

<style lang="scss" scoped></style>