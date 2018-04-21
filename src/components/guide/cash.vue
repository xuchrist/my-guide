<template>
  <yd-layout>
    <v-header slot="navbar" :title="'提现'" to="/guide_home"  rightto="/guide_cash_list" >
    </v-header>
      <yd-cell-group>
      <yd-cell-item arrow>
            <i slot="icon" class="iconfont icon-nongyeyinhang- cash_icon" ></i>
            <div slot="left">
              <div class="cash_content">
                 农业银行 (尾号9372储蓄卡)
              </div>
              <div class="cash_content">
                 该卡提现额度： 0.00元
              </div>
              </div> 
        </yd-cell-item>
      <div class="cash_title">提现金额</div>
      <yd-cell-item>
        <span slot="left">￥：</span>
        <yd-input slot="right" required :show-success-icon="false" :show-error-icon="false" regex="^\d{5,12}$" placeholder="请输入提现金额"></yd-input>
      </yd-cell-item>
      <yd-cell-item  >
        <span slot="left">账户余额</span>
        <span slot="right" class="cash_all">全部提现</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="cash_btn">
        <yd-button size="large" type="danger" >提现</yd-button>
    </div>
  </yd-layout>


</template>


<style scoped>
  .cash_title {
    padding-left: .35rem;
    padding-top: 1.2em;
  }
  .cash_btn{
     padding: .24rem;
  }
 .cash_all{
   color: #268ffd
 }
 .cash_icon{
    font-size: 2.42em;
    color: green;
 }
 .cash_content{
     margin: 1em 0.5em
 }
</style>

<script>
import vFooter from './footer'
import vHeader from './header'
export default {
  name:"cash",
  components: {
      vHeader
  },
  data () {
      return {
          
      }
  },methods: {
      
  },created () {
       
     this.obj=this.$route.query.obj;
  },mounted () {
      
  }
}
</script>
