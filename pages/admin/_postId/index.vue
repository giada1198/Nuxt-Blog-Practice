<template lang="pug">
  .admin-post-page
    section.update-form
      AdminPostForm(v-bind:post='loadedPost' v-on:submit='onSubmitted')
</template> 

<script>
import axios from 'axios';
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios.get('https://nuxt-blog-1198.firebaseio.com/posts/' +
        context.params.postId + '.json')
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId } 
        };
      })
      .catch(e => comtext.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
        .then(() => { this.$router.push('/admin') });
    }
  }
}
</script>

<style scoped lang="sass">
  .update-form
    width: 90%
    margin: 20px auto
  @media (min-width: 768px)
    .update-form
      width: 500px
</style>