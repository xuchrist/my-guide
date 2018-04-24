<template>
   <yd-layout>
    <v-header slot="navbar" :title="'详情'" to="/admin_guide_list">
    </v-header>  
    
   </yd-layout>
</template>


<script>
import vFooter from '../footer'
import vHeader from '../header' 
export default {
   name:"admin_guide_info",
   components: {
     vFooter,vHeader
   },
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