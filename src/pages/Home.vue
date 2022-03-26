<script>
    import gql from "graphql-tag";
    import { metaInfo } from "@/libs/MetaInfo";
    import CardList from "@/components/CardList";
    import PostAside from "@/components/PostAside";
    import HomeBanner from "@/components/HomeBanner";
    import SkeletonCard from "@/components/SkeletonCard";
    import HomePromo from "@/components/HomePromo";

    export default {
        name: "Home",
        components: { HomePromo, SkeletonCard, HomeBanner, PostAside, CardList },
        computed: {
            recommendedPosts() {
                return this.posts?.filter((post) => post.isShowingInAside);
            },
        },
        apollo: {
            posts: gql`
                query {
                    posts(first: 8) {
                        id
                        slug
                        title
                        announce
                        createdAt
                        tags
                        isShowingInAside
                        backgroundImageColor {
                            hex
                        }
                        previewImage {
                            url
                        }
                        author {
                            name
                            picture {
                                url
                            }
                        }
                    }
                }
            `,
            news: gql`
                query {
                    news(first: 4) {
                        id
                        slug
                        title
                        announce
                        createdAt
                        backgroundImageColor {
                            hex
                        }
                        previewImage {
                            url
                        }
                    }
                }
            `,
        },
        metaInfo() {
            return metaInfo.get("home");
        },
    };
</script>
<template>
    <div class="home">
        <div class="home__section">
            <home-banner></home-banner>
        </div>
        <div class="home__section">
            <home-promo></home-promo>
        </div>
        <h2 class="title-main">Новости</h2>
        <div class="home__inner">
            <main class="home__main">
                <div class="home__section">
                    <card-list v-if="news" :cards="news" type="news"></card-list>
                    <skeleton-card v-else :cards-to-show="4"></skeleton-card>
                </div>

                <div class="home__section">
                    <h2 class="title-main">Популярные статьи</h2>
                    <card-list v-if="posts" :cards="posts"></card-list>
                    <skeleton-card v-else></skeleton-card>
                </div>
            </main>
            <template v-if="recommendedPosts">
                <aside class="home__side" v-if="recommendedPosts.length">
                    <post-aside
                        :posts="recommendedPosts"
                        title="Рекомендуем для чтения"
                    ></post-aside>
                </aside>
            </template>
        </div>
    </div>
</template>

<style lang="scss">
    .home {
        padding-bottom: 30px;
        @include bp($bp-mobile) {
            padding: 30px 0 60px;
        }
    }

    .home__inner {
        @include bp($bp-desktop-sm) {
            display: flex;
        }
    }

    .home__section {
        &:not(:last-child) {
            margin-bottom: 20px;
            @include bp($bp-desktop-sm) {
                margin-bottom: 40px;
            }
        }
    }

    .home__main {
        @include bp($bp-desktop-sm) {
            flex-grow: 1;
        }
    }

    .home__side {
        @include bp($bp-mobile) {
            flex-basis: 300px;
            flex-shrink: 0;
            max-width: 300px;
            margin-left: 32px;
        }
    }
</style>
