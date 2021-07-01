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
  border-radius: 16px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>
