<template>
    <div class="selfMsg">
        <div class="headImage"></div>
        <span class="name">{{basicInfo.name}}</span>
        <div class="title">{{basicInfo.title}}</div>
        <p class="profile">{{basicInfo.profile}}</p>
    </div>
</template>

<script>
    export default {
        name: "self-intro",
        props: ['basicInfo'],

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/reset"

    .selfMsg
        max-width 960px
        margin: 0 auto
        margin-bottom: 10px
        margin-top: (185/2)px
        padding: 0 20px
        text-align center
        .headImage
            background-image: url("headImage.png")
            background-size: 160px 160px
            width: 160px
            height: 160px
            border: white 1px solid
            border-radius: 50%
            position: absolute
            left: 50%
            margin-left: -80px
            top: (185/2)px
        .name
            color: #ffffff
            font-size 48px
            margin-bottom: 15px
        .title
            color: rgba(255, 255, 255, 0.8)
            font-size 30px
            font-weight 300
            margin-bottom: 30px
            margin-top: 30px
        .profile
            color: rgba(255, 255, 255, 0.5)
            padding: 50px
            text-align: left


</style>