<script>
import { mapActions, mapState } from "vuex";
//TODO: сброс фильтра

export default {
  name: "PostFilter",
  props: {
    tags: Array,
  },
  data() {
    return {
      filter: {
        tag: "all",
        author: "all",
      },
    };
  },
  computed: {
    ...mapState({
      filterTag: (state) => state.filter.tag,
      filterAuthor: (state) => state.filter.author,
    }),

    // temporary data
    authors() {
      return ["Ronak Ganatra", "Jamie Barton"];
    },
  },
  mounted() {
    this.filter.tag = this.filterTag;
    this.filter.author = this.filterAuthor;
  },
  methods: {
    ...mapActions(["setFilter"]),
    submitHandler() {
      this.setFilter(this.filter);
    },
  },
};
</script>

<template>
  <div class="post-filter">
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
      <button class="base-button">Применить</button>
    </form>
  </div>
</template>

<style lang="scss">
@import "~@/assets/css/ui/base-input.scss";
@import "~@/assets/css/ui/base-button.scss";
.post-filter {
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
}

.post-filter__form {
  display: flex;
  align-items: flex-end;
}

.post-filter__name {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
}

.post-filter__label {
  margin-right: 10px;
}
</style>
