<template>
  <yd-layout>
    <v-header slot="navbar" title="评论详情" to="/admin_comment_list">
    </v-header>
     
  </yd-layout>
</template>


<script>
  import vHeader from "../header";
  export default {
    name: "admin_comment_info",
    components:{vHeader},
    created() {
      this.obj = this.$route.query.obj;
      console.log("comment info" + JSON.stringify(this.obj));
    }
  }
</script>
