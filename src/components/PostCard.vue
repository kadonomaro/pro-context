<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <router-link :to="{ name: 'PostDetail', params: { slug: post.slug } }">
    <article class="post-card">
      <div class="post-card__image">
        <img :src="post.coverImage.url" :alt="post.title" />
      </div>
      <div class="post-card__text">
        <h2 class="post-card__title">{{ post.title }}</h2>
      </div>
    </article>
  </router-link>
</template>

<style lang="scss">
.post-card {
  height: 100%;
  border: 1px solid #f2f2f2;
}

.post-card__image {
  img {
    width: 100%;
  }
}

.post-card__text {
  padding: 10px;
}

.post-card__title {
  margin: 0 0 10px;
  font-size: 18px;
}
</style>
