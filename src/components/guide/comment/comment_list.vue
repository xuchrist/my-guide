


<template>
  <yd-layout>
    <v-header slot="navbar" title="评论列表" to="/guide_home">
    </v-header>
    <yd-list theme=4>
      <yd-list-item v-for="(item, key) in list" :key="key" @click.native="goDetail(item)">
        <img slot="img" :src="item.img">
        <span slot="title">{{item.title}}</span>
        <yd-list-other slot="other">
          <div class="left">
            <span>
                  <em>¥</em>{{item.price}}</span>
            <span>¥{{item.w_price}}</span>
            <div>
              test content
            </div>
          </div>
          <div class="right">2018-04-23</div>
        </yd-list-other>
      </yd-list-item>
    </yd-list>
    <v-footer slot="tabbar" index="2"></v-footer>
  </yd-layout>
</template>
<script>
  import vHeader from './../header'
  import vFooter from './../footer'
  export default {
    name: "guide_comment_list",
    components: {
      vFooter,
      vHeader
    },
    data() {
      return {}
    },
    methods: {
      goDetail: function(item) {
        this.$router.push({
          path: '/guide_comment_info',
          query: {
            obj: item
          }
        }); //类似get传参，通过URL传递参数
        // this.$router.push({path:'/guide_cash_info',params:{obj:item}});//类似post传参 
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
