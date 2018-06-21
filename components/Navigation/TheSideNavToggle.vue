<template lang="pug">
  .drawer-toggle(v-on:click="$emit('toggle')")
    .bar(:class="{'bar-top':top}")
    .bar(:class="{'bar-top':top}")
    .bar(:class="{'bar-top':top}")
</template>

<script>
export default {
  props: {
    top: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="sass">
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
      transition-duration: 0.5s
    .bar-top
      border: solid 1px white

</style>
