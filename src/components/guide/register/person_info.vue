<template>
  <yd-layout>
    <v-header slot="navbar" title="个人中心" to="/guide_home">
    </v-header>

    <yd-cell-group>
      <yd-cell-item>
        <i slot="icon" class="iconfont icon-nongyeyinhang- "></i>
        <div slot="left">
          <div class="person_info_content">
            冰
          </div>
          <div class="person_info_content">
            微信号
          </div>
        </div>
      </yd-cell-item>
    </yd-cell-group>

    <yd-cell-group>
      <yd-cell-item>
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span slot="left" class="person_info_content">
          收藏
        </span>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item>
        <i slot="icon" class="iconfont icon-19 "></i>
        <span slot="left" class="person_info_content">
          相册
        </span>
      </yd-cell-item>

      <yd-cell-item>
        <i slot="icon" class="iconfont icon-qiabao "></i>
        <span slot="left" class="person_info_content">
          卡包
        </span>
      </yd-cell-item>
      <yd-cell-item>
        <i slot="icon" class="iconfont icon-biaoqing "></i>
        <span slot="left" class="person_info_content">
          表情
        </span>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item>
        <i slot="icon" class="iconfont icon-shezhi  "></i>
        <span slot="left" class="person_info_content">
          设置
        </span>
      </yd-cell-item>
    </yd-cell-group>
    <v-footer slot="tabbar" index="5"></v-footer>
  </yd-layout>
</template>

<style scoped>
  .person_info_title {
    padding-left: .35rem;
    padding-top: 1.2em;
  }
  .person_info_btn{
     padding: .24rem;
  }
 .person_info_all{
   color: #268ffd
 }
 .person_info_icon{
    font-size: 2.42em;
    color: green;
 }
 .person_info_content{
        margin: 0.5em 0.5em;
 }
</style>
<script>
import vHeader from './../header'
import vFooter from './../footer'
import {
  getPersonInfo
} from '@/api/guide_api'
export default {
   name:"guide_person_info",
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
