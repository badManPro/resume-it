<template>
    <div class="wow slideInUp" data-wow-duration="1s">
        <section id="education-section" class="education">
            <h1>教育经历</h1>
            <el-timeline class="eduMsg">
                <el-timeline-item timestamp="2011.09——2015.07" placement="top" class="edu-item">
                    <el-card>
                        <h2>上海应用技术大学</h2>
                        <div class="title">统招本科</div>
                        <div class="edu-desc">就读于上海应用技术大学，创新学院，电气工程及其自动化系，获学士学位毕业</div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </section>
    </div>
</template>

<script>
    import {WOW} from 'wowjs'
  export default {
    name: "education-list",
    mounted() {
      new WOW({live: false}).init();
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .education
        margin: 0 auto;
        margin-top: 60px;
        overflow: hidden
        max-width 1140px;
        background: #ffffff
        box-shadow 1px 1px 2px #333333
        h1
            font-size 24px
            text-align center
            margin-top 30px
        .eduMsg
            padding: 60px 100px 100px 100px
            @media screen and (max-width: 615px)
                padding: 30px
            .edu-item
                h2
                    font-size 18px
                    color #00BCD4
                .title
                    font-size 15px
                    margin-top 10px
                    color: rgb(129, 155, 158)
                .edu-desc
                    font-size 14px
                    color: #666666
                    margin-top: 10px
                    word-wrap normal

</style>