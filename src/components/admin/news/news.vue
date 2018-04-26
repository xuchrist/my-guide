<template>
  <yd-layout>
    <v-header slot="navbar" title="新闻发布" to="/admin_home">
    </v-header>
    <yd-cell-group>
      <div>
        <span>title</span>
      </div>
      <yd-cell-item>
      </yd-cell-item>
      <yd-cell-item>
        <UE slot="right" :defaultMsg=defaultMsg :config=config ref="ue" style="width:100%"></UE>
      </yd-cell-item>
      <yd-cell-item>
        <yd-button slot="right" @click.native="getUEContent" size="large" type="primary" shape="circle">发布</yd-button>
      </yd-cell-item>
    </yd-cell-group>
  </yd-layout>
</template>


<script>
  import UE from '../../common/ue.vue';
  import vHeader from '../header'
  import vFooter from '../footer'
  export default {
    name: "admin_news",
    components: {
      UE,
      vHeader
    },
    data() {
      return {
        defaultMsg: '',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350,
          toolbars: [
            [
              'fullscreen', 'source', '|', 'undo', 'redo', '|',
              'bold', 'italic', 'underline',
              'removeformat', '|',
              'insertorderedlist', 'insertunorderedlist',
              'indent', '|', 'justifyleft', 'justifycenter',
              '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', 'simpleupload',
              '|', 'link', 'unlink'
            ]
          ]
        }
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        console.log(content)
      }
    }
  }
</script>
