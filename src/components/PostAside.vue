<script>
import { isMobile, stickyScroll, throttle } from "@/utils";
import CardList from "@/components/CardList";

export default {
  name: "PostAside",
  components: {
    CardList,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    title: String,
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
      if (!isMobile()) {
        const el = document.querySelector(".js-scroll-sidebar");
        const elWrap = document.querySelector(".js-scroll-sidebar-wrapper");
        if (el && elWrap) {
          stickyScroll({
            el,
            elWrap,
            topMargin: 90,
            classNameDivider: "footer",
          });
        }
      }
    },
  },
};
</script>

<template>
  <div class="post-aside js-scroll-sidebar-wrapper">
    <h2 class="post-aside__title">{{ title }}</h2>
    <card-list :cards="posts" is-vertical></card-list>
  </div>
</template>

<style lang="scss">
.post-aside {
  padding: 16px 16px 0;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 25px $color-shadow;
  box-sizing: border-box;
  .card-list__item {
    max-width: 100%;
    padding: 0 0 16px;
  }
}

.post-aside__title {
  margin: 0 0 10px;
  font-size: 24px;
}
</style>
