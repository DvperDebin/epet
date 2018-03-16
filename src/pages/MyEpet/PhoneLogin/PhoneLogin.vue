<template>
  <!-- 手机登录 -->
  <div class="myEpet_login">
    <div class="login_input">
      <div class="login_phoneLogin">
          <span>
             <i class="iconfont icon-shouji"></i>
          </span>
        <input type="text" placeholder="已注册的手机号">
      </div>
      <div class="login_captcha">
        <span>
           <i class="iconfont icon-mima"></i>
        </span>
        <input type="password" placeholder="请输入图片内容">
        <a href="###">
          <img src="" alt="">
        </a>
      </div>
      <div class="login_dynamicCode">
        <span>
           <i class="iconfont icon-mima"></i>
        </span>
        <input type="password" placeholder="动态密码">
        <a href="###">
          获取动态密码
        </a>
      </div>
    </div>
    <LoginCommon />
  </div>
</template>

<script>
  import LoginCommon from '../../../components/LoginCommon/LoginCommon'
  export default {
    components:{
      LoginCommon
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myEpet_login
    width 100%
    padding 0 21px 12px 21px
    box-sizing border-box
    background-color #fff
    .login_input
      width 100%
      margin-bottom 12px
      .login_phoneLogin
        width 100%
        padding 12px 0
        border-bottom 1px solid #e2e2e2
        >span
          >i
            font-size 19px
        >input
          outline none
          padding-left 5px
          width 90%
          box-sizing border-box
      .login_captcha
        width 100%
        padding 12px 0
        border-bottom 1px solid #e2e2e2
        position relative
        >span
          >i
            font-size 19px
        >input
          outline none
          padding-left 5px
          width 90%
          box-sizing border-box
        >a
          diplay block
          width 85px
          height 30px
          line-height 30px
          border 1px solid black
          border-radius 3px
          position absolute
          right 0
          bottom 5px
          text-align center
          color red
          box-sizing border-box
      .login_dynamicCode
        width 100%
        padding 12px 0
        border-bottom 1px solid #e2e2e2
        position relative
        >span
          >i
            font-size 19px
        >input
          outline none
          padding-left 5px
          width 90%
          box-sizing border-box
        >a
          diplay block
          width 100px
          height 30px
          line-height 30px
          border 1px solid #eb4c33
          border-radius 3px
          position absolute
          right 0
          bottom 5px
          font-size 10px
          text-align center
          color red
          box-sizing border-box

</style>
