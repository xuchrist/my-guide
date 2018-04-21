<template>
  <yd-layout>
    <v-header slot="navbar" :title="'充值'" to="/guide_home">
    </v-header>
    <yd-cell-group>
      <yd-cell-item arrow>
        <i slot="icon" class="iconfont icon-nongyeyinhang- cash_icon"></i>
        <div slot="left">
          <div class="cash_content">
            农业银行 (尾号9372储蓄卡)
          </div>
          <div class="cash_content">
            该卡提现额度： 0.00元
          </div>
        </div>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">账户余额&nbsp;0.00元</span> 
      </yd-cell-item>
      <yd-cell-item>
        <div slot="left">
          <span>充值金额</span>
          <yd-input required :show-success-icon="false" :show-error-icon="false" regex="^\d{5,12}$" placeholder="请输入充值金额"></yd-input>
        </div>
      </yd-cell-item> 
    </yd-cell-group>
    <div class="cash_btn">
      <yd-button size="large" type="danger">充值</yd-button>
    </div>
  </yd-layout>
 
</template>
 
<style scoped>
.cash_title {
  padding-left: 0.35rem;
  padding-top: 1.2em;
}
.cash_btn {
  padding: 0.24rem;
}
.cash_all {
  color: #268ffd;
}
.cash_icon {
  font-size: 2.42em;
  color: green;
}
.cash_content {
  margin: 1em 0.5em;
}
</style>

<script>
import vFooter from "./footer";
import vHeader from "./header";
export default {
  name: "pays",
  components: {
    vHeader
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    this.obj = this.$route.query.obj;
  },
  mounted() {}
};
</script>
