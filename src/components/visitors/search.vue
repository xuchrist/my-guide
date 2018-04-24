<template>
  <yd-layout>
    <v-header slot="navbar" :title="'搜索'" to="/visitors_home">
    </v-header>
    <v-footer slot="tabbar" index="2"></v-footer>
  </yd-layout>
</template>
<script>
  import vFooter from './footer'
  import vHeader from './header'
  import vGuidlist from './guide_list'
  export default {
    name: 'search',
    components: {
      vHeader,
      vFooter,
      vGuidlist
    },
    data() {
      return {
        search: ""
      }
    },
    methods: {
    }
  }
</script>
