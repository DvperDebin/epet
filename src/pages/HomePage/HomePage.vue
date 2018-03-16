<template>
  <div id="home_page">
    <!-- 首页头部 -->
    <header class="header">
      <!-- 头部广告 -->
      <div class="header_nav_wrapper">
        <a href="###" class="header_adv">
          <img src="./headerAdv.jpg">
        </a>
        <img src="./closebtn.png">
      </div>
      <!-- 广告下方导航 -->
      <div class="header_main">
        <!-- 头部搜索 -->
        <div class="header_search">
          <div class="header_search_inner">
              <span>狗狗 | 北京
                <i class="iconfont icon-sanjiao"></i>
              </span>
            <span>
                <input type="text" placeholder="搜索商品和品牌">
                <span> <i class="iconfont icon-search"></i> </span>
              </span>
            <span>
                <i class="iconfont icon-xinxi"></i>
              </span>
          </div>
        </div>
        <!-- 头部导航 -->
        <div class="header_nav">
          <div class="header_nav_item">
            <span class="header_nav_text on">首页</span>
          </div>
          <div class="header_nav_item">
            <span class="header_nav_text ">狗狗主粮</span>
          </div>
          <div class="header_nav_item">
            <span class="header_nav_text">服饰城</span>
          </div>
          <div class="header_nav_item">
            <span class="header_nav_text">医疗保健</span>
          </div>
          <div class="header_nav_item">
            <span class="header_nav_text">零食玩具</span>
          </div>
        </div>
      </div>
    </header>
    <!-- 首页内容区 -->
    <div class="home_content">
      <!-- 轮播图区域 -->
      <nav class="home_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!-- 第一页 -->
            <div class="swiper-slide">
              <a href="###">
                <img src="./slider1.jpg">
              </a>
            </div>
            <!-- 第二页 -->
            <div class="swiper-slide">
              <a href="###">
                <img src="./slider2.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./slider3.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./slider4.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./slider5.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./slider-7.jpg">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!-- 大banner区域 -->
      <div class="home_banner">
        <a href="###">
          <img src="./banner.jpg">
        </a>
      </div>
      <!-- 选项区域 -->
      <div class="home_selection">
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav1.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav2.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav3.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav4.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav5.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav6.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav7.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav8.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav9.jpg">
          </a>
        </div>
        <div class="home_selection_item">
          <a href="###">
            <img src="./nav10.jpg">
          </a>
        </div>
      </div>
      <!-- 今日秒杀 -->
      <div class="home_adv">
        <a href="###">
          <img src="./adv-1.jpg">
        </a>
      </div>
      <!-- 每日疯抢 -->
      <div class="home_suprise">
        <!-- 文字区域 -->
        <div class="home_suprise_text">
          <a href="###">
            <img src="./buyeveryday.png">
          </a>
          <span class="home_suprise_text_right">
              <span>本厂结束</span>
              <span>12</span>:
              <span>00</span>
              <span class="home_suprise_text_right_more">
                <img src="./more.png">
              </span>
            </span>

        </div>
        <!-- 图片区域 -->
        <div class="swiper-container swiper-container-horizontal swiper-container-ios" id="suprise_image">
          <div class="swiper-wrapper">
            <!-- 一页显示多张，利用swiper -->
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s1.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s2.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s3.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s4.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s5.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s6.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s7.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <div>
                  <img src="./s8.jpg">
                </div>
                <p class="price">￥4.80</p>
                <p style="font-size:8px; color:#999">省43.20</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 品牌力量 -->
      <div class="home_brand_power">
        <a href="###">
          <img src="./brandpower.jpg">
        </a>
      </div>
      <!-- GIF -->
      <div class="home_gif">
        <img src="./ani.gif">
      </div>
      <!-- VIP -->
      <div class="home_VIP">
        <a href="###">
          <img src="./vip.jpg">
        </a>
      </div>
      <!-- 活动 -->
      <div class="home_support">
        <div class="home_support_item">
          <a href="###">
            <img src="./support1.jpg">
          </a>
        </div>
        <div class="home_support_item">
          <a href="###">
            <img src="./suppport2.jpg">
          </a>
        </div>
        <div class="home_support_item">
          <a href="###">
            <img src="./support3.jpg">
          </a>
        </div>
        <div class="home_support_item">
          <a href="###">
            <img src="./support4.jpg">
          </a>
        </div>
      </div>
      <!--一折 -->
      <div class="home_discount">
        <a href="###">
          <img src="./90off.jpg">
        </a>
      </div>
      <!-- 广告轮播图 -->
      <div class="home_adv_slider">
        <div class="swiper-container" id="advSlider">
          <div class="swiper-wrapper">
            <!-- 第一页 -->
            <div class="swiper-slide">
              <a href="###">
                <img src="./navslider1.jpg">
              </a>
            </div>
            <!-- 第二页 -->
            <div class="swiper-slide">
              <a href="###">
                <img src="./navslider2.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./navslider3.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./navslider4.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./navslider5.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./navslider6.jpg">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 大牌好货 -->
      <div class="home_big_goods">
        <div class="home_bigGoods_banner">
          <a href="###">
            <img src="./biggoods.jpg">
          </a>
        </div>
        <div class="home_bigGoods_goods">
          <div class="home_bigGoods_item">
            <a href="###">
              <img src="./biggoods1.jpg">
            </a>
          </div>
          <div class="home_bigGoods_item">
            <a href="###">
              <img src="./biggoods2.jpg">
            </a>
          </div>
          <div class="home_bigGoods_item">
            <a href="###">
              <img src="./biggoods3.jpg">
            </a>
          </div>
          <div class="home_bigGoods_item">
            <a href="###">
              <img src="./biggoods4.jpg">
            </a>
          </div>
          <div class="home_bigGoods_item">
            <a href="###">
              <img src="./biggoods5.jpg">
            </a>
          </div>
          <div class="home_bigGoods_item">
            <a href="###">
              <img src="./biggoods6.jpg">
            </a>
          </div>
        </div>
      </div>
      <!-- 最惨奖 -->
      <div class="home_reward">
        <a href="###">
          <img src="./lucky.jpg">
        </a>
        <a href="###">
          <img src="./experience.jpg">
        </a>
      </div>
      <!-- 特别星球 -->
      <div class="home_special_star">
        <a href="###">
          <img src="./starball.jpg">
        </a>
      </div>
      <!-- 更多活动 -->
      <div class="home_more_sup">
        <div class="home_more_sup_item">
          <a href="###">
            <img src="./presale.jpg" alt="">
          </a>
        </div>
        <div class="home_more_sup_item">
          <div class="home_more_sup_inner">
            <div>
              <a href="###">
                <img src="./video.jpg" alt="">
              </a>
            </div>
            <div>
              <a href="###">
                <img src="./league.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 特色栏目 -->
      <div class="home_special_area">
        <a href="###">
          <img src="./specialarea.jpg">
        </a>
        <div>
          <div>
            <a href="###">
              <img src="./einter.jpg">
            </a>
          </div>
          <div>
            <a href="###">
              <img src="./ewater.jpg">
            </a>
          </div>
          <div>
            <a href="###">
              <img src="./eclass.jpg">
            </a>
          </div>
          <div>
            <a href="###">
              <img src="./clear.jpg">
            </a>
          </div>
        </div>
      </div>


      <!-- 主页信息 -->
      <div class="home_info">
        <div class="home_info_inner">
          <div class="home_info_basic">
            <span class="on">触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </div>
          <div class="home_info_legal">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>

      <!-- 占位以显示内容盒子 -->
      <div class="emptydiv">

      </div>
    </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {

    mounted (){
      this.$nextTick( () => {
        //swiper
        let swiper = new Swiper('.home_nav >.swiper-container', {
          loop: true,
          autoplay:true,
          delay:3000,
          pagination: {
            el: '.swiper-pagination'
          }
        })

        let newSwiper = new Swiper('#suprise_image', {
          slidesPerView: 3,
          spaceBetween: 30,
        });

        let advSwiper = new Swiper('.home_adv_slider>#advSlider', {
          loop: true,
          autoplay:true,
          delay:1000,
          pagination: {
            el: '.swiper-pagination'
          }
        });
      })
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #home_page
    width 100%
    height 100%
    .header
      position fixed
      top 0
      left 0
      right 0
      background-color #fff
      z-index 100
      .header_nav_wrapper
        width 100%
        position relative
        .header_adv
          display block
          width 100%
          height 100%
          >img
            width 100%
        >img
          position absolute
          top 20%
          left 2%
          width 18.75px
      .header_main
        width 100%
        .header_search
          width 100%
          box-sizing border-box
          padding 5px 10px
          >.header_search_inner
            width 100%
            padding 8px 0
            box-sizing border-box
            overflow hidden
            >span:nth-child(1)
              font-size 14px
              color #898989
            >span:nth-child(2)
              position relative
              >input
                background: #e9e9e9;
                border-radius: 4px;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;
                height 25px
                width 65%
              >span
                position absolute
                right 5px
                top 5px
                font-size 10px
            >span:nth-child(3)
              display block
              float right
              padding-top 2px
              box-sizing border-box
              >.iconfont
                font-size 22px
                font-weight bold
                color #bbb

        .header_nav
          display flex
          width 100%
          height 36px
          .header_nav_item
            flex 1
            display flex
            justify-content center
            .header_nav_text
              display block
              font-size 14px
              color #666
              line-height 36px
              &.on
                border-bottom 2px solid #459d36


    .home_content
      padding-top 142px
      width 100%
      .home_nav
        width 100%
        height 160px
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              >a
                display block
                width 100%
                height 100%
                >img
                  width 100%
                  height 100%
      .home_banner
        width 100%
        height 270.5px
        >a
          display block
          width 100%
          height 100%
          >img
            width 100%
            height 100%
      .home_selection
        width 100%
        height 191px
        display flex
        flex-wrap wrap
        background-color black
        .home_selection_item
          width 20%
          height 50%
          >a
            display block
            width 100%
            height 100%
            >img
              width 100%
              height 100%
      .home_adv
        width 100%
        >a
          display block
          width 100%
          >img
            width 100%
      .home_suprise
        width 100%
        height 170px
        .home_suprise_text
          width 100%
          height 40px
          padding 10px
          box-sizing border-box
          >a
            display block
            width 85px
            height 20px
            float left
            >img
              width 100%
              height 100%
          .home_suprise_text_right
            float right
            font-size 14px
            >span:nth-child(2)
              border:1px solid #ddd
              text-align center
            >span:nth-child(3)
              border:1px solid #ddd
              text-align center
            .home_suprise_text_right_more
              >img
                width: 67px
                height: 34px
                vertical-align: middle




        .swiper-container
          width 100%
          height 130px
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              >a
                display block
                width 100%
                height 100%
                >div
                  height 84.5px
                  width 84.5px
                  >img
                    height 100%
                    width 100%

                >p
                  text-align center
                  line-height 22px
                  &.price
                    color red
      .home_brand_power
        width 100%
        >a
          width 100%
          >img
            width 100%

      .home_gif
        margin-top -2px
        width 100%
        >img
          width 100%

      .home_VIP
        width 100%
        margin-top -2px
        >a
          display block
          width 100%
          >img
            width 100%

      .home_support
        width 100%
        display flex
        flex-wrap wrap
        .home_support_item
          width 50%
          >a
            display block
            width 100%
            >img
              width 100%

      .home_discount
        width 100%
        >a
          display block
          width 100%
          >img
            width 100%
      .home_adv_slider
        width 100%
        margin-top -2px
        .swiper-container
          width 100%
          .swiper-wrapper
            width 100%
            .swiper-slide
              width 100%
              >a
                display block
                width 100%
                >img
                  width 100%






      .home_big_goods
        width 100%
        margin-top -2px
        .home_bigGoods_banner
          width 100%
          >a
            display block
            width 100%
            >img
              display block
              width 100%


        .home_bigGoods_goods
          width 100%
          display flex
          flex-wrap wrap
          .home_bigGoods_item
            width 50%
            height 225px
            box-sizing border-box
            >a
              display block
              width 100%
              height 100%
              >img
                display block
                width 100%
                height 100%




      .home_reward
        width 100%
        >a
          display block
          width 100%
          >img
            display block
            width 100%
      .home_special_star
        width 100%
        height 84.5px
        >a
          display block
          width 100%
          >img
            display block
            width 100%
            height 100%



      .home_more_sup
        width 100%
        display flex
        .home_more_sup_item
          flex 1
          height 340px
          >a
            display block
            width 100%
            height 100%
            >img
              display block
              width 100%
              height 100%


          .home_more_sup_inner
            display flex
            width 100%
            height 100%
            flex-wrap wrap
            >div
              width 100%
              height 50%
              >a
                display block
                width 100%
                height 100%
                >img
                  display block
                  width 100%
                  height 100%



      .home_special_area
        width 100%
        >a
          display block
          width 100%
          >img
            display block
            width 100%
        >div
          width 100%
          display flex
          flex-wrap wrap
          >div
            width 50%
            >a
              display block
              width 100%
              >img
                display block
                width 100%

      .home_info
        margin-top 14px
        width 100%
        height 86px
        position relative
        .home_info_inner
          width 80%
          height 90%
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          margin auto
          .home_info_basic
            padding 5px 0
            height 42px
            display flex
            box-sizing border-box
            >span
              flex 1
              font-size 14px
              text-align center
              &.on
                color red
          .home_info_legal
            font-size 10px
            text-align center
      .emptydiv
        height 46px
        width 100%
</style>
