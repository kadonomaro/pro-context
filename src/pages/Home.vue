<script>
import gql from "graphql-tag";
import { metaInfo } from "@/libs/MetaInfo";
import PostList from "@/components/PostList";
import PostAside from "@/components/PostAside";
import HomeBanner from "@/components/HomeBanner";
import SkeletonPostCard from "@/components/SkeletonPostCard";

export default {
  name: "Home",
  components: { SkeletonPostCard, HomeBanner, PostAside, PostList },
  computed: {
    recommendedPosts() {
      return this.posts?.filter((post) => post.isShowingInAside);
    },
  },
  apollo: {
    posts: gql`
      query {
        posts(first: 6) {
          id
          slug
          title
          announce
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
    news: gql`
      query {
        news(first: 4) {
          id
          slug
          title
          announce
          createdAt
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
  metaInfo() {
    return metaInfo.get("home");
  },
};
</script>
<template>
  <div class="home">
    <div class="home__banner">
      <home-banner></home-banner>
    </div>
    <h2 class="title-main">Новости</h2>
    <div class="home__inner">
      <main class="home__main">
        <div class="home__section">
          <post-list v-if="news" :cards="news"></post-list>
          <skeleton-post-card v-else></skeleton-post-card>
        </div>

        <div class="home__section">
          <h2 class="title-main">Популярные статьи</h2>
          <post-list v-if="posts" :cards="posts"></post-list>
          <skeleton-post-card v-else></skeleton-post-card>
        </div>
      </main>
      <aside class="home__side js-scroll-sidebar" v-if="recommendedPosts">
        <post-aside
          :posts="recommendedPosts"
          title="Рекомендуем для чтения"
        ></post-aside>
      </aside>
    </div>
  </div>
</template>

<style lang="scss">
.home__inner {
  @include bp($bp-desktop-sm) {
    display: flex;
    align-items: flex-start;
  }
}

.home__banner {
  margin-bottom: 20px;
  @include bp($bp-desktop-sm) {
    margin-bottom: 40px;
  }
}

.home__section {
  margin-bottom: 20px;
  @include bp($bp-desktop-sm) {
    margin-bottom: 40px;
  }
}

.home__main {
  @include bp($bp-desktop-sm) {
    flex-grow: 1;
    margin-right: 32px;
  }
}

.home__side {
  @include bp($bp-mobile) {
    flex-basis: 300px;
    flex-shrink: 0;
    max-width: 300px;
  }
}
</style>
