<template>
    <div relative min-h-screen mx-auto py-12 px-8
    class="bg-main min-w-[320px] max-w-[425px]">
        <Header />
        <RouterView />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped>

</style>