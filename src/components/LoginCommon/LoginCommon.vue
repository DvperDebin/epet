<template>
  <div>
    <div class="login_empty">

    </div>
    <div class="login_coopera">
      <div class="text">合作网站登录</div>
      <div class="login_otherWay">
        <div>
          <a href="###">
            <img src="./alipay.png">
          </a>
        </div>
        <div>
          <a href="###">
            <img src="./qqlogin.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login_empty
    width 100%
    height 120px
  .login_coopera
    width 100%
    marigin-top 8px
    .text
      text-align center
      color  #d7d7d7;
    .login_otherWay
      width 100%
      display flex
      padding 18px 0
      >div
        width 33%
        padding 0px 14px
        box-sizing border-box
        >a
          display block
          width 100%
          padding 0 12px
          box-sizing border-box
          >img
            display block
            width 100%
</style>
