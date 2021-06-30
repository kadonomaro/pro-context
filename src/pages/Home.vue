<script>
import gql from "graphql-tag";
import PostList from "@/components/PostList";

export default {
  name: "Home",
  components: { PostList },
  computed: {
    recommendedPosts() {
      return this.posts.filter((post) => post.isShowingInAside);
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
    <aside class="home__side">
      <h2 class="home__subtitle">Рекомендуем для чтения</h2>
      <post-list v-if="posts" :posts="recommendedPosts" is-vertical></post-list>
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

.home__subtitle {
  margin: 0 0 10px;
  font-size: 24px;
}
</style>
