<script>
export default {
  name: "TheLogo",
};
</script>

<template>
  <div class="logo">
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/images/logo.png" alt="ContextHelper" />
    </router-link>
    <span class="logo__text"><span>C</span>ontext<span>H</span>elper</span>
  </div>
</template>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  img {
    width: 45px;
    @include bp($bp-mobile) {
      width: 55px;
    }
  }
  a {
    flex-shrink: 0;
  }
}

.logo__text {
  display: block;
  margin-left: -30px;
  color: #505050;
  font-size: 16px;
  font-weight: 600;
  pointer-events: none;
  span {
    color: #fff;
    font-size: 20px;
    -webkit-text-stroke: 1px #505050;
    @include bp($bp-mobile) {
      font-size: 28px;
    }
  }
}
</style>
