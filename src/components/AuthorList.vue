<script>
import AuthorCard from "@/components/AuthorCard";
export default {
  name: "AuthorList",
  components: { AuthorCard },
  props: {
    authors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="author-list">
    <div class="author-list__card" v-for="author in authors" :key="author.id">
      <author-card :author="author"></author-card>
    </div>
  </div>
</template>

<style lang="scss">
.author-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.author-list__card {
  @media screen and (min-width: 768px) {
    flex-basis: 33.3333%;
    max-width: 33.3333%;
    padding: 0 12px 24px;
    box-sizing: border-box;
  }
}
</style>
