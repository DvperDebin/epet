<template>
  <!-- 手机登录 -->
  <div class="myEpet_login">
    <div class="login_input">
      <div class="login_phoneLogin">
          <span>
             <i class="iconfont icon-shouji"></i>
          </span>
        <input type="text" placeholder="已注册的手机号" maxlength="11" v-model="phone">
      </div>
      <div class="login_captcha">
        <span>
           <i class="iconfont icon-mima"></i>
        </span>
        <input type="password" placeholder="请输入图片内容" maxlength="4" v-model="captcha">
        <a href="###">
          <img src="http://localhost:3000/captcha" @click="dCode">
        </a>
      </div>
      <div class="login_code">
        <span>
           <i class="iconfont icon-mima"></i>
        </span>
        <input type="password" placeholder="动态密码" maxlength="6" v-model="code">
        <a href="###" v-show="!isTimerShow" :class="{on:isPhoneLegal}" @click="showTimer">
          获取动态密码
        </a>
        <a href="###" v-show="isTimerShow" class="on">还剩{{timer}}秒</a>
      </div>
    </div>
    <div class="login_forget">
      <a href="###">忘记密码？</a>
    </div>
    <div class="login_login" @click="login">
      <a href="###">
        登录
      </a>
    </div>
    <LoginCommon />
    <AlertTip v-show="isAlertShow" @closeTip="closeTip" :Message="Message"/>
  </div>
</template>

<script>
  import LoginCommon from '../../../components/LoginCommon/LoginCommon'
  import AlertTip from '../../../components/AlertTip/AlterTip'
  import {reqMsgCode,smsLogin} from '../../../api'
  export default {
    data(){
      return {
        isAlertShow:false,   // 是否显示提示框
        phone:'',    // 手机号收集
        captcha:'',   // 验证码收集
        code:'',   // 动态码收集
        timer:0,        // 倒计时
        isTimerShow:false,    // 倒计时显示
        Message:'',  // 错误信息
      }
    },
    components:{
      LoginCommon,
      AlertTip
    },
    computed:{
      // 验证手机号输入是否正确
      isPhoneLegal(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      // 倒计时切换
      async showTimer(){
        // 手机号输入合法
        if(this.isPhoneLegal){
          this.timer = 60
          this.isTimerShow = true
         let timer = setInterval( () => {
            this.timer--
            if(this.timer === 0){
              this.isTimerShow = false
              clearInterval(timer)
            }
          },1000)
        // 同时异步发送ajax请求,这里调用发送ajax请求的函数会返回一个结果
          const result = await reqMsgCode({phone:this.phone})
          if(result.code === 1){   // 请求发送失败
            this.Message = result.msg
            this.isAlertShow = true
          }
        }
      },
      // 动态获取验证码,不传内容默认就有一个event
      dCode(event){
        return event.target.src = 'http://localhost:3000/captcha?time=' + new Date()
      },
      // 登录验证
     async login(){
        const {isPhoneLegal,captcha,code,phone} = this
        if(!isPhoneLegal){
          this.isAlertShow = true
          this.Message = '手机格式输入有误'
          return
        }
        if(!/^[a-zA-Z0-9]{4}$/.test(captcha)){
          this.isAlertShow = true
          this.Message = '验证码输入有误'
          return
        }
        if(!/^\d{6}$/.test(code)){
          this.isAlertShow = true
          this.Message = '动态验证码有误'
          return
        }
        // 如果上述内容基本输入都没有问题，发送ajax请求进入后台验证
        const result = await smsLogin({phone,code})
        if(result.code ===1){
          this.Message = result.msg
          this.isAlertShow = true
        }else{
          //发送成功保存用户信息到state中
          const userInfo = result.data
          // 回退到上一级
          this.$router.back()
        }
      },
      // 更改提示框的isAlertShow来控制隐藏显示
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
          border 1px solid #eee
          border-radius 3px
          position absolute
          right 0
          bottom 5px
          text-align center
          color red
          box-sizing border-box
          >img
            display block
            width 100%
            height 100%
      .login_code
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
          border 1px solid #ddd
          border-radius 3px
          position absolute
          right 0
          bottom 5px
          font-size 10px
          text-align center
          color #ddd
          box-sizing border-box
          &.on
            color red
            border 1px solid red

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
