<template>
  <yd-layout>
    <v-header slot="navbar" :title="'详情'" to="/visitors_news_list">
    </v-header>
  </yd-layout>
</template>


<script>
  import vFooter from './footer'
  import vHeader from './header'
  export default {
    name: "news_info",
    data() {
      return {
      }
    },
    components: {
      vHeader
    },
    created() {
      this.obj = this.$route.query.obj;
      console.log("news info" + JSON.stringify(this.obj));
    }
  }
</script>