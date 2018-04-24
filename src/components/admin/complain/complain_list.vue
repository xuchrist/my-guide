<template>
  <yd-layout>
    <v-header slot="navbar" title="评价列表" to="/admin_home">
    </v-header>
    <div v-show="IsFirst" class="tagscloud">
      <div class="tagscloud-main">
        <div class="tagscloud-title"></div>
        <ul class="tagscloud-main-ul">
          <li>整体不错(41)</li>
          <li>式样好(33)</li>
          <li>穿着美(31)</li>
          <li>衣服厚实(28)</li>
          <li>实惠(24)</li>
          <li>很保暖(19)</li>
        </ul>
        <div class="tagscloud-complains">
          <div class="tagscloud-user">
            <img src="" alt="">
            <span class="tagscloud-name">aaaa</span>
          </div>
          <div class="tagscloud-content">满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！</div>
          <div class="tagscloud-date">2018-04-08 颜色分类:黑色;尺码:M (170/88A)</div>
        </div>
      </div>
      <div class="tagscloud-more">
        <button @click="IsFirst=!IsFirst">查看更多评价</button>
      </div>
    </div>
    <div v-show="!IsFirst" class="review-content">
      <ul class="filter">
        <li class="current">全部</li>
        <li class="">追加</li>
        <li class="">有图(44)</li>
        <li class="tag-product" v-for="(item,key) in filters" :key="key" @click="filterHandler(item)">
          {{item.title}}({{item.count}})
        </li>
      </ul>
      <ul class="list">
        <li class="item" v-for="(item,key) in complains" :key="key" >
          <div class="info">
            <div class="author">{{item.name}}</div>
            <time> {{item.time}}</time>
          </div>
          <blockquote @click="goDetailHandler(item)">{{item.quote}}</blockquote>
          <ul class="sku">
            <li>
              颜色分类：{{item.sku.color}}
            </li>
            <li>
              尺码：{{item.sku.size}}
            </li>
            <yd-button type="hollow" class="delButton" @click.native="Del(item)">删除</yd-button>
          </ul>
        </li>
      </ul>
    </div>
  </yd-layout>
</template>
 

<script>
  import vHeader from "../header";
  export default {
    name: "admin_complain_list",
    components: {
      vHeader
    },
    data() {
      return {
        IsFirst: true
      }
    },
    methods: {
      goDetailHandler: function(item) {
        this.$router.push({
          path: "/admin_complain_info",
          query: {
            obj: item
          }
        });
      },
      filterHandler: function(item) {
        console.log(item);
      },
      Del: function(item) {
        console.log(item);
        
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
      ];
      this.filters = [{
          title: "整体不错",
          count: 41
        },
        {
          title: "式样好 ",
          count: 33
        },
        {
          title: "穿着美",
          count: 31
        },
        {
          title: "衣服厚实",
          count: 28
        },
        {
          title: "实惠",
          count: 24
        },
        {
          title: "很保暖",
          count: 19
        },
        {
          title: "快递不错",
          count: 19
        },
        {
          title: "尺码很好",
          count: 19
        },
        {
          title: "面料好",
          count: 19
        },
        {
          title: "做工差",
          count: 19
        }
      ];
      this.complains = [{
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        },
        {
          name: "疯***猴",
          time: "2018-04-08",
          quote: "满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！",
          sku: {
            color: "黑色",
            size: "M (170/88A)"
          }
        }
      ];
    }
  };
</script>



 
