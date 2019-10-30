<template>
  <div id="app">
      <scroll-top></scroll-top>
      <div class="introHeader">
          <m-header :cvMsg="cvMsg"></m-header>
          <self-intro :basicInfo="basicInfo"></self-intro>
          <contact-list :basicInfo="basicInfo"></contact-list>
      </div>
      <page-nav :navBar="navBar"></page-nav>
      <skills-section :skills="skills"></skills-section>
      <job-list :jobs="jobs"></job-list>
      <project-list :projects="projects"></project-list>
      <portfolio-list :projects="projects"></portfolio-list>
      <education-list></education-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import selfIntro from 'components/self-intro/self-intro'
  import contactList from 'components/contact-list/contact-list'
  import pageNav from 'components/page-nav/page-nav'
  import skillsSection from 'components/skills-section/skills-section'
  import jobList from 'components/job-list/job-list'
  import projectList from 'components/project-list/project-list'
  import scrollTop from 'base/scroll-top/scroll-top'
  import portfolioList from 'components/portfolio-list/portfolio-list'
  import educationList from 'components/education-list/education-list'
  import {getData} from "common/js/dataget"


  export default {
      components: {
          MHeader,
          selfIntro,
          contactList,
          pageNav,
          skillsSection,
          jobList,
          projectList,
          scrollTop,
          portfolioList,
          educationList
      },
      created() {
          this._getData()
      },
      data() {
          return {
              cvMsg: [],
              basicInfo: [],
              navBar: [],
              skills: [],
              jobs:[],
              projects:[]
          }
      },
      methods: {
          _getData() {
              getData().then((res) => {
                  this.cvMsg = res.data;
                  this.basicInfo = res.data.basicInfo;
                  this.navBar = res.data.navBar
                  this.skills = res.data.skills
                  this.jobs = res.data.jobs
                  this.projects = res.data.projects
              })
          }
      }

  }
</script>
<style lang="stylus">
    @import "~common/stylus/reset"
    #app
        background: #F5F5F5
        .introHeader
            background: #00A5BA
            width: 100%
            height: 100%
            top: 0
            left: 0

</style>
