
<template>
   <yd-layout> 
    <v-header slot="navbar" title="协议" to="/guide_home" > 
    </v-header>
    <h1>协议</h1>
    
     <p>
         支付宝服务协议（以下简称本协议）由支付宝（中国）网络技术有限公司（以下简称本公司）和您签订。 
     </p>
     <b>一、声明与承诺</b>
     <br>
    <p>
          <b> （一）本协议已对与您的权益有或可能具有重大关系的条款，及对本公司具有或可能具有免责或限制责任的条款用粗体字予以标注，请您注意。您确认，在您注册成为支付宝用户以接受本服务，或您以其他本公司允许的方式实际使用本服务前，您已充分阅读、理解并接受本协议的全部内容，一旦您使用本服务，即表示您同意遵循本协议之所有约定。</b>
             <br>
             （三）您保证，在您同意接受本协议并注册成为支付宝用户时， <b>您已经年满16周岁，</b>或者您是在中国大陆地区合法开展经营活动或其他业务的法人或其他组织；本协议内容不受您所属国家或地区法律的排斥。不具备前述条件的，您应立即终止注册或停止使用本服务。
             <b>您在使用支付宝服务时，应自行判断对方是否是完全民事行为能力人并自行决定是否与对方进行交易或转账给对方等，且您应自行承担与此相关的所有风险。</b>
             
    </p>

  </yd-layout> 
</template>

<script>
import vHeader from './header'
export default {
  name:"agreement",
  components: {
      vHeader
  },
  data(){
      return {

      };
  },
  methods:{
      register:function(){
          
      }
  }
}
</script>
<style scoped>
 h1{
     text-align: center;
        margin: 10px;
    font-size: 14px;
 }
 p,::backdrop{ 
     padding: 0 10px;
 }
</style>

