<template>
  <yd-layout>
    <v-header slot="navbar" title="新闻列表" to="/visitors_home">
    </v-header>
    <yd-tab>
      <yd-tab-panel label="城市新闻">
        <yd-list theme=4>
          <yd-list-item v-for="(item, key) in list" :key="key" @click.native="goDetail(item)">
            <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
              <div class="left">
                <span class="demo-list-price">
                    <em>¥</em>{{item.price}}</span>
                <span class="demo-list-del-price">¥{{item.w_price}}</span>
              </div>
              <div class="right">content</div>
            </yd-list-other>
          </yd-list-item>
        </yd-list>
      </yd-tab-panel>
      <yd-tab-panel label="景区新闻">
        <yd-list theme=4>
          <yd-list-item v-for="(item, key) in list" :key="key" @click.native="goDetail(item)">
            <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
              <div class="left">
                <span class="demo-list-price">
                    <em>¥</em>{{item.price}}</span>
                <span class="demo-list-del-price">¥{{item.w_price}}</span>
              </div>
              <div class="right">content</div>
            </yd-list-other>
          </yd-list-item>
        </yd-list>
      </yd-tab-panel>
      <yd-tab-panel label="旅游攻略">
        <yd-list theme=4>
          <yd-list-item v-for="(item, key) in list" :key="key" @click.native="goDetail(item)">
            <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
              <div class="left">
                <span class="demo-list-price">
                    <em>¥</em>{{item.price}}</span>
                <span class="demo-list-del-price">¥{{item.w_price}}</span>
              </div>
              <div class="right">content</div>
            </yd-list-other>
          </yd-list-item>
        </yd-list>
      </yd-tab-panel>
    </yd-tab>
  </yd-layout>
</template>


<style scoped>
  .left {
    position: absolute;
    bottom: 0.35em;
  }
  .right {
    position: absolute;
    bottom: 0.35em;
    right: 0;
  }
</style>

<script>
  import vHeader from './header'
  import vFooter from './footer'
  export default {
    name: "news_list",
    components: {
      vFooter,
      vHeader
    },
    data() {
      return {
      }
    },
    methods: {
      goDetail: function(item) {
        this.$router.push({
          path: '/visitors_news_info',
          query: {
            obj: item
          }
        }); //类似get传参，通过URL传递参数
        // this.$router.push({path:'/visitors_cash_info',params:{obj:item}});//类似post传参 
      }
    },
    created() {
      this.list = [{
          img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
          title: "标题111标题标题标题标题",
          price: 156.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
          title: "标题222标题标题标题标题",
          price: 256.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
          title: "标题333标题标题标题标题",
          price: 356.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
          title: "标题444标题标题标题标题",
          price: 456.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
          title: "标题555标题标题标题标题",
          price: 556.23,
          w_price: 89.36
        },
        {
          img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
          title: "标题666标题标题标题标题",
          price: 656.23,
          w_price: 89.36
        }
      ]
    }
  }
</script>
