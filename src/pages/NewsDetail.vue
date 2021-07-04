<script>
import gql from "graphql-tag";
import { metaInfo } from "@/libs/MetaInfo";

export default {
  name: "NewsDetail",
  apollo: {
    newsItem: {
      query: gql`
        query GetNewsBySlug($slug: String!) {
          newsItem(where: { slug: $slug }) {
            title
            createdAt
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
  metaInfo() {
    return {
      ...metaInfo.get("newsItem"),
      title: this.newsItem?.title + " | Pro Context",
    };
  },
};
</script>

<template>
  <div v-if="newsItem" class="card-detail">
    <main class="card-detail__main">
      <div class="card-detail__image">
        <img
          v-if="newsItem.coverImage"
          :src="newsItem.coverImage.url"
          :alt="newsItem.title"
        />
      </div>
      <div class="card-detail__content">
        <h1 class="card-detail__title">{{ newsItem.title }}</h1>
        <div class="card-detail__text" v-html="newsItem.content.html"></div>
        <footer class="card-detail__footer">
          <div class="card-detail__date">{{ newsItem.createdAt | date }}</div>
        </footer>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "~@/assets/css/card-detail.scss";
</style>
