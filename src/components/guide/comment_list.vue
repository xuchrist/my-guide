


<template>
   <yd-layout>
   
     <v-header slot="navbar" title="评论列表" to="/guide_home" > 
    </v-header>
    <v-footer  slot="tabbar" index="2"></v-footer>
  </yd-layout> 
</template>
<script>
import vHeader from './header'
import vFooter from './footer'
export default {
  name:"comment_list",
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
