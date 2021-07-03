<script>
import gql from "graphql-tag";
import { metaInfo } from "@/libs/MetaInfo";
import CardList from "@/components/CardList";
import SkeletonCard from "@/components/SkeletonCard";

export default {
  name: "Articles",
  components: { SkeletonCard, CardList },
  apollo: {
    news: gql`
      query {
        news {
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
    return metaInfo.get("news");
  },
};
</script>

<template>
  <div class="news">
    <h1 class="title-main">Все новости</h1>
    <div class="news__inner">
      <main class="news__main">
        <card-list v-if="news" :cards="news" type="news"></card-list>
        <skeleton-card v-else></skeleton-card>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.news {
  padding-top: 20px;
  @include bp($bp-mobile) {
    padding-top: 0;
  }
}
</style>
