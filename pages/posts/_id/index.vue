<template lang="pug">
  .single-post-page
    .post
      h1.post-title Title of the Post
      .post-details
        .post-detail Last updated on XXX
        .post-detail Written by Name
      p.post-content Content of the post
    .post-feedback
      p
        | Let me know what you think about the post, send a mail to 
        a(href='mailto:giada1198@gmail.com') giada1198@gmail.com
        | .
</template>

<style scoped lang="sass">
*
  // border: solid 1px black

// html, body
//   width: 100%
//   height: 100%
//   margin: 0px
//   padding: 0px
//   background: red

//   display: flex
//   justify-content: center
//   align-items: center
//   flex-direction: column

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
