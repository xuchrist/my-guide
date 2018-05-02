<template>
  <yd-layout>
    <v-header slot="navbar" title="投诉列表" to="/guide_home">
    </v-header>
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-list theme=4 slot="list">
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
      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
      <!-- 加载中提示，不指定，将显示默认加载中图标 -->
      <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />
    </yd-infinitescroll>
    <v-footer slot="tabbar" index="3"></v-footer>
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
  import vHeader from './../header'
  import vFooter from './../footer'
  import {
    getComplainList
  } from '@/api/guide_api';
  export default {
    name: "guide_complain_list",
    components: {
      vFooter,
      vHeader
    },
    data() {
      return {
        page: 1,
        pageSize: 10
      }
    },
    methods: {
      loadList() {
        var self=this;
        getComplainList({
            page: self.page,
            pagesize: self.pageSize
          })
          .then(function(response) {
            const _list = response.body;
            self.list = [...self.list, ..._list];
            if (_list.length < self.pageSize || self.page == 3) {
              /* 所有数据加载完毕 */
              self.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
              return;
            }
            /* 单次请求数据完毕 */
            self.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
            self.page++;
          })
          .catch(function(error){
            console.log(error);
          });
      },
      goDetail: function(item) {
        this.$router.push({
          path: '/guide_complain_info',
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
