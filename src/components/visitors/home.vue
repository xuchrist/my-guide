<template>
  <yd-layout>
     
    <v-header slot="navbar" title="主页" > 
    </v-header>

    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <yd-grids-group rows="3">
      <yd-grids-item v-for="item in list" :key="item.name" :link="item.link">
        <i slot="icon" :class="item.icon" style="color:red"></i>
        <span slot="text">{{item.name}}</span>
      </yd-grids-item>
    </yd-grids-group>
    <yd-rollnotice direction="up" align="right" height="50" autoplay="2000" class="demo-small-pitch">
      <yd-rollnotice-item>
        <span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！
        <br/>
      </yd-rollnotice-item>
      <yd-rollnotice-item>
        <span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典
        <br>
      </yd-rollnotice-item>
      <yd-rollnotice-item>
        <span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折
        <br>
      </yd-rollnotice-item>
    </yd-rollnotice> 
    
    <v-footer  slot="tabbar"  index="1" ></v-footer>
  </yd-layout>

</template>


<script>
import vHeader from './header'
import vFooter from './footer'
export default {
  name: "home",
  components: {
    vFooter,
    vHeader
  },
  data() {
    return {
      list: [
        {
          icon: "iconfont icon-pinglun",
          name: "评论",
          link: "/guide_comment_list"
        },
        {
          icon: "iconfont icon-tousu",
          name: "投诉",
          link: "/guide_complain_list"
        },
        {
          icon: "iconfont icon-tixian",
          name: "提现",
          link: "/guide_cash_list"
        }
      ]
    };
  }
};
</script>
