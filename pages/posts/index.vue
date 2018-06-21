<template lang="pug">
  posts-page
    PostList
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList: PostList
  }
}
</script>

<style scoped lang="sass">
  .posts-page
    display: flex
    justify-content: center
    align-items: center
</style>