<script>
import TheNavigation from "@/components/common/TheNavigation";
import TheSocialLinks from "@/components/common/TheSocialLinks";
import TheLogo from "@/components/common/TheLogo";
export default {
  name: "TheHeader",
  components: { TheLogo, TheSocialLinks, TheNavigation },
};
</script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="header__logo">
        <the-logo></the-logo>
      </div>
      <div class="header__social">
        <the-social-links></the-social-links>
      </div>
    </div>
    <div class="header__bottom"></div>

    <div class="header__nav">
      <the-navigation></the-navigation>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 12px 0;
  background-color: #fff;
  box-shadow: 0 0 20px #f3f3f3;
}

.header__top {
  display: flex;
  justify-content: space-between;
}

.header__logo {
}

.header__social {
}

.header__nav {
}
</style>
