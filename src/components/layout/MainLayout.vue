<template>
    <div>
        <TheNavbarCotizador />
        <main>
            <div class="py-24 relative min-h-screen flex items-center justify-center overflow-hidden">
                <!-- Background grid -->
                <div class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_5px,transparent_5px),linear-gradient(90deg,rgba(99,102,241,0.03)_5px,transparent_5px)] bg-[size:64px_64px]" />
                <RouterView />
            </div>
        </main>
        <Encodexchat/>

        <TheFooter :isNav="false" />
    </div>
</template>

<script setup>
import Encodexchat from '../ui/Encodexchat.vue';
import TheNavbarCotizador from './TheNavbarCotizador.vue';
import TheFooter from './TheFooter.vue'



</script>

<style lang="scss" scoped></style>