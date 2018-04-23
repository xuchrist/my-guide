<template>
  
   <yd-layout>
        <v-header slot="navbar" title="评价列表"  to="/admin_home">

        </v-header>
         <div v-show="false" class="tagscloud">
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
              <div class="tagscloud-comments">
                     <div class="tagscloud-user">
                       <img src="" alt="">
                       <span class="tagscloud-name">aaaa</span>
                     </div>
                     <div class="tagscloud-content">满意！这个价格太美丽了，果断入手，绝对超值，小妹上身的效果贴别好！</div>
                     <div class="tagscloud-date">2018-04-08 颜色分类:黑色;尺码:M (170/88A)</div>
              </div>
            </div>
            <div class="tagscloud-more">
              <button>查看更多评价</button>
            </div>
         </div>

         <yd-list theme=4>
          <yd-list-item v-for="(item, key) in list" :key="key" @click.native="goDetail(item)">
            <!-- <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span> -->
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
    </yd-layout>
</template>

 <style scoped>
  .tagscloud {
    font-family: 'Heiti SC';
    padding: 6px;
    background: #fff;
  }

  .tagscloud-main {
    margin: 0;
    padding: 0;
  }

  .tagscloud-title {
    font-size: 14px;
    color: #666;
    margin: 6px;
  }

  .tagscloud-name {
    vertical-align: middle;
    padding: 5px;
    line-height: 22px;
    color: #999;
  }

  .tagscloud-main-ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
    overflow: hidden;
  }

  .tagscloud-main-ul li {
    float: left;
    background-color: #FEE;
    color: #666;
    margin: 6px 3px;
    padding: 6px 9px;
    text-align: center;
    border-radius: 10px;
    -moz-border-radius: 10px;
    font-size: 12px;
  }

  .tagscloud-comments {
    margin: 6px;
  }

  .tagscloud-user {
    line-height: 16px;
    font-size: 12px;
    margin: 10px 0;
    position: relative;
  }

  .tagscloud-content {
    font-size: 13px;
    line-height: 16px;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    height: 32px;
    overflow: hidden;
    word-break: break-all;
  }

  .tagscloud-date {
    font-size: 10px;
    padding-top: 8px;
    color: #999;
    line-height: 14px;
  }

  .tagscloud-more {
    text-align: center;
  }

  .tagscloud-more button {
    width: 107px;
    height: 24px;
    margin: 10px auto;
    border: 1px solid rgba(255, 0, 54, .5);
    color: rgba(255, 0, 54, .8);
    background: #fff;
    border-radius: 12px;
    line-height: 24px;
    -webkit-appearance: none;
    text-align: center;
  }


 </style>

 <style scoped>
 
 </style>
 

<script>
import vHeader from '../header'
export default {
  name:"admin_comment_list",
  components: {
    vHeader
  },
   methods: {
     goDetail:function(item){ 
      this.$router.push({path:'/admin_comment_info',query:{obj:item}});//类似get传参，通过URL传递参数
    // this.$router.push({path:'/guide_cash_info',params:{obj:item}});//类似post传参 
    }
  },
  created () {
    this.list= [
                    {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
                    {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
                ]
  }
  
}
</script>
