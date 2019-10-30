<template>
    <div class="wow slideInUp" data-wow-duration="1s">
        <section id="portfolio-section" class="portfolios">
            <h1>{{projects.sectionTitle1}}</h1>
            <div class="portfolioContainer">
                <image-card :projectsMsg="item" v-for="(item,index) in projectsMsg" :key="index"></image-card>
                <div class="empty"></div>
                <div class="empty"></div>
            </div>
        </section>
    </div>
</template>

<script>
    import imageCard from '../../base/image-card/image-card'
    import {WOW} from 'wowjs'
    export default {
        name: "portfolio-list",
        props: ['projects'],
        components: {
            imageCard
        },
        data() {
            return {
                projectsMsg:[]
            }
        },
        watch: {
            projects: function (newVal, oldVal) {
                this.projectsMsg = newVal.projectList
            }
        },
        mounted() {
          new WOW({live: false}).init();
      }
    }
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
    .portfolios
        margin: 0 auto
        margin-top: 60px
        max-width: 1140px
        background: #ffffff
        box-shadow 1px 1px 2px #333333
        h1
            font-size: 24px
            text-align center
            padding: 30px 0
        .portfolioContainer
            padding: 45px
            display: flex;
            flex-wrap wrap
            .empty
                padding: 0 10px
                width: 200px
                height: 272px
                display: inline-block
                margin 0 auto
                margin-bottom: 30px
                vertical-align: top
                @media screen and (max-width: 971px)
                    display: none
</style>