<template>
    <div class="container">
        <span class="skillName">{{item.name}}</span>
        <el-progress :text-inside="true" :stroke-width="15" :percentage="Number(item.percent)" color="#3CBCD4" class="percentBar"></el-progress>
    </div>
</template>

<script>


    export default {
        name: "progress-bar",
        data() {
            return {
            }
        },
        methods: {

        },
        props: ['item']
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
        .container
            float: left
            width: 50%
            box-sizing border-box
            padding-right: 40px
            margin-bottom: 40px
            .skillName
                box-sizing content-box
                margin-left: 5px
            .percentBar
                margin-top: 10px
        @media screen and (max-width: 640px)
            .container
                float: none
                width: 100%
                padding: 0
</style>