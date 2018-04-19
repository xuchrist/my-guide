<template>
 <div id="app" style="height: 100%;"><!-- 特别注意：若页面结构使用 yd-layout 组件时，这里需加上 height: 100%; -->
        <div v-show="isLoading" class="demo-loading">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><path stroke="none" d="M3 50A47 47 0 0 0 97 50A47 49 0 0 1 3 50" fill="#bababa" transform="rotate(100 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="0.6s" begin="0s" repeatCount="indefinite"></animateTransform></path></svg>
         <span>加载中</span>
          </div>

        <router-view v-show="!isLoading"></router-view>
    </div>
</template>


<script>
export default {
  name: 'App',
   computed: {
            isLoading() {
                return this.$store.state.isLoading
            }
        }
}
</script>

<style>
  @import "./assets/css/demo.css"; 
  @import "./assets/fonts/iconfont.css";
</style>