<template>
  <footer id="footer">
    <div class="footer_item" :class="{on:$route.path === '/homepage'}" @click="goto('/homepage')">
        <span class="item_icon">
          <i class="iconfont icon-shouyedianpujishishangcheng"></i>
        </span>
      <span>首页</span>
    </div>
    <div class="footer_item" :class="{on:$route.path === '/classify/types' || $route.path === '/classify/brand'}" @click="goto('/classify')">
        <span class="item_icon">
          <i class="iconfont icon-fenlei"></i>
        </span>
      <span>分类</span>
    </div>
    <div class="footer_item" :class="{on:$route.path === '/shopcart'}" @click="goto('/shopcart')">
        <span class="item_icon">
          <i class="iconfont icon-gouwuche"></i>
        </span>
      <span>购物车</span>
    </div>
    <div class="footer_item" :class="{on:$route.path === '/myepet'}" @click="goto('/myepet')">
        <span class="item_icon">
          <i class="iconfont icon-chongwu"></i>
        </span>
      <span>我的E宠</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #footer
    height 46px
    position fixed
    bottom 0
    right 0
    left 0
    display flex
    background-color #fff
    z-index 80
    .footer_item
      flex 1
      text-align center
      height 100%
      display flex
      flex-direction column
      justify-content center
      color #ddd
      &.on
        color #02a774
      span
        font-size 8px
        .iconfont
          font-size 30px




</style>
