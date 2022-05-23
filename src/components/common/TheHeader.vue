<script>
    import TheNavigation from "@/components/common/TheNavigation";
    import TheSocialLinks from "@/components/common/TheSocialLinks";
    import TheLogo from "@/components/common/TheLogo";

    export default {
        name: "TheHeader",
        components: { TheLogo, TheSocialLinks, TheNavigation },
    };
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__logo">
                    <the-logo></the-logo>
                </div>
                <div class="header__nav">
                    <the-navigation></the-navigation>
                </div>
                <div class="header__social">
                    <the-social-links></the-social-links>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
        padding: 12px 0 6px;
        background-color: #fff;
        box-shadow: 0 0 20px rgba(#000, 0.1);
        @include bp($bp-mobile) {
            padding-bottom: 12px;
        }
        @supports (backdrop-filter: blur()) {
            backdrop-filter: blur(5px);
            background-color: rgba(#fff, 0.85);
        }
    }

    .header__inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .header__logo {
        margin-right: 10px;
        @include bp($bp-mobile) {
            margin-right: 40px;
        }
    }

    .header__nav {
        order: 3;
        width: 100%;
        @include bp($bp-mobile) {
            order: initial;
            width: auto;
            margin-right: auto;
        }
    }

    .header__social {
        flex-shrink: 0;
    }
</style>
