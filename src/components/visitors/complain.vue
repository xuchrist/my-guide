<template>
  <yd-layout>
    <v-header slot="navbar" :title="'投诉'" to="/visitors_home">
    </v-header>
    <v-footer slot="tabbar" index="4"></v-footer>
  </yd-layout>
</template>
<script>
  import vFooter from './footer'
  import vHeader from './header'
  export default {
    name: 'complain',
    components: {
      vHeader,
      vFooter
    }
  }
</script>
