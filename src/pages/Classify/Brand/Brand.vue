<template>
  <div class="brand">
    <div class="brand_inner">
      <div class="brand_types" v-for="(item,index) in brand" :key="index">
        <!-- 标题 -->
        <div class="brand_title">
          <span>—— {{item.title}} ——</span>
        </div>
        <!-- 图片内容 -->
        <div class="brand_list">
          <ul>
            <li v-for="(list,index) in item.list" :key="index">
              <a href="###">
                <div class="list_img">
                  <img :src="list.logo">
                </div>
                <div class="rec" v-if="list.recommend">
                  <img src="./reced.png">
                </div>
                <span class="walfare" v-if="list.tagongyi">TA公益</span>
                <p class="p_1">{{list.name}}</p>
                <p>{{list.address}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div class="all">
      全部
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {


    mounted (){
      this.$store.dispatch('getBrand')
    },

    computed:{
      ...mapState(['brand'])
    }

  }

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
        margin-bottom 30px
        border-bottom 15px solid #f3f4f5
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
            overflow hidden
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
                  display block
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
    .all
      width 40px
      height 40px
      line-height 40px
      font-size 12px
      color #fff
      position fixed
      bottom 70px
      right 10px
      z-index 10
      background-color #999999
      border-radius 50%
      text-align center
</style>
