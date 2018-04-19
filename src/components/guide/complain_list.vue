
<template>
   <yd-layout>
     
     <v-header slot="navbar" title="投诉列表" to="/guide_home" > 
    </v-header>
    <v-footer  slot="tabbar" index="3"></v-footer>
   </yd-layout>
</template> 
<script>
import vHeader from './header'
import vFooter from './footer'
export default {
  name:"complain_list",
   components: {
    vFooter,
    vHeader
  },
  data () {
    return {
      
    }
  },
  created () {
    
  }
}
</script>
