<script>
    export default {
        name: "TheLogo",
    };
</script>

<template functional>
    <div class="logo">
        <router-link :to="{ name: 'Home' }">
            <img src="/static/logo.png" alt="Pro Context" />
        </router-link>
        <span class="logo__text">ProContext</span>
    </div>
</template>

<style lang="scss">
    .logo {
        display: flex;
        align-items: center;
        img {
            width: 45px;
            @include bp($bp-mobile) {
                width: 55px;
            }
        }
        a {
            flex-shrink: 0;
        }
    }

    .logo__text {
        display: block;
        padding: 2px 4px;
        margin-left: -30px;
        color: #505050;
        font-size: 14px;
        font-weight: 700;
        background-color: rgba(#fff, 0.8);
        border-radius: 4px;
        pointer-events: none;
    }
</style>
