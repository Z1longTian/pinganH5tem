<template>
    <div @click="back" underline cursor-pointer
    text-center text-zinc-50 hover:text-blue-500>
        返回首页
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const back = () => router.push('/')
</script>

<style lang="scss" scoped>

</style>