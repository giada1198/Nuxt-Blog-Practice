<template lang="pug">
  .drawer-toggle(v-on:click="$emit('toggle')")
    .bar
    .bar
    .bar
</template>

<style scoped lang="sass">
  .drawer-toggle
    display: flex
    flex-direction: column
    justify-content: space-around
    height: 50%
    width: 30px
    height: 30px
    cursor: pointer

  .drawer-toggle
    .bar
      width: 90%
      border: solid 1px black
</style>
