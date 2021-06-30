<script>
import gql from "graphql-tag";
import PostList from "@/components/PostList";

export default {
  name: "Articles",
  components: { PostList },
  apollo: {
    posts: gql`
      query {
        posts {
          id
          slug
          title
          excerpt
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
  },
};
</script>
<template>
  <div class="articles">
    <post-list v-if="posts" :posts="posts"></post-list>
  </div>
</template>

<style lang="scss">
.articles {
}
</style>
