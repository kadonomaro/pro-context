<script>
import gql from "graphql-tag";
import PostCard from "@/components/PostCard";

export default {
  name: "PostList",
  components: { PostCard },
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
        }
      }
    `,
  },
};
</script>

<template>
  <div class="post-list">
    <div class="post-list__card" v-for="post in posts" :key="post.id">
      <post-card :post="post"></post-card>
    </div>
  </div>
</template>

<style lang="scss">
.post-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}

.post-list__card {
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    max-width: 50%;
    padding: 0 8px 16px;
    box-sizing: border-box;
  }
}
</style>
