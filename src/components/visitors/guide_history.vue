<template>
  <yd-layout>
    <v-header slot="navbar" :title="'历史记录'" to="/visitors_home">
    </v-header>
  </yd-layout>
</template>
<script>
  import vFooter from './footer'
  import vHeader from './header'
  export default {
    name: 'guide_history',
    components: {
      vHeader,
      vFooter
    }
  }
</script>
