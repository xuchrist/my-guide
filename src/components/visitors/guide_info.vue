<template>
   <yd-layout>
    <v-header slot="navbar" :title="'详情'" to="/visitors_guide_list">
    </v-header> 
   </yd-layout>
</template>


<script>
import vFooter from './footer'
import vHeader from './header'
export default {
  name:"guide_info",
  data () {
    return {
      
    }
  },
  components: {
    vHeader
  },
  created () {
     this.obj=this.$route.query.obj;
     console.log("guide info"+ JSON.stringify(this.obj));
  }
}
</script>