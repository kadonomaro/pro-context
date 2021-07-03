<script>
export default {
  name: "TheLogo",
};
</script>

<template>
  <div class="logo">
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/images/logo.svg" alt="ContextHelper" />
    </router-link>
    <span class="logo__text"><span>C</span>ontext<span>H</span>elper</span>
  </div>
</template>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  img {
    width: 40px;
    @include bp($bp-mobile) {
      width: 50px;
    }
  }
  a {
    flex-shrink: 0;
  }
}

.logo__text {
  display: block;
  margin-left: -12px;
  color: #a2a2a2;
  font-size: 16px;
  font-weight: 600;
  pointer-events: none;
  span {
    color: $color-link;
    font-size: 16px;
    @include bp($bp-mobile) {
      font-size: 20px;
    }
  }
}
</style>
