<template>
    <div relative>
        <div absolute inset-0>
            <img src="@/assets/img/mainbg.jpg" alt="mainbg">
        </div>
        <!-- menu -->
        <div relative grid grid-cols-4 text-zinc-100 text-xs gap-6 
        class="top-[30vh] px-4">
            <div v-for="item in menu" 
            @click="item.name && to(item.name, item.label)"
            flex flex-col justify-center items-center gap-y-1
            p-1 rounded-lg shadow-lg cursor-pointer 
            hover:scale-110
            class="bg-white/20">
                <!-- icon -->
                <div text-white :class="item.icon"
                text-5xl
                ></div>
                <!-- label -->
                <p>{{ item.label }}</p>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const menu = [
    {
        index: 0,
        label: '颁奖分组',
        icon: 'i-solar-medal-ribbon-star-bold-duotone'
    },
    {
        index: 1,
        label: '晚宴座次',
        icon: 'i-solar-armchair-bold'
    },
    {
        index: 2,
        label: '盛典流程',
        icon: 'i-solar-calendar-bold',
        name: 'Schedule'
    },
    {
        index: 3,
        label: '照片直播',
        icon: 'i-solar-camera-bold'
    },
    {
        index: 4,
        label: '周边景点',
        icon: 'i-solar-ferris-wheel-outline',
        name: 'Landmark'
    },
    {
        index: 5,
        label: '远程反馈',
        icon: 'i-solar-document-add-bold'
    },
    {
        index: 6,
        label: '温馨提示',
        icon: 'i-solar-heart-angle-bold',
        name: 'Tips',
    },
    {
        index: 7,
        label: '会务联系',
        icon: 'i-solar-phone-calling-bold',
        name: 'Contact'
    },
    {
        index: 8,
        label: '会场地址',
        icon: 'i-solar-map-point-wave-bold'
    },
    {
        index: 9,
        label: '视频直播',
        icon: 'i-solar-videocamera-record-bold'
    },
]

const to = (name, title) => router.push({
    name,
    query: {
        title
    }
})


</script>

<style lang="scss" scoped>

</style>