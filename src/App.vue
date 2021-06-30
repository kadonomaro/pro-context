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
  padding-top: 200px;
  background: #f9f9f9;
}
</style>
