<template>
  <script id="editor" type="text/plain">

</script>
</template>

<script> 
     export default {
         name: 'UE',
         data() {
             return {
                 editor: null
             }
         },
         props: {
             defaultMsg: {
                 type: String
             },
             config: {
                 type: Object
             }
         },
         mounted() {
            
             const _this = this;
             this.config["window.UEDITOR_HOME_URL"] ="/assets/ue/";
             this.config["serverUrl"] = "http://localhost:8080/utf8-jsp/jsp/controller.jsp";
             console.log(this.config);
             this.editor = UE.getEditor('editor', this.config); // 初始化UE
             this.editor.addListener("ready", function() {
                 _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
             });
         },
         methods: {
             getUEContent() { // 获取内容方法
                 return this.editor.getContent()
             }
         },
         destroyed() {
             this.editor.destroy();
         }
     }
</script>
