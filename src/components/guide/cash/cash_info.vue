<template>
  <yd-layout>
    <v-header slot="navbar" :title="obj.type+'详情'" to="/guide_cash_list">
    </v-header>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">时间</span>
        <span slot="right">{{obj.time}}</span>
      </yd-cell-item>
      <yd-cell-item>
         <span slot="left">余额</span>
        <span slot="right">{{obj.balance}}</span>
      </yd-cell-item>
        <yd-cell-item>
         <span slot="left">{{obj.type}}</span>
        <span slot="right">{{obj.money}}</span>
      </yd-cell-item>
       <yd-cell-item>
         <span slot="left">状态</span>
        <span slot="right">{{obj.status}}</span>
      </yd-cell-item>
    </yd-cell-group>
  </yd-layout>


</template>



<script>
import vFooter from './../footer'
import vHeader from './../header'
export default {
   name:"guide_cash_info",
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
