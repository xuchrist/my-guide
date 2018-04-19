
<template>
   <yd-layout>
   
   <v-header slot="navbar" title="提现列表" to="/guide_home" > 
    </v-header>
 <v-footer  slot="tabbar" index="4"></v-footer>
  </yd-layout> 
</template>

<script>
import vFooter from './footer'
import vHeader from './header'
export default {
  name:"cash_list",
    components: {
    vFooter,
    vHeader
  },
  data(){
      return {};
  },
  created () {
      
  }
}
</script>
