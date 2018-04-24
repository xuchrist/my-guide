<template>
  <yd-layout>
    <v-header slot="navbar" :title="'详情'" to="/admin_visitor_list">
    </v-header>
  </yd-layout>
</template>


<script>
  import vFooter from '../footer'
  import vHeader from '../header'
  export default {
    name: "admin_visitor_info",
    components: {
      vFooter,
      vHeader
    },
    data() {
      return {
      }
    },
    components: {
      vHeader
    },
    created() {
      this.obj = this.$route.query.obj;
      console.log("visitor info" + JSON.stringify(this.obj));
    }
  }
</script>