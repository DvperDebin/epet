<template>
  <!-- 主体内容 -->
  <div class="classify_main">
    <!-- 主题内容分类 -->
    <div class="classify_main_types">
      <ul>
        <li class="on">
          <a href="###">
            为您推荐
          </a>
        </li>
        <li>
          <a href="###">
            狗狗主粮
          </a>
        </li>
        <li>
          <a href="###">
            狗狗零食
          </a>
        </li>
        <li>
          <a href="###">
            狗狗服饰
          </a>
        </li>
        <li>
          <a href="###">
            狗狗窝垫
          </a>
        </li>
        <li>
          <a href="###">
            狗狗生活
          </a>
        </li>
        <li>
          <a href="###">
            狗狗玩具
          </a>
        </li>
        <li>
          <a href="###">
            狗狗保健
          </a>
        </li>
        <li>
          <a href="###">
            狗狗医疗
          </a>
        </li>
        <li>
          <a href="###">
            狗狗牵引
          </a>
        </li>
        <li>
          <a href="###">
            狗狗美容
          </a>
        </li>
        <li>
          <a href="###">
            狗狗周边
          </a>
        </li>
        <li>
          <a href="###">
            狗狗清洁
          </a>
        </li>
      </ul>
    </div>

    <!-- 主体内容展现 -->
    <div class="classify_main_content">
      <!-- 分类文字 -->
      <div class="classify_main_content_type1">
        <div class="classify_main_typeText">
          <span>热门分类</span>
        </div>
        <!-- 图片 -->
        <div class="classify_main_img">
          <div>
            <a href="###">
              <img src="./rec1.jpg">
            </a>
            <span>国产狗粮</span>
          </div>
          <div>
            <a href="###">
              <img src="./rec2.jpg">
            </a>
            <span>磨牙洁齿</span>
          </div>
          <div>
            <a href="###">
              <img src="./rec3.jpg">
            </a>
            <span>体内驱虫</span>
          </div>
          <div>
            <a href="###">
              <img src="./rec4.jpg">
            </a>
            <span>强化免疫</span>
          </div>
          <div>
            <a href="###">
              <img src="./rec5.jpg">
            </a>
            <span>肠胃调理</span>
          </div>
          <div>
            <a href="###">
              <img src="./rec6.jpg">
            </a>
            <span>进口狗粮</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classify_main
    padding-top 40px
    position relative
    width 100%
    height 100%
    .classify_main_types
      position absolute
      left 0
      top 40px
      bottom 0
      background-color #fff
      >ul
        >li
          padding 15px 0
          box-sizing border-box
          width 70px
          height 50px
          font-size 13px
          border-bottom 1px solid #f3f4f5
          text-align center
          &.on
            background-color: #f3f4f5;
            >a
              display block
              height 100%
              width 100%
              color red
    .classify_main_content
      margin-left 75px
      box-sizing border-box
      border-top: 5px solid #f3f4f5;
      background-color #fff
      .classify_main_content_type1
        width 100%
        padding 5px 5px 20px 5px
        box-sizing border-box
        .classify_main_typeText
          width 100%
          height 30px
          >span:nth-child(1)
            display block
            font-size 12px
            color #999
            padding-left 5px
            box-sizing border-box
            margin-top 10px
        .classify_main_img
          display flex
          width 100%
          flex-wrap wrap
          padding-top 5px
          box-sizing border-box
          justify-content center
          >div
            width 32%
            height 116px
            >a
              display block
              width 100%
              >img
                display block
                width 100%
                height 100%
            >span
              display block
              font-size 13px
              text-align center
              padding-top 10px
              box-sizing border-box
</style>
