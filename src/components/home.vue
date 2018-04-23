<template>
  <yd-layout>
    <yd-navbar title="陪导测试"> 
    </yd-navbar>
    <div style="text-align: center;">
      <yd-button type="primary" @click.native="goVisitors">游客</yd-button>
      <yd-button type="primary" @click.native="goGuide">导游</yd-button>
      <yd-button type="primary" @click.native="goAdmin">管理员</yd-button>
    </div>
    <yd-preview :buttons="btns">
      <yd-preview-header>
        <div slot="right" style="text-align: center;">测试说明</div>
      </yd-preview-header>

      <yd-preview-item>
        <div slot="right" style="text-align: center;text-align-last:initial">点击相应按钮跳转不同页面，开始测试</div>
      </yd-preview-item>
    </yd-preview>
  </yd-layout>

</template>





<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
       btns: [
       ]
    };
  },
  methods: {
    goVisitors:function(){
        this.$router.push({ path: '/visitors_home'});
    },
    goGuide:function(){
        this.$router.push({ path: '/guide_home'});
    },
    goAdmin:function(){
        this.$router.push({ path: '/admin_home'});
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
