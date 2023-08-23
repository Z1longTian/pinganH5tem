<template>
    <div>
        <PageTitle :title="title" />
        <ContentBox>
            <div flex flex-col gap-y-2 text-zinc-50>
                <div v-for="tip in tips"
                text-center tracking-widest leading-loose>
                    {{ tip }}
                </div>
            </div>
        </ContentBox>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import PageTitle from '@/components/PageTitle.vue'
import ContentBox from '@/components/ContentBox.vue'

const route = useRoute()
const title = route.query.title
const tips = [
    '刘超：159 2680 6909',
    '郭于：186 2771 1517',
    '张敏：136 3868 8521'
]

</script>

<style lang="scss" scoped>

</style>