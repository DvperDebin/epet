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
    .classify_header
      height 40px
      position fixed
      z-index 100
      left 0
      right 0
      top 0
      padding 0 15px
      box-sizing border-box
      background-color #fff
      >span
        display inline-block
        width 49%
        height 40px
        line-height 40px
        font-size 13px
        &.left
          padding-right 5%
          box-sizing border-box
          text-align right
        &.right
          padding-left 5%
          box-sizing border-box
          text-align left
          >i
            float right
        .router
          display inline-block
          hight 100%
          font-weight 700
          &.on
            border-bottom 2px solid red


    .classify_empty
      width 100%
      height 46px
</style>
