<script>
    export default {
        name: "HomeBanner",
    };
</script>

<template functional>
    <div class="home-banner">
        <picture>
            <source media="(max-width: 600px)" srcset="/static/banner--mobile.png" />
            <img src="/static/banner.png" alt="" />
        </picture>
    </div>
</template>

<style lang="scss">
    .home-banner {
        position: relative;
        margin: 0 -8px;
        padding-bottom: 75%;
        overflow: hidden;
        img {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
        }
        @include bp($bp-mobile) {
            margin: 0;
            padding-bottom: 21.4%;
            border-radius: 16px;
        }
    }
</style>
