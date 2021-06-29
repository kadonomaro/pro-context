<template>
  <div class="hello">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <img width="200" :src="post.coverImage.url" alt="" />
        <div>{{ post.title }}</div>
        <div v-html="post.content.html"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  apollo: {
    posts: gql`
      query {
        posts {
          id
          slug
          title
          content {
            html
          }
          coverImage {
            url
          }
        }
      }
    `,
  },
};
</script>

<style lang="scss"></style>
