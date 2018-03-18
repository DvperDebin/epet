<template>
  <div class="outer_container"v-if="allbrand[0]">
    <div class="allBrand" >
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
      <!-- 上方隐藏选项区域 -->
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
      <!-- 主要区域 -->
      <div class="allBrand_main" v-for="(value,index) in allbrand[0].brand" :key="index" ref="brand">
        <h2>{{value.order}}</h2>
        <a href="###" v-for="(list,index) in value.list" :key="index">
          <div>
            <div class="allBrand_main_img">
              <img v-lazy="list.logo">
              <span v-show="list.tagongyi">TA公益</span>
              <img src="./jian.png" v-show="list.recommend" >
            </div>
            <div class="allBrand_main_info">
              <p>{{list.name}}</p>
              <p>{{list.address}}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- 右侧导航区域 -->
    <div class="allBrand_rightNav">
      <span v-for="(value,index) in allbrand[0].brand" :key="index" :class="{on: index === currentIndex}"
            @click="switchStyle(index)">{{value.order}}</span>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        isShowSelection:false,
        tops:[],  // 得到所有列表的top值
        scrollY:0,  //  得到当前所在的scrollY的值
      }
    },
    mounted(){
      this.$store.dispatch('getAllBrand', () => {
        this.$nextTick( ()=>  {
          this.brandScroll = new BScroll('.outer_container',{
            scrollY:true,
            click:true,
            probeType:2  // 不监视惯性滑动
          })
          // 添加事件进行监视,更新scrollY
          this.brandScroll.on('scroll', (pos) => {
            this.scrollY = Math.abs(pos.y)
          })
          // 同时监控scrollEnd
          this.brandScroll.on('scrollEnd', (pos) => {
            this.scrollY = Math.abs(pos.y)
          })
          // 要在页面渲染完成后调用这个方法，获取全部列表的top值，更新data中的tops
          this.getTops()
        })
      })
    },
    methods:{
      goback(){
        this.$router.back()
      },
      switchOff(){
        this.isShowSelection = !this.isShowSelection
      },
      // 得到所有brand所对应的高度值
      getTops(){
        // 得到所有brand div
        let brandArr = this.$refs.brand
        // 创建一个数组来保存brand高度值
        let tops = []
        // 初始化一个高度
        let top = 0
        // 把高度放入数组中
        tops.push(top)
        //转换为真数组
        let arr = Array.prototype.slice.call(brandArr)
        // 遍历得到对应高度值
        for(let i = 0;i < arr.length; i++){
          top = top + arr[i].clientHeight
          // 并放入数组中
          tops.push(top)
        }
        // 更新data中的tops数组
        this.tops = tops
      },
      // 点击跳转到相应的位置
      switchStyle(index){
        let tops = this.tops
        let top = tops[index]

        if(top>tops[tops.length-2]){
          top = tops[tops.length-1]
        }
        this.scrollY = top
        this.brandScroll.scrollTo(0,-top-52,300)
      },
    },
    computed:{
      ...mapState(['allbrand']),

      // 得到当前所在的列表区域相对应的index值
      currentIndex(){
        const {scrollY,tops} = this
        return tops.findIndex( (top,index) => scrollY>= top && scrollY<tops[index+1])
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .outer_container
    width 100%
    height 100%
    background-color #f3f4f5
    .allBrand
      width 100%
      padding-bottom 500px
      background-color #fff
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

      .allBrand_main
        width 100%
        >h2
          height 24px
          width 100%
          background-color #eee
          color #999
          line-height 24px
          font-size 12px
          text-indent 15px
        >a
          display block
          height 73px
          width 100%
          >div
            height 100%
            width 100%
            box-sizing border-box
            padding: 10px
            border-bottom 1px solid #f3f4f5;
            margin-right 20px
            overflow hidden
            >div
              float left
              position relative
              &.allBrand_main_img
                width 100.5px
                height 52px
                border 1px solid #f3f4f5
                padding 5px
                box-sizing border-box
                position relative
                >img:nth-child(1)
                  width 100%
                  height 100%
                >span
                  font-size 8px;
                  padding 0 2px;
                  top 0;
                  right 0;
                  position absolute
                  background-color #e44b46;
                  color #fff
                >img:nth-child(3)
                  width 13px
                  height 13px
                  top 0
                  left 0
                  position absolute
              &.allBrand_main_info
                margin 5px 0 5px 20px
                >p:nth-child(1)
                  font-size 14px
                  color #333
                  height 22px
                  line-height 22px
                >p:nth-child(2)
                  font-size 12px
                  color #999
                  height 19px
                  line-height 19px



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
        font-size 12px
        color #666
        text-align center
        &.on
          color red
          font-weight bold
</style>
