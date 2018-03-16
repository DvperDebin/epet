<template>
  <!-- 普通登录 -->
  <div class="myEpet_login">
    <div class="login_input">
      <div class="login_userName">
          <span>
             <i class="iconfont icon-yonghu"></i>
          </span>
        <input type="text" placeholder="手机号/邮箱/用户名">
      </div>
      <div class="login_pwd">
          <span>
             <i class="iconfont icon-mima"></i>
          </span>
        <input type="password" placeholder="输入密码">
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
      .login_userName
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
      .login_pwd
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

</style>
