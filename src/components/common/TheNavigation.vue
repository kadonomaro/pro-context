<script>
export default {
  name: "TheNavigation",
};
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link class="navigation__link" to="/">Статьи</router-link>
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
  padding: 8px 10px 8px;
  color: $color-link;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.2s ease-in;
  &:hover {
    border-bottom-color: $color-link;
  }
}
</style>
