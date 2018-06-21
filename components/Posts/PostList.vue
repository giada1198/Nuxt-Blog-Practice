<template lang="pug">
  section.post-list
    PostPreview(
      id='1' title='Hello! there!' previewText='This is my first post!'
      thumbnail='https://www.taiwansuzuki.com.tw/uploads/images/car/swift/inner%20page/detail-01.png')
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview: PostPreview
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