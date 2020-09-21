<template>
    <div class="demo">
        <div class="demo-title">I'm Title</div>
        <div class="demo-content">I'm content</div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    components: {

    },
    methods: {

    },
    computed:{

    },
    created() {

    },
    mounted() {

    }
};
</script>

<style scoped lang="stylus">
.demo
    min-height 100vh
    width 375px
    background #00FA9A
    overflow hidden
    &-title
        height 30px
        font-size 20px
        color #B0C4DE
        text-align center
        margin-top 100px
    &-content
        height 300px
        line-height @height
        font-size 16px
        color #F0F8FF
        text-align center
</style>
