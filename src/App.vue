<template>
    <div relative min-h-screen mx-auto py-6 px-8
    class="bg-main min-w-[320px] max-w-[425px] space-y-10">
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