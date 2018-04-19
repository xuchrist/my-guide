


<template>
   <yd-layout>
    <yd-navbar slot="navbar" title="评论列表">
      <router-link to="/guide_home" slot="left">
        <yd-navbar-back-icon>返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
   
    <yd-tabbar slot="tabbar">
      <yd-tabbar-item title="主页" link="/guide_home" >
        <i slot="icon" class="iconfont icon-zhuye"></i>
      </yd-tabbar-item>
      <yd-tabbar-item title="评论" link="/guide_comment_list" active>
        <i slot="icon" class="iconfont icon-pinglun"></i>
        <yd-badge slot="badge" type="danger">2</yd-badge>
      </yd-tabbar-item>
      <yd-tabbar-item title="投诉" link="/guide_complain_list">
        <i slot="icon" class="iconfont icon-tousu"></i>
      </yd-tabbar-item>
      <yd-tabbar-item title="提现" link="/guide_cash_list" dot >
        <i slot="icon" class="iconfont icon-tixian"></i>
      </yd-tabbar-item>
      <yd-tabbar-item title="更多" link="/guide_more">
        <i slot="icon" class="iconfont icon-gengduo"></i>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout> 
</template>
<script>
export default {
  name:"comment_list",
  data () {
    return {
      
    }
  },
  created () {
    
  }
}
</script>
