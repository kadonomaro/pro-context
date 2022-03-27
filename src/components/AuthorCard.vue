<script>
    import { mapActions } from "vuex";

    export default {
        name: "AuthorCard",
        props: {
            author: {
                type: Object,
                required: true,
            },
        },
        computed: {
            authorImage() {
                return this.author.picture?.url || "/static/empty-author.jpg";
            },
        },
        methods: {
            ...mapActions(["setFilter"]),
            goToArticles() {
                this.setFilter({ author: this.author.name });
                this.$router.push({ name: "Articles" });
            },
        },
    };
</script>

<template>
    <article class="author-card" @click="goToArticles">
        <div class="author-card__image">
            <img :src="authorImage" :alt="author.name" />
        </div>
        <div class="author-card__text">
            <div class="author-card__name">{{ author.name }}</div>
            <div class="author-card__title">{{ author.title }}</div>
        </div>
    </article>
</template>

<style lang="scss">
    .author-card {
        display: flex;
        align-items: center;
        padding: 16px;
        background-color: #fff;
        border-radius: 16px;
        border: 2px solid $color-border;
        cursor: pointer;
        transition: border-color 0.2s ease-in;
        @include bp($bp-desktop-sm) {
            &:hover {
                border-color: $color-border--hover;
            }
        }
    }

    .author-card__image {
        flex-shrink: 0;
        width: 80px;
        height: 80px;
        margin-right: 10px;
        border-radius: 50%;
        overflow: hidden;
        @include bp($bp-mobile) {
            width: 100px;
            height: 100px;
            margin-right: 20px;
        }
    }

    .author-card__name {
        margin-bottom: 5px;
        font-size: 18px;
        font-weight: 500;
    }

    .author-card__title {
        color: #6e798c;
        font-size: 14px;
    }
</style>
