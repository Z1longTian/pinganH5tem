<template>
    <div relative z-50 flex items-center justify-center text-zinc-50>
        <div class="whiteline"></div>
        <span>/</span>   
        <p class="mx-4 tracking-widest whitespace-nowrap">{{ title }}</p>
        <span>/</span>
        <div class="whiteline"></div>  
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style lang="scss" scoped>
.whiteline {
    @apply h-0.5 bg-zinc-50 w-full;
}
</style>