

<template>
   <yd-layout> 
     <v-header slot="navbar" title="个人中心" to="/guide_home" > 
    </v-header>

     <v-footer  slot="tabbar" index="5"></v-footer>
  </yd-layout> 
</template> 
<script>
import vHeader from './header'
import vFooter from './footer'
import {
  getPersonInfo
} from '@/api/guide_api'
export default {
  name: "person_info",
  components: {
    vFooter,
    vHeader
  },
  data() {
    return {

    }
  },
  created() {
    getPersonInfo()
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

</script>
