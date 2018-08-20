<template lang="pug">
  .error-page
    h1 Oops, something went wrong!
    p
      | Back to 
      a(href="/giada-website") safety
      |  !
</template>

<style scoped lang="sass">
.error-page
  text-align: center

.error-page a
  text-decoration: none
  color: red

.error-page a:hover,
.error-page a:active
  color: salmon
</style>