<script>
import { mapActions, mapState } from "vuex";
import { isMobile, stickyScroll, throttle } from "@/utils";

export default {
  name: "PostFilter",
  props: {
    tags: Array,
    authors: Array,
  },
  data() {
    return {
      filter: {
        tag: "all",
        author: "all",
      },
      stickyScrollWithThrottle: throttle(this.stickyImageScroll, 35),
    };
  },
  computed: {
    ...mapState({
      filterTag: (state) => state.filter.tag,
      filterAuthor: (state) => state.filter.author,
    }),
    isDisabledClearButton() {
      return Object.values(this.filter).every((value) => value === "all");
    },
  },
  mounted() {
    this.filter.tag = this.filterTag;
    this.filter.author = this.filterAuthor;
    window.addEventListener("scroll", this.stickyScrollWithThrottle);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.stickyScrollWithThrottle);
  },
  methods: {
    ...mapActions(["setFilter"]),
    submitHandler() {
      this.setFilter(this.filter);
    },
    clearFilterHandler() {
      this.filter.tag = "all";
      this.filter.author = "all";
      this.setFilter(this.filter);
    },
    stickyImageScroll() {
      if (!isMobile()) {
        const el = document.querySelector(".js-scroll-filter");
        const elWrap = document.querySelector(".js-scroll-filter-wrapper");
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
  <div class="post-filter js-scroll-filter-wrapper">
    <form class="post-filter__form" @submit.prevent="submitHandler">
      <label class="post-filter__label">
        <span class="post-filter__name">Тема</span>
        <select class="base-input" name="tag" v-model="filter.tag">
          <option value="all" selected>Все</option>
          <option
            v-for="tag in tags"
            :key="tag"
            :value="tag"
            :selected="tag === filterTag"
          >
            {{ tag }}
          </option>
        </select>
      </label>

      <label class="post-filter__label">
        <span class="post-filter__name">Автор</span>
        <select class="base-input" name="author" v-model="filter.author">
          <option value="all" selected>Все</option>
          <option
            v-for="author in authors"
            :key="author"
            :value="author"
            :selected="author === filterAuthor"
          >
            {{ author }}
          </option>
        </select>
      </label>
      <div class="post-filter__controls">
        <button class="base-button">Применить</button>
        <button
          class="base-button"
          :disabled="isDisabledClearButton"
          @click.prevent="clearFilterHandler"
        >
          Сбросить
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
@import "~@/assets/css/ui/base-input.scss";
@import "~@/assets/css/ui/base-button.scss";
.post-filter {
  border-radius: 16px;
  box-shadow: 0 0 25px #e2e2e2;
  box-sizing: border-box;
}

.post-filter__form {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
  @include bp($bp-desktop-sm) {
    display: block;
  }
}

.post-filter__name {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
}

.post-filter__label {
  display: block;
  flex-grow: 1;
  width: calc(50% - 8px);
  &:not(:last-of-type) {
    margin-right: 8px;
  }
  @include bp($bp-desktop-sm) {
    width: 100%;
    margin: 0 0 15px;
  }
}

.post-filter__controls {
  display: flex;
  flex-grow: 1;
  width: 100%;
  margin: 25px -4px 0;
  button {
    flex-basis: 50%;
    margin: 0 4px;
  }
  @include bp($bp-desktop-sm) {
    margin: 25px 0 0;
  }
}
</style>
