<template>
    <el-backtop :right= "buttonRight.default" :bottom="buttonBottom.default" class="button-top"></el-backtop>
</template>

<script>
    export default {
        name: "scroll-top",
        data() {
            return {
                buttonRight: {
                    type: Number,
                    default: 20
            },
                buttonBottom: {
                    type: Number,
                    default: 20
                }
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .button-top
        background-color #008FA1
        color: #ffffff
        &:hover
            background-color: #007888
            transition all 1s
</style>