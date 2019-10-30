<template>
    <div class="topbarContainer">
        <div class="topBar">
            <div class="actions clearfix" v-show="printB">
<!--                <a class="btn">-->
<!--                    英文简历-->
<!--                </a>-->
                <a class="btn">
                    EMAIL ME
                </a>
                <a class="btn downloadBtn" @click="printResume()">
                    DOWNLOAD MY RESUME
                </a>
            </div>
            <ul class="social clearfix" v-show="printB">
                <li v-for="item in contactMsg" class="iconfont" :class="item.iconName"></li>
            </ul>
        </div>
    </div>
</template>

<script>


    export default {
        name: "m-header",
        props: ['cvMsg'],
        created() {
        },
        data() {
            return {
                basicInfo: [],
                contactMsg: [],
                printB: true
            }
        },
        watch: {
            cvMsg: function (newVal, oldVal) {
                this.basicInfo = newVal.basicInfo
                this._getContactMsg(this.basicInfo)
            }
        },
        methods: {
            _getContactMsg(cvMsg) {
                this.contactMsg = cvMsg.contactMsg
            },
            printResume() {
                window.print()
            }

        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~assets/icon/iconfont.css'
    @import "~common/stylus/reset"

    .clearfix::after
        content: ''
        display: block
        clear: both
    .topbarContainer
        width: 100%
        height: 185px
        background: #00BCD4
        .topBar
            .actions
                float: right
                margin: 15px
                margin-top: 20px
                font-size: 14px
                font-family: 'Roboto', sans-serif;
                .btn
                    color: white
                    padding: 8px 15px
                    border-radius: 2px
                    margin-right: 10px
                    background: #008FA1
                    box-shadow 1px 1px 5px #333333
                    &:hover
                        background: #00A5BA
                        cursor: pointer
                        border-radius: 5px
                        box-shadow 2px 2px 5px #333333
                        transition: all 0.5s
            .social
                .iconfont
                    float: left
                    font-size: 30px
                    padding: 0 5px
                    color: #D1F2F6
                    font-weight: bold
                    margin-top: 15px
                    margin-left: 5px
                    &:hover
                        color: #ffffff

    @media screen and (max-width: 640px)
        .actions
            margin: 0 auto
            .btn
                display: none
            .downloadBtn
                display: block
                width: 80vw
                text-align center
        .social
            display: none
</style>