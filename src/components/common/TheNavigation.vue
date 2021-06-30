<script>
export default {
  name: "TheNavigation",
};
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link class="navigation__link" :to="{ name: 'Articles' }">
          Все статьи
        </router-link>
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/">Автор</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
}

.navigation__list {
  display: flex;
  justify-content: center;
  margin: 0 -6px;
  padding: 0;
  list-style: none;
}

.navigation__item {
  margin: 0 6px;
}

.navigation__link {
  display: block;
  padding: 8px 10px;
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in;
  &.router-link-exact-active {
    color: $color-link;
  }
  &:hover {
    color: $color-link;
  }
}
</style>
