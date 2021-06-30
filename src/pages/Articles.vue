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
    <div class="articles__filter">
      <post-filter :tags="postsTags"></post-filter>
    </div>
    <post-list v-if="filteredPosts" :posts="filteredPosts"></post-list>
  </div>
</template>

<style lang="scss">
.articles {
}

.articles__filter {
  margin-bottom: 20px;
}
</style>
