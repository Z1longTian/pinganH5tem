<template>
    <div>
        <PageTitle :title="title" />
        <ContentBox>
            <div flex flex-col gap-y-2 text-zinc-50>
                <div v-for="tip in tips"
                indent-2xl tracking-widest leading-loose>
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
    '(1) 着装须知：请参加盛典红毯人员着正装出席，女士须着晚礼服，男士须着正装礼服，其他嘉宾请着商务正装，男士需佩戴领带',
    '(2) 当日天气：5月26日，武汉小雨，气温23-27；',
    '(3) 行程建议：请市外机构参会人员于26日当日上午抵达，中午由会务组安排简餐，请留意群内通知。如需入住，可通过财智云预定会场附近酒店；',
    '(4) 请假事宜：如参会人员因故需请假，请将请假批准邮件转至会务组进行宝贝，邮件发分管总，抄送李总；',
    '(5) 差旅说明：本次参会往返的交通住宿由各机构参会人自行安排，后期可凭活动通知报销。'
]

</script>

<style lang="scss" scoped>

</style>