<template>
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-5 bg-dark-500/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between">
                <!-- Logo -->
                <p class="flex items-center gap-2 group" @click="vueRouter.push({name: 'home'})">
                    <Encodex />
                </p>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Encodex from '../ui/encodex.vue'

const vueRouter = useRouter()

</script>
