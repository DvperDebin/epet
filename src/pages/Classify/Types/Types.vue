<template>
  <!-- 主体内容 -->
  <div class="classify_main">
    <!-- 主题内容分类 -->
    <div class="classify_main_types">
      <ul>
        <li :class="{on:index === currentIndex}" v-for="(type,index) in category" :key="index"
        @click="showImg(index)">
          <a href="###">
            {{type.name}}
          </a>
        </li>
      </ul>
    </div>
    <!-- 主体内容展现 -->
    <div class="classify_main_content" v-for="(type,index) in category" :key="index" v-show="index === currentIndex">
       <!-- 上方图片 -->
      <div class="classify_main_content_type1">
        <div class="classify_main_typeText">
          <span>{{type.cate_list[0].title}}</span>
        </div>
        <!-- 图片 -->
        <div class="classify_main_img" >
          <div v-for="(info,index) in type.cate_list[0].list" :key="index">
            <a href="###">
              <img :src="info.photo ||info.logo">
            </a>
            <span>{{info.name}}</span>
          </div>
        </div>
      </div>
      <!-- 下方图片 -->
      <div class="classify_main_content_type2" v-if="category[currentIndex].cate_list[1]">
        <div class="classify_main_typeText">
          <span>热门品牌</span>
          <span>
            <img src="./allgoods.png" >
          </span>
        </div>
        <!-- 图片 -->
        <div class="classify_main_img" >
          <div v-for="(info,index) in category[currentIndex].cate_list[1].list" :key="index" >
            <a href="###">
              <img :src="info.photo ||info.logo">
            </a>
            <span>{{info.name}}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        currentIndex:0
      }
    },
    mounted(){
      // 发送ajax请求
      this.$store.dispatch('getCategorys')
    },
    computed:{
      ...mapState(['category']),
    },
    methods:{
      showImg(index){
        this.currentIndex = index
      },
    }
  }

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
          >span:nth-child(2)
            display inline-block
            width 45px
            height 10px
            float right
            >img
              display inline-block
              height 100%
              width 100%
              vertical-align top
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
              width 86px
              height 86px
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
      .classify_main_content_type2
        width 100%
        padding 5px 5px 20px 5px
        box-sizing border-box
        border-top 1px solid #f3f4f5
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
          >span:nth-child(2)
            display inline-block
            width 45px
            height 10px
            float right
            >img
              display inline-block
              height 100%
              width 100%
              vertical-align top
        .classify_main_img
          display flex
          width 100%
          flex-wrap wrap
          padding-top 5px
          box-sizing border-box
          justify-content center
          >div
            width 40%
            height 80px
            margin-right 10px
            margin-bottom 10px
            >a
              display block
              width 100%
              height 55px
              padding 4px 22px
              box-sizing border-box
              border 1px solid #f3f4f5
              >img
                display block
                width 100%
                height 100%
            >span
              display block
              font-size 12px
              text-align center
              padding-top 10px
              box-sizing border-box
</style>
