<template>
  <yd-layout>
    <v-header slot="navbar" title="投诉详情" to="/admin_complain_list">
    </v-header>
     
  </yd-layout>
</template>


<script>
  import vHeader from "../header";
  export default {
    name: "admin_complain_info",
    components:{vHeader},
    created() {
      this.obj = this.$route.query.obj;
      console.log("complain info" + JSON.stringify(this.obj));
    }
  }
</script>
