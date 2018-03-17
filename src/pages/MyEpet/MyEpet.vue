<template>
  <div class="myEpet">
    <div class="myEpet_header">
      <div class="header_top">
        <span class="header_top_left" @click="goback">
          <i class="iconfont icon-xiangzuo"></i>
        </span>
        <span class="header_top_right">注册</span>
      </div>
      <div class="header_mid">

      </div>
      <div class="header_bot">
        <div class="header_bot_userLogin">
          <router-link to="/myepet/normalLogin" class="loginbtn" replace>
            普通登录
          </router-link>
          <i class="iconfont icon-triangle-top" v-show="$route.path === '/myepet/normalLogin'"></i>
        </div>
        <div class="header_bot_phoneLogin">
          <router-link to="/myepet/phoneLogin" class="loginbtn" replace>
            手机动态密码登录
          </router-link>
          <i class="iconfont icon-triangle-top" v-show="$route.path === '/myepet/phoneLogin' "></i>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShowTri:true
      }
    },
    methods:{
      goback(){
        this.$router.back()
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myEpet
    width 100%
    height 100%
    background-color #e9e9e9
    .myEpet_header
      width 100%
      height 180px
      background-image url("./bgimg.png")
      background-size 100% 100%
      background-repeat no-repeat
      .header_top
        width 100%
        height 50px
        line-height 50px
        color #fff
        font-weight bold
        padding 0 12px
        box-sizing border-box
        font-size 16px
        .header_top_left
          float left
        .header_top_right
          float right


      .header_mid
        width 100%
        height 86px
      .header_bot
        width 100%
        height 44px
        display flex
        line-height 44px
        background-color rgba(255,255,255,0.25)
        >div
          flex 1
          height 100%
          text-align center
          .loginbtn
            display block
            width 100%
            height 100%
          &.header_bot_userLogin
            position relative
            >i
              position absolute
              color white
              bottom -17px
              right 85px
              font-size 22px
          &.header_bot_phoneLogin
            position relative
            >i
              position absolute
              color white
              bottom -17px
              right 85px
              font-size 22px
          >a
            color #fff
            font-size 15px

</style>
