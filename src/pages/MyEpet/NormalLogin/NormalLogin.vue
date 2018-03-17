<template>
  <!-- 普通登录 -->
  <div class="myEpet_login">
    <div class="login_input">
      <div class="login_userName">
          <span>
             <i class="iconfont icon-yonghu"></i>
          </span>
        <input type="text" placeholder="手机号/邮箱/用户名" v-model="username">
      </div>
      <div class="login_pwd">
          <span>
             <i class="iconfont icon-mima"></i>
          </span>
        <input type="password" placeholder="输入密码" v-model="pwd">
      </div>
    </div>
    <div class="login_forget">
      <a href="###">忘记密码？</a>
    </div>
    <div class="login_login">
      <a href="###" @click="userLogin">
        登录
      </a>
    </div>
    <LoginCommon />
    <AlertTip v-show="isAlertShow" :Message="Message" @closeTip="closeTip"/>
  </div>
</template>

<script>
  import LoginCommon from '../../../components/LoginCommon/LoginCommon'
  import AlertTip from '../../../components/AlertTip/AlterTip'
  export default {
    data(){
      return {
        username:'',
        pwd:'',
        Message:'',
        isAlertShow:false
      }
    },
    components:{
      LoginCommon,
      AlertTip
    },
    methods:{
      // 登录验证
      userLogin(){
        let {username,pwd} = this     // 其实应该发送ajax请求获取数据进行对比
        if(!username || !pwd){
          this.isAlertShow = true
          this.Message = '用户名/密码输入有误'
        }
      },
      // 关闭提示框
      closeTip(){
        this.isAlertShow = false
      }
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

    .login_forget
      width 100%
      overflow hidden
      >a
        diplay block
        float right
        color #898989
        font-size 14px
    .login_login
      width 100%
      margin-top 6px
      >a
        display: block;
        width 100%
        height 38px
        line-height 38px
        letter-spacing: 5px;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        color #fff
        text-align: center;

</style>
