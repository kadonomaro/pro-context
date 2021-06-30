<script>
import { stickyScroll, throttle } from "@/utils";
import PostList from "@/components/PostList";

export default {
  name: "PostAside",
  components: {
    PostList,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      stickyScrollWithThrottle: throttle(this.stickyImageScroll, 35),
    };
  },
  mounted() {
    window.addEventListener("scroll", this.stickyScrollWithThrottle);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.stickyScrollWithThrottle);
  },
  methods: {
    stickyImageScroll() {
      const el = document.querySelector(".js-scroll-sidebar");
      const elWrap = document.querySelector(".js-scroll-sidebar-wrapper");
      if (el && elWrap) {
        stickyScroll({
          el,
          elWrap,
          topMargin: 150,
          classNameDivider: "footer",
        });
      }
    },
  },
};
</script>

<template>
  <div class="post-aside js-scroll-sidebar-wrapper">
    <h2 class="post-aside__title">Рекомендуем для чтения</h2>
    <post-list :posts="posts" is-vertical></post-list>
  </div>
</template>

<style lang="scss">
.post-aside__title {
  margin: 0 0 10px;
  font-size: 24px;
}
</style>
