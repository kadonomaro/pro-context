<script>
import gql from "graphql-tag";

export default {
  name: "PostDetail",
  apollo: {
    post: {
      query: gql`
        query GetPostBySlug($slug: String!) {
          post(where: { slug: $slug }) {
            title
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
    },
  },
};
</script>

<template>
  <div class="post-detail">
    <template v-if="post">
      <img :src="post.coverImage.url" alt="post.title" />
      <h1>{{ post.title }}</h1>
      <div v-html="post.content.html"></div>
    </template>
  </div>
</template>

<style lang="scss"></style>
