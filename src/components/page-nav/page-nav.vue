<template>
    <div class="page-nav-container" ref="navBarContainer" :class="{ fixedBar: isFixed}" id="fixedBar">
        <ul class="navBar">
            <li class="navBtn" v-for="item in navBarBtn">
                <a :href="'#'+ item.id" class="">{{item.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "page-nav",
        props:['navBar'],
        data () {
          return {
            navBarBtn:[],
            isFixed: false,
            offsetTop: 0,
            marginTop: 0
          }
        },
        watch: {
            navBar: function (newVal, oldVal) {
                this.navBarBtn = newVal.navBarBtn
            }
        },
        mounted() {
          // 设置bar浮动触发为#fixedBar到顶部的距离
          this.offsetTop = document.querySelector('#fixedBar').offsetTop;
          // console.log(document.querySelector('#fixedBar').offsetTop);

          // 开启滚动监听
          window.addEventListener('scroll',this.handleScroll)
        },
        methods: {
          handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= 683 ) {
              this.isFixed = true;
            }else {
              this.isFixed = false;
            }
          }
        },
        destroyed() {
          window.removeEventListener('scroll', this.handleScroll)// 离开页面关闭监听
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .page-nav-container
        background: #007888
        font-size: 14px
        font-weight: 500
        height: 60px
        .navBar
            text-align center
            padding: 20px 0
            .navBtn
                display: inline
                padding: 0 5px
                margin-right: 30px
                a
                    color: rgba(255, 255, 255, 0.6)
                    padding: 0 5px
                    &:hover
                        color: rgba(255, 255, 255, 1)
                        transition: all 1s
    .fixedBar
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 2;
        background-color: #008FA1;
        transition: all 1s;
    @media screen and (max-width: 640px)
        .page-nav-container
            display: none
</style>