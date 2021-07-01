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
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <the-logo></the-logo>
        </div>
        <div class="header__social">
          <the-social-links></the-social-links>
        </div>
      </div>
      <div class="header__nav">
        <the-navigation></the-navigation>
      </div>
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
  padding: 12px;
  background-color: #f2f2f2;
  box-shadow: 0 0 20px rgba(#000, 0.2);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__nav {
  @include bp($bp-mobile) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.header__social {
  flex-shrink: 0;
}

.header__nav {
}
</style>
