
<template>
   <yd-layout>
     
       <v-header slot="navbar" title="更多" to="/guide_home" > 
    </v-header>
        <div>
            暂无功能
        </div>
     <v-footer  slot="tabbar" index="6"></v-footer>
  </yd-layout> 
</template> 
<script>
import vFooter from './footer'
import vHeader from './header'
export default {
  name:"guide_more",
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
