<script>
import { mapState } from "vuex";
import gql from "graphql-tag";
import { uniqueArray } from "@/utils";
import PostList from "@/components/PostList";
import PostFilter from "@/components/PostFilter";

export default {
  name: "Articles",
  components: { PostFilter, PostList },
  computed: {
    ...mapState({
      filterTag: (state) => state.filter.tag,
      filterAuthor: (state) => state.filter.author,
    }),
    postsTags() {
      return this.posts?.flatMap((post) => post.tags).filter(uniqueArray);
    },
    filteredPosts() {
      return this.posts
        ?.filter((post) => {
          return this.filterTag === "all"
            ? post
            : post.tags.includes(this.filterTag);
        })
        .filter((post) => {
          return this.filterAuthor === "all"
            ? post
            : post.author?.name === this.filterAuthor;
        });
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
    <aside class="articles__side">
      <div class="articles__filter js-scroll-filter">
        <post-filter :tags="postsTags"></post-filter>
      </div>
    </aside>
    <main class="articles__main">
      <post-list v-if="filteredPosts" :posts="filteredPosts"></post-list>
    </main>
  </div>
</template>

<style lang="scss">
.articles {
  display: flex;
  align-items: flex-start;
}

.articles__main {
  margin-left: 32px;
}

.articles__side {
  flex-basis: 300px;
  flex-shrink: 0;
  max-width: 300px;
}

.articles__filter {
  margin-bottom: 20px;
}
</style>
