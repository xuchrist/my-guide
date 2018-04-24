<template>
  <yd-layout>
    <v-header slot="navbar" :title="'评论'" to="/visitors_home">
    </v-header>
    <v-footer slot="tabbar" index="3"></v-footer>
  </yd-layout>
</template>
<script>
  import vFooter from './footer'
  import vHeader from './header'
  export default {
    name: 'comment',
    components: {
      vHeader,
      vFooter
    }
  }
</script>
