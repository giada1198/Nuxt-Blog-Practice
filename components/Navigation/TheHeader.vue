<template lang="pug">
.header-container
  header.the-header
    transition(name="iconTransition")
      TheSideNavToggle(v-show='icon' v-on:toggle="$emit('sidenavToggle')")
    .logo
      nuxt-link(to="/") GIADA BLOG LITE
    .spacer
    transition(name="navTransition")
      .navigation-items(v-show="!icon")
        ul.nav-list
          li.nav-item
            nuxt-link(to="/posts") BLOG
          li.nav-item
            nuxt-link(to="/about") ABOUT
          li.nav-item
            nuxt-link(to="/admin") ADMIN
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  props: {
    icon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggle: false
    }
  },
  
};
</script>


<style scoped lang="sass">
.header-container
  height: 60px

.the-header
  width: 100%
  position: fixed
  height: 60px
  display: flex
  justify-content: space-around
  align-items: center
  background-color: white
  z-index: 100
  box-sizing: border-box
  padding: 0 20px

.iconTransition-enter-active, .iconTransition-leave-active
  transition: opacity .5s

.iconTransition-enter, .iconTransition-leave-to
  opacity: 0

.navTransition-enter-active, .navTransition-leave-active
  transition: opacity 1s

.navTransition-enter, .navTransition-leave-to
  opacity: 0

.logo
  position: absolute
  left: 65px
  margin: 0px
  letter-spacing: 2px
  font-size: 1.3rem
  font-weight: 300
  transition-duration: 0.5s

.logo a
  text-decoration: none
  color: black

.spacer
  flex: 1

.navigation-items
  // display: none

@media(min-width: 768px)
  .logo
    left: 20px
  .navigation-items
    // display: block

.nav-list
  list-style: none
  padding: 0
  margin: 0
  display: flex

.nav-item
  margin: 0 10px

.nav-item a
  text-decoration: none
  color: black
  font-size: 14px
  font-weight: 300
  letter-spacing: 2px

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active 
  color: red
</style>
