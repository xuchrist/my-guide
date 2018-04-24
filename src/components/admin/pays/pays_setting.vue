<template>
    <yd-layout>
      <v-header slot="navbar" title="充值设置" to="/admin_home">
    </v-header>
      <yd-cell-group>
        <yd-cell-item>
            <span slot="left">appkey：</span>
            <yd-input slot="right" v-model="appkey" :debug="true" regex="email" placeholder="请输入邮箱地址"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left">secret：</span>
            <yd-input slot="right" v-model="secret" regex="mobile" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>

        <yd-cell-item>
            <span slot="left">url：</span>
            <yd-input slot="right" v-model="url" regex="bankcard" placeholder="请输入银行卡号"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
    </yd-layout>
</template>
<script>
import vHeader from '../header'
import vFooter from '../footer'
export default {
  name:"admin_pays_setting",
  components: {
    vHeader,vFooter
  },
  data () {
    return {
      appkey:"",
      secret:"",
      url:""
    }
  },
  created () {
      
  }
}
</script>
