<script>
export default {
  name: "TheLogo",
};
</script>

<template>
  <div class="logo">
    <img src="@/assets/logo.svg" alt="WordEd" />
    <span class="logo__text">WordEd</span>
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
  margin-left: 8px;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  -webkit-text-stroke: 1px #909090;
}
</style>
