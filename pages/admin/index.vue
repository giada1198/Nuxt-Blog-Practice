<template lang="pug">
  .admin-page
    .new-post
      AppButton(v-on:click='$router.push("/admin/new-post")') Create Post
    .existing-posts
      h1 Existing Posts
      PostList(v-bind:posts='loadedPosts' isAdmin)
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton';

export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
}
</script>

<style scoped lang="sass">

</style>