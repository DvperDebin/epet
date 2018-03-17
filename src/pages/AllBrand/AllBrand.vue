<template>
  <div class="allBrand">
    <div class="allBrand_header">
      <div class="allBrand_header_left" @click="goback">
        <span>
           <i class="iconfont icon-xiangzuo"></i>
        </span>
      </div>
      <div class="allBrand_header_mid">全部品牌</div>
      <div class="allBrand_header_right" @click="switchOff">
        <span>
          <i class="iconfont icon-liebiao8"></i>
        </span>
      </div>
    </div>

    <transition name="move">
      <div class="allBrand_selection" v-show="isShowSelection">
        <div class="allBrand_selection_inner">
          <div class="emptydiv">

          </div>
          <ul>
            <li>
              <p>
                <i class="iconfont icon-shouyedianpujishishangcheng"></i>
              </p>
              <p>首页</p>
            </li>
            <li>
              <p>
                <i class="iconfont icon-fenlei"></i>
              </p>
              <p>商品分类</p>
            </li>
            <li class="cartLi">
              <p>
                <i class="iconfont icon-gouwuche"></i>
              </p>
              <span>0</span>
              <p style="font-size: 14px; color: #666">购物车</p>
            </li>
            <li>
              <p>
                <i class="iconfont icon-chongwu"></i>
              </p>
              <p>我的E宠</p>
            </li>
          </ul>
        </div>
      </div>
    </transition>

    <div class="allBrand_rightNav">
      <span></span>
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
  .allBrand
    width 100%
    height 50px
    .allBrand_header
      width 100%
      height 100%
      padding 0 10px
      box-sizing border-box
      border-bottom 1px solid #e9e9e9
      display flex
      flex-wrap nowrap
      .allBrand_header_left
        width 10%
        height 100%
        line-height 50px
        text-align left
        >span
          >i
            font-size 19px
            font-weight bold
            color #ddd
      .allBrand_header_mid
        width 80%
        height 100%
        line-height 50px
        text-align center
        font-size 18px
      .allBrand_header_right
        width 10%
        height 100%
        line-height 50px
        text-align right
        >span
          >i
            font-size 22px
            font-weight bold
            color #666666
    .allBrand_selection
      width 100%
      height 68px
      border-bottom 1px solid #e9e9e9
      &.move-enter-active, &.move-leave-active
        transition all 1s
      &.move-enter, &.move-leave-to
        height 0
      .allBrand_selection_inner
        width 100%
        height 100%
        overflow hidden
        .emptydiv
          width 100%
          height 18px
        >ul
          overflow hidden
          >li
            width 25%
            float left
            text-align center
            &.cartLi
              position relative
            >p:nth-child(1)
              padding-bottom 5px
              box-sizing border-box
              >i
                font-size 22px
                color #666666
            >p:nth-child(2)
              font-size 14px
              color #666
            >span
              position absolute
              right 25px
              top 0px
              width 15px
              height 15px
              line-height 15px
              text-align center
              background-color red
              color #fff
              border-radius 50%
              font-size 10px

    .allBrand_rightNav
      position fixed
      right 4px
      bottom 50%
      transform translateY(50%)
      >span
        display block
        width 13px
        height 12px
        margin-top 2px
        border 1px solid black
</style>
