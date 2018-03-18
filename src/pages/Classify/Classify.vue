<template>
  <div id="classify">
  <!--   头部-->
    <ClassifyHeader />

    <router-view></router-view>

    <!-- 空白占位盒子 -->
    <div class="classify_empty">

    </div>
  </div>
</template>

<script>
  import ClassifyHeader from '../../components/ClassifyHeader/ClassifyHeader'
  export default {
    components:{
      ClassifyHeader
    },

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #classify
    width 100%
    height 100%
    background-color #eee
    position relative
    .classify_empty
      width 100%
      height 46px
</style>
