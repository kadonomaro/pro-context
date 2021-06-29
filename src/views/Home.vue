<script>
import PostList from "@/components/PostList";
export default {
  name: "Home",
  components: { PostList },
};
</script>
<template>
  <div class="home">
    <div class="container">
      <post-list></post-list>
    </div>
  </div>
</template>
