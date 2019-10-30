<template>
    <div class="wow slideInUp" data-wow-duration="1s">
        <section class="projects" id="projects-section">
            <h1>{{projects.sectionTitle}}</h1>
            <el-timeline class="projectMsg">
                <el-timeline-item v-for="item in projects.projectList" :timestamp="item.time" placement="top" class="project-item" :key="item.id">
                    <el-card>
                        <h2 class="name">{{ item.name }}</h2>
                        <div class="link">{{ item.link }}</div>
                        <div class="project-desc">{{ item.desc }}</div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </section>
    </div>

</template>

<script>
    import {WOW} from 'wowjs'
    export default {
        name: "project-list",
        props:['projects'],
        mounted() {
          new WOW({live: false}).init();
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .projects
        margin: 0 auto
        margin-top: 60px
        overflow: hidden
        max-width: 1140px
        background: #ffffff
        box-shadow 1px 1px 2px #333333
        h1
            font-size: 24px
            text-align center
            padding: 30px 0
        .projectMsg
            padding: 100px
            @media screen and (max-width: 615px)
                padding: 30px
            .project-item
                .name
                    font-size: 18px
                    color: #00BCD4
                .link
                    font-size: 15px
                    margin-top: 10px
                    color: rgb(129, 155, 158)
                .project-desc
                    font-size 14px
                    color: #666666
                    margin-top: 10px
                    word-wrap normal

</style>