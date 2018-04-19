<template>
     <yd-navbar  :title="title">
      <router-link :to="to" slot="left">
        <yd-navbar-back-icon>返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
</template>
<script>
export default {
  name:"GuideHeader",
  props:{
      title:{
        default: "标题"
      },
      to:{
          default:'#'
      }
  }
}
</script>
