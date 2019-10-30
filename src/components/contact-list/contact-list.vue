<template>
    <div class="contact-list">
        <ul class="contact-li">
            <li><a :href="basicInfo.sendEmail">{{basicInfo.email}}</a></li>
            <li><a href="#">{{basicInfo.mobile}}</a></li>
            <li><a href="#">{{basicInfo.authorValue}}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "contact-list",
        props:['basicInfo'],
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .contact-list
        padding: 30px 0
        text-align center
        background-color: #2C8FA1
        ul
            max-width: 900px
            margin: 0 auto
            padding-left: 0
            li
                display: inline
                list-style: none
                padding: 5px 0
                margin-right: 30px
                a
                    text-decoration: none
                    color: rgba(255, 255, 255, 0.8)
                    &:hover
                        color: rgba(255, 255, 255, 1)
                        text-decoration: underline
                        transition: all 1s
    @media screen and (max-width: 615px)
        .contact-list
            .contact-li
                li
                    display: inline-block
                    width: 100vw
                    margin: 0
                    margin-bottom: 15px

</style>