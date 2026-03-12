<template>
    <div class="glass-card p-6 h-full flex flex-col group hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1 cursor-default">
        <!-- Icon + number  -->
        <div class="flex items-center gap-3 justify-between mb-5">
            <div
                class="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-700/10 border border-primary-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                {{ props.emoji }}
            </div>
            <h3
                class="font-display text-lg font-semibold text-primary-500 mb-2 group-hover:text-primary-300 transition-colors">
                {{ props.title }}
            </h3>
        </div>
        <p class="text-gray-500 text-sm font-body leading-relaxed mt-auto">{{ props.description }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    emoji:{
        default: null,
        type: String,
    },
    title:{
        default: null,
        type: String,
    },
    description:{
        default: null,
        type: String,
    },
})

</script>

<style scoped></style>