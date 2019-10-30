<template>
    <a class="cardContainer" :href="projectsMsg.link" target="_blank">
        <div class="card">
            <figure class="figure">
                <img :src="projectsMsg.picUrl" alt="图片" class="pic">
            </figure>
            <div class="content">
                <h3>{{projectsMsg.name}}</h3>
                <span class="stack">{{projectsMsg.frame}}</span>
                <p class="desc">{{projectsMsg.desc}}</p>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name: "image-card",
        props:['projectsMsg']
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .cardContainer
        padding: 0 10px
        width: 200px
        height: 272px
        display: inline-block
        margin 0 auto
        margin-bottom: 30px
        vertical-align: top
        &:hover
            opacity:0.8;
        @media screen and (max-width: 615px)
                width: 320px
                margin-top: 30px;
        .card
            box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14)
            .figure
                .pic
                    width: 100%
            .content
                background-color: #00BCD4
                color: #ffffff
                height: 100%
                width: 100%
                padding: 20px
                box-sizing border-box
                h3
                    font-size: 16px
                    font-weight: 500
                    margin-bottom: 5px
                .stack
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.8)
                .desc
                    font-size: 14px
                    margin-top: 20px

</style>