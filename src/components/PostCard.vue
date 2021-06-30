<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
    isVertical: Boolean,
  },
  computed: {
    previewImage() {
      return this.post.previewImage?.url || "/static/empty-photo.svg";
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
    <article class="post-card" :class="{ 'post-card--vertical': isVertical }">
      <div
        class="post-card__image"
        :style="{ background: backgroundImageColor }"
      >
        <img :src="previewImage" :alt="post.title" />
      </div>
      <div class="post-card__content">
        <div class="post-card__head">
          <div class="post-card__tags">
            <div class="post-card__tag" v-for="tag in post.tags" :key="tag">
              {{ tag }}
            </div>
          </div>
          <div class="post-card__date">{{ post.createdAt | date }}</div>
        </div>
        <h2 class="post-card__title">{{ post.title }}</h2>
        <div class="post-card__text">{{ post.excerpt }}</div>
        <footer class="post-card__footer" v-if="post.author">
          <div class="post-card__author">
            <img
              :src="post.author.picture.url"
              :alt="post.author.name"
              class="post-card__author-image"
            />
            <span class="post-card__author-name">{{ post.author.name }}</span>
          </div>
        </footer>
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
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 25px #e2e2e2;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in;
  &:hover {
    box-shadow: 0 0 7px #e2e2e2;
  }
}

.post-card--vertical {
  flex-direction: column;
  background-color: #f9f9f9;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
  .post-card__image {
    width: 100%;
  }
}

.post-card__image {
  position: relative;
  flex-shrink: 0;
  width: 200px;
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
    transform: translate(-50%, -50%);
  }
}

.post-card__content {
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.post-card__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #6e798c;
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
  font-size: 12px;
}

.post-card__title {
  margin: 0 0 15px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
}

.post-card__text {
  flex-grow: 1;
  color: #374a59;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
}

.post-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.post-card__author {
  display: flex;
  align-items: center;
  color: #007ae9;
  font-size: 14px;
  font-weight: 500;
}

.post-card__author-image {
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
