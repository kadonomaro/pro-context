<script>
import PostCard from "@/components/PostCard";

export default {
  name: "PostList",
  components: { PostCard },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    isVertical: Boolean,
  },
};
</script>

<template>
  <div class="post-list" :class="{ 'post-list--vertical': isVertical }">
    <div class="post-list__card" v-for="post in posts" :key="post.id">
      <post-card :post="post" :is-vertical="isVertical"></post-card>
    </div>
  </div>
</template>

<style lang="scss">
.post-list {
  @include bp($bp-mobile) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -12px;
  }
}

.post-list--vertical {
  display: block;
  margin: 0;
  .post-list__card {
    @include bp($bp-desktop-sm) {
      max-width: 100%;
      padding: 0 0 24px;
    }
  }
}

.post-list__card {
  padding-bottom: 12px;
  @include bp($bp-mobile) {
    flex-basis: 50%;
    max-width: 50%;
    padding: 0 12px 24px;
    box-sizing: border-box;
  }
}
</style>
