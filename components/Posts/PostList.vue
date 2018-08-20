<template lang="pug">
  section.post-list
    PostPreview(
      v-bind:is-admin='isAdmin'
      v-for='post in posts'
      v-bind:key='post.id'
      v-bind:id='post.id'
      v-bind:thumbnail='post.thumbnail'
      v-bind:title='post.title'
      v-bind:previewText='post.previewText')
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview: PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
  .post-list
    display: flex
    padding: 20px
    box-sizing: border-box
    flex-wrap: wrap
    align-items: center
    justify-content: center
</style>