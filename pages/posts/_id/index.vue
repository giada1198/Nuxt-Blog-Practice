<template lang="pug">
  .single-post-page
    .post
      h1.post-title {{ loadedPost.title }}
      .post-details
        .post-detail Last updated on {{ loadedPost.updatedDate }}
        .post-detail Written by {{ loadedPost.author }}
      p.post-content {{ loadedPost.content }}
    .post-feedback
      p
        | Let me know what you think about the post, send a mail to 
        a(href='mailto:giada1198@gmail.com') giada1198@gmail.com
        | .
</template>

<script>
import axios from 'axios';

export default {
  asyncData(context) {
    return axios.get('https://nuxt-blog-1198.firebaseio.com/posts/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedPost: res.data
        }
      })
      .catch(e => comtext.error(e));
  }
}
</script>


<style scoped lang="sass">
.single-post-page
  height: 100%
  padding: 30px
  text-align: center
  box-sizing: border-box
  background-color: gray

.post
  width: 100%
  background-color: white

@media(min-width: 768px)
  .post
    width: 600px
    margin: auto

.post-title
  margin: 0

.post-details
  padding: 10px
  box-sizing: border-box
  border-bottom: 3px solid #ccc
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

@media(min-width: 768px)
  .post-details
    flex-direction: row

.post-detail
  color: rgb(88, 88, 88)
  margin: 0 10px

.post-feedback a
  color: red
  text-decoration: none

.post-feedback a:hover, .post-feedback a:active
  color: salmon
</style>
