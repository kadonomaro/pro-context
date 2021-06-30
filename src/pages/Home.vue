<script>
import gql from "graphql-tag";
import PostList from "@/components/PostList";
import PostAside from "@/components/PostAside";

export default {
  name: "Home",
  components: { PostAside, PostList },
  computed: {
    recommendedPosts() {
      return this.posts?.filter((post) => post.isShowingInAside);
    },
  },
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
  },
};
</script>
<template>
  <div class="home">
    <main class="home__main">
      <post-list v-if="posts" :posts="posts"></post-list>
    </main>
    <aside class="home__side js-scroll-sidebar" v-if="recommendedPosts">
      <post-aside
        :posts="recommendedPosts"
        title="Рекомендуем для чтения"
      ></post-aside>
    </aside>
  </div>
</template>

<style lang="scss">
.home {
  display: flex;
  align-items: flex-start;
}

.home__main {
  margin-right: 32px;
}

.home__side {
  flex-basis: 300px;
  flex-shrink: 0;
  max-width: 300px;
}
</style>
