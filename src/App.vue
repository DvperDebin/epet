<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>

import Footer from './components/Footer/footer'

export default {
  components: {
    Footer,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>

