<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    previewImage() {
      return this.post.previewImage?.url || "https://via.placeholder.com/400";
    },
    backgroundImageColor() {
      return this.post.backgroundImageColor
        ? this.post.backgroundImageColor?.hex
        : "linear-gradient(135deg, #f395ba 0%, #fed182 100%)";
    },
  },
};
</script>

<template>
  <router-link
    class="post-card-link"
    :to="{ name: 'PostDetail', params: { slug: post.slug } }"
  >
    <article class="post-card">
      <div
        class="post-card__image"
        :style="{ background: backgroundImageColor }"
      >
        <img :src="previewImage" :alt="post.title" />
      </div>
      <div class="post-card__content">
        <div class="post-card__service">
          <div class="post-card__tags">
            <div class="post-card__tag" v-for="tag in post.tags" :key="tag">
              {{ tag }}
            </div>
          </div>
          <div class="post-card__date">{{ post.createdAt | date }}</div>
        </div>
        <h2 class="post-card__title">{{ post.title }}</h2>
        <div class="post-card__text">{{ post.excerpt }}</div>
      </div>
    </article>
  </router-link>
</template>

<style lang="scss">
.post-card-link {
  text-decoration: none;
  color: inherit;
}

.post-card {
  display: flex;
  height: 100%;
  text-decoration: none;
  border-radius: 16px;
  box-shadow: 0 0 25px #f2f2f5;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in;
  &:hover {
    box-shadow: 0 0 7px #e2e2e2;
  }
}

.post-card__image {
  position: relative;
  flex-shrink: 0;
  width: 250px;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 75%;
    height: 75%;
    transform: translate(-50%, -50%);
  }
}

.post-card__content {
  padding: 24px 32px;
}

.post-card__service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.post-card__tags {
  display: flex;
}

.post-card__tag {
  text-transform: uppercase;
  font-size: 14px;
  &:not(:last-child) {
    margin-right: 5px;
  }
}

.post-card__date {
  font-size: 14px;
}

.post-card__title {
  margin: 0 0 15px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.post-card__text {
  color: #374a59;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}
</style>
