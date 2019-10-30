<template>
    <div class="wow slideInUp" data-wow-duration="1s">
        <section class="jobs" id="experience-section">
            <h1>{{jobs.sectionTitle}}</h1>
            <el-timeline class="jobMsg">
                <el-timeline-item v-for="item in jobs.workExperiences" :timestamp="item.time" placement="top" class="job-item" :key="item.id">
                    <el-card>
                        <h2 class="place">{{ item.place }}</h2>
                        <div class="title">{{ item.title }}</div>
                        <div class="job-desc">{{ item.jobDesc }}</div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </section>
    </div>

</template>

<script>
    import {WOW} from 'wowjs'
    export default {
        name: "work-list",
        props:['jobs'],
        mounted() {
          new WOW({live: false}).init()
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .jobs
        margin: 0 auto
        margin-top: 60px
        overflow: hidden
        max-width: 1140px
        background: #ffffff
        box-shadow 1px 1px 2px #333333
        h1
            font-size: 24px
            text-align center
            margin-top: 30px
        .jobMsg
            padding: 60px 100px 100px 100px
            @media screen and (max-width: 615px)
                padding: 30px
            .job-item
                .place
                    font-size: 18px
                    color: #00BCD4
                .title
                    font-size: 15px
                    margin-top: 10px
                    color: rgb(129, 155, 158)
                .job-desc
                    font-size 14px
                    color: #666666
                    margin-top: 10px
                    word-wrap normal

</style>