<template>
    <div>
        <div flex justify-between>
            <div class="littlesquare"></div>
            <div class="littlesquare"></div>
        </div>
        <div mx-2 p-5 class="bg-white/30">
            <slot/>
        </div>
        <div flex justify-between>
            <div class="littlesquare"></div>
            <div class="littlesquare"></div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.littlesquare {
    @apply w-2 aspect-square bg-white/30;
}
</style>