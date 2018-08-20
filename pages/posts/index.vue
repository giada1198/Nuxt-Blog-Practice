<template lang="pug">
  posts-page
    PostList(v-bind:posts='loadedPosts')
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style scoped lang="sass">
  .posts-page
    display: flex
    justify-content: center
    align-items: center
</style>