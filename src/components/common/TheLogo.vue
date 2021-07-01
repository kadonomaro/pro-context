<script>
export default {
  name: "TheLogo",
  computed: {
    isHomePage() {
      return this.$route.name === "Home";
    },
  },
};
</script>

<template>
  <div class="logo">
    <img v-if="isHomePage" src="@/assets/logo.svg" alt="WordEd" />
    <router-link v-else :to="{ name: 'Home' }">
      <img src="@/assets/logo.svg" alt="WordEd" />
    </router-link>
    <span class="logo__text"><span>W</span>ordEd</span>
  </div>
</template>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  img {
    width: 45px;
  }
}

.logo__text {
  display: block;
  margin-left: -32px;
  color: #a2a2a2;
  font-size: 20px;
  font-weight: 600;
  pointer-events: none;
  span {
    color: #007ae9;
    font-size: 32px;
    letter-spacing: -0.1em;
  }
}
</style>
