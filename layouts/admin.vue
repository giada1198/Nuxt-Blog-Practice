<template lang="pug">
  div
    nuxt
</template> 

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false,
      windowWidth: 0,
      windowHeight: 0,

      limitPosition: 500,
      scrolled: false,
      lastPosition: 0
    }
  },

  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },

  methods: {
    sidenavToggle: function(order) {
      if(order === 'close') {
        this.displaySidenav = false;
      } else {
        this.displaySidenav = !this.displaySidenav;
      }
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getWindowWidth);
      window.removeEventListener('resize', this.getWindowHeight);
    }
  }
}
</script>

<style lang="sass">
  html
    font-family: 'Roboto', sans-serif
  
  body
    margin: 0px
</style>
