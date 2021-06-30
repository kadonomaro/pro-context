<script>
import TheHeader from "@/components/common/TheHeader";
export default {
  components: { TheHeader },
};
</script>

<template>
  <div id="app">
    <the-header></the-header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  padding-top: 200px;
  background: #f9f9f9;
}
</style>
