<script>
    export default {
        name: "TheNavigation",
        routes() {
            return [
                { title: "Новости", name: "News" },
                { title: "Все статьи", name: "Articles" },
                { title: "Авторы", name: "Authors" },
            ];
        },
    };
</script>

<template functional>
    <nav class="navigation">
        <ul class="navigation__list">
            <li
                v-for="(route, index) in $options.routes()"
                :key="index"
                class="navigation__item"
            >
                <router-link class="navigation__link" :to="{ name: route.name }">
                    {{ route.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
    .navigation__list {
        display: flex;
        justify-content: center;
        margin: 0 -6px;
        padding: 0;
        list-style: none;
    }

    .navigation__item {
        margin: 0 6px;
    }

    .navigation__link {
        display: block;
        padding: 8px;
        color: inherit;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        transition: color 0.2s ease-in;
        &.router-link-exact-active {
            color: $color-link;
        }
        &:hover {
            color: $color-link;
        }
        @include bp($bp-mobile) {
            padding: 8px 10px;
        }
    }
</style>
