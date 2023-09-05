<template>
    <!-- header -->
    <div flex justify-between text-zinc-50>
        <Logo />
        <div>
            专业让生活更简单
        </div>
    </div>

    <!-- words -->
    <div flex flex-col justify-center items-center>
        <div relative>
            <img absolute top-0 left-6 src="@/assets/img/letters.png" alt="main letters">
            <img src="@/assets/img/firework.png" alt="little fire works">
        </div>
        <p text-zinc-50 font-bold tracking-widest>
            平安产险湖北分公司2022年度荣誉盛典
        </p>


    </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
</script>

<style lang="scss" scoped>

</style>