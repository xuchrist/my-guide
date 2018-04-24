<template>
  <yd-navbar :title="title">
    <router-link :to="to" slot="left">
      <yd-navbar-back-icon>返回</yd-navbar-back-icon>
    </router-link>
    <router-link :to="rightto" slot="right" v-show="rightto!=''">
      <yd-navbar-next-icon>详情</yd-navbar-next-icon>
    </router-link>
  </yd-navbar>
</template>
<script>
  export default {
    name: "VisitorsHeader",
    props: {
      title: {
        default: "标题"
      },
      to: {
        default: '#'
      },
      rightto: {
        default: ''
      }
    }
  }
</script>
