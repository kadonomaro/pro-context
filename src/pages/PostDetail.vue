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
  metaInfo() {
    return {
      ...metaInfo.get("post"),
      title: this.post?.title + " | WordEd",
    };
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
        <footer class="post-detail__footer">
          <div class="post-detail__tags">
            <div
              class="post-detail__tag"
              v-for="tag in post.tags"
              :key="tag"
              @click="goToArticles(tag)"
            >
              {{ tag }}
            </div>
          </div>
          <div class="post-detail__date">{{ post.createdAt | date }}</div>
        </footer>
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
  @include bp($bp-desktop-sm) {
    display: flex;
    align-items: flex-start;
  }
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
  margin-top: 24px;
  @include bp($bp-desktop-sm) {
    flex-basis: 300px;
    flex-shrink: 0;
    max-width: 300px;
    margin-top: 0;
    margin-left: 32px;
  }
}

.post-detail__image {
  img {
    width: 100%;
  }
}

.post-detail__content {
  padding: 8px 12px;
  background-color: #fff;
  @include bp($bp-mobile) {
    padding: 16px 24px;
  }
}

.post-detail__date {
  color: #6e798c;
  font-weight: 500;
  font-size: 14px;
}

.post-detail__tags {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}

.post-detail__tag {
  color: $color-link;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  &:not(:last-child) {
    margin-right: 12px;
  }
}

.post-detail__title {
  margin: 0 0 20px;
  font-size: 20px;
  text-align: center;
  @include bp($bp-desktop-sm) {
    font-size: 30px;
  }
}

.post-detail__text {
  line-height: 22px;
  font-size: 14px;
  @include bp($bp-mobile) {
    line-height: 28px;
    font-size: 16px;
  }
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
    height: auto;
    border-radius: 12px;
  }
}
</style>
