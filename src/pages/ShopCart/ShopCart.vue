<template>
  <div class="shopCart">
    <!-- 头部 -->
    <div class="header">
      <span class="left_icon" @click="goback">
         <i class="iconfont icon-xiangzuo"></i>
      </span>
      <span class="shopCart">购物车</span>
      <span class="right_icon" @click="switchOff">
         <i class="iconfont icon-liebiao8"></i>
      </span>
    </div>
    <!-- 分类 -->
    <transition name="move">
      <div class="shopCart_selection" v-show="isShowSelection">
        <a href="###">
        <span>
          <i class="iconfont icon-shouyedianpujishishangcheng"></i>
        </span>
          <p>首页</p>
        </a>
        <a href="###">
        <span>
          <i class="iconfont icon-fenlei"></i>
        </span>
          <p>商品分类</p>
        </a>
        <a href="###" class="cart_count">
        <span>
          <i class="iconfont icon-gouwuche"></i>
        </span>
          <div>0</div>
          <p>购物车</p>
        </a>
        <a href="###">
        <span>
          <i class="iconfont icon-chongwu"></i>
        </span>
          <p>我的E宠</p>
        </a>
      </div>
    </transition>
    <!-- 购物车 -->
    <div class="shopCart_container">
      <div class="shopCart_img">
        <div class="shopCart_img_inner">
          <i class="iconfont icon-gouwuche"></i>
        </div>
      </div>
      <div class="shopaCart_tip">
        <span>购物车是空的</span>
      </div>
      <div class="shopCart_button">
        <a href="###" class="first">去逛逛</a>
        <a href="###">我的收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShowSelection:false
      }
    },
    methods:{
      goback(){
        this.$router.back()
      },
      switchOff(){
        this.isShowSelection = !this.isShowSelection
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopCart
    width 100%
    height 100%
    .header
      width 100%
      padding 0 12px
      box-sizing border-box
      height 50px
      line-height 50px
      border-bottom 1px solid #eee
      >span
        height 50px
        line-height 50px
        display block
        &.left_icon
          width 20%
          float left
          position relative
          >i
            font-size 22px
            font-weight bold
        &.right_icon
          width 20%
          float right
          position absolute
          right 0
          top 0
          text-align right
          >i
            font-size 26px
            padding-right 5px
            box-sizing border-box
        &.shopCart
          width 100%
          float left
          margin-left -71px
          padding 0 71px
          box-sizing border-box
          text-align center
          font-size 18px


    .shopCart_selection
      width 100%
      height 75px
      padding 0 12px
      box-sizing border-box
      display flex
      &.move-enter-active, &.move-leave-active
        transition all 0.3s
      &.move-enter, &.move-leave-to
        height 0
        opacity 0
      >a
        display flex
        flex-direction column
        justify-content center
        text-align center
        flex 1
        &.cart_count
          position relative
          >div
            position absolute
            right 25px
            top 15px
            width 15px
            height 15px
            line-height 15px
            text-align center
            background-color red
            color #fff
            border-radius 50%
            font-size 10px
        >span
          display block
          width 100%
          height 30px
          >i
            font-size 26px
        >p
          font-size 14px
          color #666
    .shopCart_container
      width 100%
      border-top 1px solid #eee
      .shopCart_img
        width 100%
        height 170px
        position relative
        .shopCart_img_inner
          position absolute
          left 50%
          transform translateX(-50%)
          width 100px
          height 100%
          box-sizing border-box
          >i
            display block
            margin 50px 0 20px 0
            font-size 100px
            color #dbdbdb;

      .shopaCart_tip
        text-align center
        >span
          color #dbdbdb;
      .shopCart_button
        width 100%
        margin-top 18px
        text-align center
        >a
          display: inline-block;
          border-radius: 5px;
          border: 1px solid #999;
          height: 40px;
          line-height: 40px;
          width: 100px;
          text-align center
          &.first
            margin-right 8px
</style>
