<script>
import gql from "graphql-tag";
import PostAside from "@/components/PostAside";

export default {
  name: "PostDetail",
  components: { PostAside },
  data() {
    return {
      tags: [],
    };
  },
  apollo: {
    post: {
      query: gql`
        query GetPostBySlug($slug: String!) {
          post(where: { slug: $slug }) {
            title
            tags
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
          posts(
            where: { tags_contains_some: $tags, AND: { slug_not: $slug } }
          ) {
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
      variables() {
        return {
          tags: this.tags,
          slug: this.$route.params.slug,
        };
      },
    },
  },
};
</script>

<template>
  <div v-if="post" class="post-detail">
    <main class="post-detail__main">
      <div class="post-detail__image">
        <img
          v-if="post.coverImage"
          :src="post.coverImage.url"
          :alt="post.title"
        />
      </div>
      <div class="post-detail__content">
        <h1 class="post-detail__title">{{ post.title }}</h1>
        <div class="post-detail__text" v-html="post.content.html"></div>
      </div>
    </main>
    <template v-if="posts">
      <aside v-if="posts.length" class="post-detail__side js-scroll-sidebar">
        <post-aside :posts="posts" title="Похожие статьи"></post-aside></aside
    ></template>
  </div>
</template>

<style lang="scss">
.post-detail {
  display: flex;
  align-items: flex-start;
}

.post-detail__main {
  border-radius: 16px;
  overflow: hidden;
  &:only-child {
    max-width: 900px;
    margin: 0 auto;
  }
}

.post-detail__side {
  flex-basis: 300px;
  flex-shrink: 0;
  max-width: 300px;
  margin-left: 32px;
}

.post-detail__image {
  img {
    width: 100%;
  }
}

.post-detail__content {
  padding: 16px 24px;
  background-color: #fff;
}

.post-detail__title {
  margin: 0 0 20px;
  text-align: center;
}

.post-detail__text {
  line-height: 28px;
  ul,
  ol {
    margin: 15px 0;
    padding-left: 25px;
  }
  h2,
  h3 {
    margin: 15px 0;
  }
  p {
    margin: 10px 0;
  }
  pre {
    padding: 10px;
    background-color: #f3f3f3;
    border-radius: 12px;
  }
  img {
    border-radius: 12px;
  }
}
</style>
