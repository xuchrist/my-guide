<template>
  <yd-layout>
    <v-header slot="navbar" :title="'详情'" to="/admin_news_list">
    </v-header> 
   </yd-layout>
</template>


<script>
   import vHeader from '../header'
import vFooter from '../footer'
export default {
  name:"admin_news_info" ,
  components: {
      vHeader,
      vFooter
    }, 
  created () {
     this.obj=this.$route.query.obj;
     console.log("guide info"+ JSON.stringify(this.obj));
  }
}
</script>
