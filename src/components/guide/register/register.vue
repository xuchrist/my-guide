<template>
  <yd-layout>
    <div class="logo"></div>
    <yd-cell-group >
      <yd-cell-item>
        <span slot="left">用户名：</span>
        <yd-input slot="right" :show-clear-icon="false" required v-model="username" max="20" placeholder="请输入用户名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input slot="right" :show-clear-icon="false" type="password" v-model="password" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
      <div class="custom_div">
        <!-- <span class="left">免费注册</span> -->
        <span class="right" @click="goAgree">协议</span>
        <yd-button size="large" type="primary" class="login1"> 登录</yd-button>
        <yd-button size="large" type="primary" class="login2">短信验证码登录</yd-button>
      </div>
    </yd-cell-group>
  </yd-layout>
</template>


<script>
  export default {
    name: "guide_register",
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      goAgree:function(){
          this.$router.push({path:'/guide_agreement'});
      }
    }
  }
</script>

<style scoped>
  .logo {
    width: 2.13333333rem;
    height: 2.13333333rem;
    background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
    background-size: contain;
    margin: 1.25333333rem auto 0;
    margin-bottom: 2em;
  }
  .login1 {
    background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
    color: #fff;
    box-shadow: 0 0.08rem 0.16rem #f7c7b1;
    border-radius: 30px;
  }
  .login2 {
    border: 1px solid #ff5000;
    color: #ff5000;
    background: #fff;
    border-radius: 30px;
  }
  .custom_div {
 padding: 1em 2em 2em 2em;
  }
  .custom_div .left {
    color: #333;
    font-size: .3rem;
    white-space: nowrap;
    float: left;
    padding: 0em 0em 2em 0em;
  }
  .custom_div .right {
    color: #525252;
    text-align: right;
    font-size: .26rem;
    float: right; 
    padding: 0em 0em 2em 0em;
  }
</style>

