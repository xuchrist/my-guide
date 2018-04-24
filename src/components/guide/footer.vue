<template>
  <yd-tabbar>
    <yd-tabbar-item title="主页" link="/guide_home" :active="index==1">
      <i slot="icon" class="iconfont icon-zhuye"></i>
    </yd-tabbar-item>
    <yd-tabbar-item title="评论" link="/guide_comment_list" :active="index==2">
      <i slot="icon" class="iconfont icon-pinglun"></i>
      <yd-badge v-show="commentCount>0" slot="badge" type="danger">{{commentCount}}</yd-badge>
    </yd-tabbar-item>
    <yd-tabbar-item title="投诉" link="/guide_complain_list" :active="index==3">
      <i slot="icon" class="iconfont icon-tousu"></i>
      <yd-badge v-show="plainCount>0" slot="badge" type="danger">{{plainCount}}</yd-badge>
    </yd-tabbar-item>
    <yd-tabbar-item title="提现" link="/guide_cash" :dot="tip" :active="index==4">
      <i slot="icon" class="iconfont icon-tixian"></i>
    </yd-tabbar-item>
    <yd-tabbar-item title="个人中心" link="/guide_person_info" :active="index==5">
      <i slot="icon" class="iconfont icon-gerenzhongxin1"></i>
    </yd-tabbar-item>
    <!-- <yd-tabbar-item title="更多" link="/guide_more" :active="index==6" >
          <i slot="icon" class="iconfont icon-gengduo"></i>
        </yd-tabbar-item> -->
  </yd-tabbar>
</template>
<script>
  export default {
    name: "GuideFooter",
    props: ["commentCount", "plainCount", "tip", "index"]
  }
</script>

