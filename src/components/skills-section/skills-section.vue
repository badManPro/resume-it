<template>
    <div class="wow slideInUp" data-wow-duration="1s">
        <section class="skills" id="skill-section">
            <div class="containerBar">
                <h1>{{skills.sectionTitle}}</h1>
                <progress-bar v-for="item in skills.topSkills" :key="item.id" :item="item"></progress-bar>
            </div>
        </section>
    </div>

</template>

<script>
    import progressBar from 'base/progress-bar/progress-bar'
    import {WOW} from 'wowjs'

    export default {
        name: "skills-section",
        components: {
            progressBar
        },
        props:['skills'],
        mounted() {
          new WOW({live: false}).init()
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .skills
        margin: 0 auto
        margin-top: 60px
        overflow: hidden
        max-width: 1140px
        background: #ffffff
        box-shadow 1px 1px 2px #333333
        .containerBar
            overflow: hidden
            margin-bottom: 30px
            padding: 30px
            h1
                font-size: 24px
                margin-bottom: 45px
                text-align center



</style>