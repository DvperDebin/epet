<template>
  <div class="classify_header">
      <span class="left">
        <router-link class="router" to="/classify/types" :class="{on:$route.path === '/classify/types'}">
          分类
        </router-link>
      </span>
    <span class="right">
        <router-link to="/classify/brand" class="router" :class="{on:$route.path === '/classify/brand'}">
          品牌
        </router-link>
        <i class="iconfont icon-search"></i>
      </span>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
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


</style>
