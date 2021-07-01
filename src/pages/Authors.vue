<script>
import gql from "graphql-tag";
import AuthorList from "@/components/AuthorList";

export default {
  name: "Authors",
  components: { AuthorList },
  apollo: {
    authors: gql`
      query {
        authors {
          id
          name
          title
          picture {
            url
          }
        }
      }
    `,
  },
};
</script>

<template>
  <div class="about">
    <h1 class="about__title title-main">Авторы и редакторы статей</h1>
    <div v-if="authors" class="about__authors">
      <author-list :authors="authors"></author-list>
    </div>
  </div>
</template>

<style lang="scss">
.about__authors {
  margin-bottom: 25px;
}
</style>
