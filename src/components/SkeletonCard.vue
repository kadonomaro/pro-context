<script>
export default {
  name: "SkeletonCard",
  props: {
    cardsToShow: {
      type: Number,
      default: 6,
    },
  },
};
</script>

<template>
  <div class="skeleton-card">
    <div
      class="skeleton-card__item"
      v-for="(_, index) in cardsToShow"
      :key="index"
    ></div>
  </div>
</template>

<style lang="scss">
@mixin background-gradient {
}

.skeleton-card {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.skeleton-card__item {
  border-radius: 16px;
  box-sizing: border-box;

  @include bp($bp-desktop-sm) {
    flex-basis: calc(50% - 24px);
    max-width: calc(50% - 24px);
    height: 250px;
    margin: 0 12px 24px;
    background-color: #d0d0d0;
    background-size: 100%;
    animation: shine-lines 2s infinite linear;
  }
}
@keyframes shine-lines {
  0%,
  100% {
    background-color: #eaeaea;
  }
  50% {
    background-color: #d0d0d0;
  }
}
</style>
