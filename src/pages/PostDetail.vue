<script>
    import { mapActions } from "vuex";
    import gql from "graphql-tag";
    import { metaInfo } from "@/libs/MetaInfo";
    import PostAside from "@/components/PostAside";

    export default {
        name: "PostDetail",
        components: { PostAside },
        data() {
            return {
                tags: [],
            };
        },
        methods: {
            ...mapActions(["setFilter"]),
            goToArticles(tag) {
                this.setFilter({ tag });
                this.$router.push({ name: "Articles" });
            },
        },
        apollo: {
            post: {
                query: gql`
                    query GetPostBySlug($slug: String!) {
                        post(where: { slug: $slug }) {
                            title
                            tags
                            createdAt
                            content {
                                html
                            }
                            coverImage {
                                url
                            }
                        }
                    }
                `,
                variables() {
                    return {
                        slug: this.$route.params.slug,
                    };
                },
                update(data) {
                    this.tags = data.post.tags;
                    return data.post;
                },
            },
            posts: {
                query: gql`
                    query GetPostsByTag($tags: [String!], $slug: String!) {
                        posts(where: { tags_contains_some: $tags, AND: { slug_not: $slug } }) {
                            id
                            slug
                            title
                            announce
                            createdAt
                            tags
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
                variables() {
                    return {
                        tags: this.tags,
                        slug: this.$route.params.slug,
                    };
                },
            },
        },
        metaInfo() {
            return {
                ...metaInfo.get("post"),
                title: this.post?.title + " | Pro Context",
            };
        },
    };
</script>

<template>
    <div v-if="post" class="card-detail">
        <main class="card-detail__main">
            <div class="card-detail__image">
                <img v-if="post.coverImage" :src="post.coverImage.url" :alt="post.title" />
            </div>
            <div class="card-detail__content">
                <h1 class="card-detail__title">{{ post.title }}</h1>
                <div class="card-detail__text" v-html="post.content.html"></div>
                <footer class="card-detail__footer">
                    <div class="card-detail__tags">
                        <div
                            class="card-detail__tag"
                            v-for="tag in post.tags"
                            :key="tag"
                            @click="goToArticles(tag)"
                        >
                            {{ tag }}
                        </div>
                    </div>
                    <div class="card-detail__date">{{ post.createdAt | date }}</div>
                </footer>
            </div>
        </main>
        <template v-if="posts">
            <aside v-if="posts.length" class="card-detail__side js-scroll-sidebar">
                <post-aside :posts="posts" title="Похожие статьи"></post-aside></aside
        ></template>
    </div>
</template>

<style lang="scss">
    @import "~@/assets/css/card-detail.scss";
    .card-detail__side {
        margin-top: 24px;
        @include bp($bp-desktop-sm) {
            flex-basis: 300px;
            flex-shrink: 0;
            max-width: 300px;
            margin-top: 0;
            margin-left: 32px;
        }
    }
</style>
