<script>
import TheHeader from "@/components/common/TheHeader";
import TheFooter from "@/components/common/TheFooter";
export default {
  components: { TheFooter, TheHeader },
};
</script>

<template>
  <div id="app">
    <the-header></the-header>
    <div class="container">
      <router-view />
    </div>
    <the-footer></the-footer>
  </div>
</template>

<style lang="scss">
#app {
  padding-top: 120px;
  background: #f7f7f7;
  @include bp($bp-mobile) {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    padding-top: 90px;
    box-sizing: border-box;
  }
}
</style>
