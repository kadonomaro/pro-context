<script>
export default {
  name: "HomeBanner",
};
</script>

<template>
  <div class="home-banner">
    <picture>
      <source
        media="(max-width: 600px)"
        srcset="@/assets/images/banner--mobile.png"
      />
      <img src="@/assets/images/banner.png" alt="" />
    </picture>
  </div>
</template>

<style lang="scss">
.home-banner {
  margin: 0 -8px;
  overflow: hidden;
  @include bp($bp-mobile) {
    margin: 0;
    border-radius: 16px;
  }
  img {
    width: 100%;
  }
}
</style>
