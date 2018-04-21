<template>
  <yd-layout>
    <v-header slot="navbar" title="提现列表" to="/guide_cash">
    </v-header>


    <yd-cell-group>
      <div style="text-align: center; height: 8em;">
        <div style="height: 4em;line-height: 6em;">
          账户余额(元)
        </div>
        <div style="font-size:2em;color:red">0.00</div>
      </div>
    </yd-cell-group>

    <yd-tab>
      <yd-tab-panel label="全部">
        <yd-cell-group>
          <yd-cell-item arrow v-for="(item, key) in list" :key="key" @click.native="goDetail(item)">
            <div slot="left">
              <div style="margin:0.5em ">{{item.type}}</div>
              <div style="margin:0.5em "> 余额&nbsp;{{item.balance}}</div>
            </div>
            <div slot="right">
              <div style="margin:0.5em ">{{item.money}}</div>
              <div style="margin:0.5em ">{{item.time|dateFrm}}</div>
            </div>

          </yd-cell-item> 
        </yd-cell-group>
      </yd-tab-panel>
      <yd-tab-panel label="转入">
          <yd-cell-group>
          <yd-cell-item arrow v-for="(item, key) in listIn" :key="key">
            <div slot="left">
              <div style="margin:0.5em ">{{item.type}}</div>
              <div style="margin:0.5em "> 余额&nbsp;{{item.balance}}</div>
            </div>
            <div slot="right">
              <div style="margin:0.5em ">{{item.money}}</div>
              <div style="margin:0.5em ">{{item.time|dateFrm}}</div>
            </div>

          </yd-cell-item>

        </yd-cell-group>
      </yd-tab-panel>
      <yd-tab-panel label="转出">
        <yd-cell-group>
          <yd-cell-item arrow v-for="(item, key) in listOut" :key="key">
            <div slot="left">
              <div style="margin:0.5em ">{{item.type}}</div>
              <div style="margin:0.5em "> 余额&nbsp;{{item.balance}}</div>
            </div>
            <div slot="right">
              <div style="margin:0.5em ">{{item.money}}</div>
              <div style="margin:0.5em ">{{item.time|dateFrm}}</div>
            </div>

          </yd-cell-item>

        </yd-cell-group>
      </yd-tab-panel>
    </yd-tab> 
    <v-footer slot="tabbar" index="4"></v-footer>
  </yd-layout>
</template>
 
<script>

import moment from 'moment'
import vFooter from './footer'
import vHeader from './header'
export default {
  name: "cash_list",
  components: {
    vFooter,
    vHeader,
    moment
  },
  filters: {
    dateFrm:function(el){
         return moment(el).format("YYYY-MM-DD");
    }
  },
  data() {
    return { 
      balance:100
    };
  },
  created() {
     this.list=[{
          type: "提现",
          time: "2018-04-20 09:18:10",
          balance: 0,
          money: 98,
          status: "成功"
        },
        {
          type: "充值",
          time: "2018-04-20 09:18:10",
          balance: 98,
          money: 98,
          status: "成功"
        },
        {
          type: "提现",
          time: "2018-04-20 09:18:10",
          balance: 0,
          money: 98,
          status: "失败"
        },
         {
          type: "充值",
          time: "2018-04-20 09:18:10",
          balance: 98,
          money: 98,
          status: "成功"
        },
        {
          type: "提现",
          time: "2018-04-20 09:18:10",
          balance: 0,
          money: 98,
          status: "失败"
        },
        {
          type: "充值",
          time: "2018-04-20 09:18:10",
          balance: 98,
          money: 98,
          status: "成功"
        },
        {
          type: "提现",
          time: "2018-04-20 09:18:10",
          balance: 0,
          money: 98,
          status: "失败"
        },
        {
          type: "充值",
          time: "2018-04-20 09:18:10",
          balance: 98,
          money: 98,
          status: "成功"
        }
      ];
      this.listIn=this.list.filter(function (e) { return e.type == "充值"; })
      this.listOut=this.list.filter(function (e) { return e.type == "提现"; })
  }
  ,methods: {
    goDetail:function(item){
      console.log(item);
     this.$router.push({path:'/guide_cash_info',query:{obj:item}});//类似get传参，通过URL传递参数
    // this.$router.push({path:'/guide_cash_info',params:{obj:item}});//类似post传参
  
    }
  }
}

</script>
