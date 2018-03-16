<template>
  <div class="brand">
    <div class="brand_inner">
      <div class="brand_types">
        <!-- 标题 -->
        <div class="brand_title">
          <span>—— 推荐品牌 ——</span>
        </div>
        <!-- 图片内容 -->
        <div class="brand_list">
          <ul>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl1.jpg">
                </div>
                <div>
                </div>
                <p class="p_1">冠能</p>
                <p>美国</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl2.jpg">
                </div>
                <div class="rec">
                  <img src="./reced.png">
                </div>
                <span class="walfare"></span>
                <p class="p_1">ZIWI Peak</p>
                <p>新西兰</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl3.jpg">
                </div>
                <div class="rec">
                </div>
                <span class="walfare"></span>
                <p class="p_1">原始猎食渴望</p>
                <p>加拿大</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl4.jpg">
                </div>
                <div class="rec">
                </div>
                <span class="walfare"></span>
                <p class="p_1">麦高臣Microcyn...</p>
                <p>美国</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl5.jpg">
                </div>
                <div class="rec">
                </div>
                <span class="walfare">TA公益</span>
                <p class="p_1">谷登GOLDEN</p>
                <p>中国</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl6.jpg">
                </div>
                <div class="rec">
                </div>
                <span class="walfare"></span>
                <p class="p_1">爱喜雅</p>
                <p>日本</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl7.jpg">
                </div>
                <div class="rec">
                </div>
                <span class="walfare"></span>
                <p class="p_1">MAG</p>
                <p>英国</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl8.jpg">
                </div>
                <div class="rec">
                </div>
                <span class="walfare"></span>
                <p class="p_1">卡比CANIDAE</p>
                <p>美国</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl9.jpg">
                </div>
                <div class="rec">
                </div>
                <span class="walfare"></span>
                <p class="p_1">拉夫威尔</p>
                <p>美国</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl10.jpg">
                </div>
                <div class="rec">
                  <img src="./reced.png">
                </div>
                <span class="walfare"></span>
                <p class="p_1">爱肯拿Acana</p>
                <p>加拿大</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl11.jpg">
                </div>
                <div class="rec">

                </div>
                <span class="walfare"></span>
                <p class="p_1">皇室Sea Kingdom</p>
                <p>泰国</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl12.jpg">
                </div>
                <div class="rec">

                </div>
                <span class="walfare">TA公益</span>
                <p class="p_1">蓝氏LegendSandy</p>
                <p>中国</p>
              </a>
            </li>
            <li>
              <a href="###">
                <div class="list_img">
                  <img src="./rl13.jpg">
                </div>
                <div class="rec">

                </div>
                <span class="walfare">TA公益</span>
                <p class="p_1">顽皮</p>
                <p>中国</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand
    width 100%
    height 100%
    padding-top 45px
    .brand_inner
      width 100%
      height 100%
      background-color #fff
      .brand_types
        width 100%
        height 100%
        .brand_title
          width 100%
          padding-top 20px
          text-align center
          >span
            font-size 12px
            color #999
        .brand_list
          width 100%
          padding 0 5px
          box-sizing border-box
          >ul
            width 100%
            >li
              margin-top: 20px;
              width: 33.33%;
              padding: 0 5px;
              box-sizing border-box
              float left
              >a
                display block
                width 100%
                position relative
                .list_img
                  border: 1px solid #e2e2e2;
                  width 100%
                  height 62px
                  text-align: center;
                  padding: 50px 10px 10px;
                  box-sizing border-box
                  position relative
                  >img
                    width 70%
                    margin 10px auto
                    position absolute
                    top 0
                    left 0
                    right 0
                .rec
                  position absolute
                  top 0
                  left 0
                  width 13px
                  height 13px
                  >img
                    display block
                    width 100%
                    height 100%
                .walfare
                  font-size 8px
                  position absolute
                  top 0
                  right 0
                  background-color red
                  color #fff
                >p
                  height 20px
                  font-size 12px
                  color #999
                  text-align center
                  &.p_1
                    margin-top 5px
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
</style>
