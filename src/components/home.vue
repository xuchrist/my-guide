<template>
<yd-layout>
  <yd-navbar slot="navbar" title="主页">
    <router-link to="#" slot="left">
      <yd-navbar-back-icon>返回</yd-navbar-back-icon>
    </router-link>
  </yd-navbar>
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
  <yd-grids-group rows="5">
    <yd-grids-item v-for="item in list" :key="item.name" :link="item.link">
      <i slot="icon" :class="item.icon"></i>
      <span slot="text">{{item.name}}</span>
    </yd-grids-item>
  </yd-grids-group>
  <yd-rollnotice direction="up" align="right" height="50" autoplay="2000" class="demo-small-pitch">
                <yd-rollnotice-item>
                 <span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！<br/> 
                </yd-rollnotice-item>
                <yd-rollnotice-item>
                  <span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典<br> 
                </yd-rollnotice-item>
                <yd-rollnotice-item>
                 <span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折 <br> 
                </yd-rollnotice-item>
            </yd-rollnotice>
  <yd-tabbar slot="tabbar">
    <yd-tabbar-item title="主页" link="/" active>
      <i slot="icon" class="demo-icons-weixin"></i>
    </yd-tabbar-item>
    <yd-tabbar-item title="测试1" link="/test1">
      <i slot="icon" class="demo-icons-weixin"></i>
      <yd-badge slot="badge" type="danger">2</yd-badge>
    </yd-tabbar-item>
    <yd-tabbar-item title="测试2" link="/test2">
      <i slot="icon" class="demo-icons-contact"></i>
    </yd-tabbar-item>
    <yd-tabbar-item title="测试3" link="/test3" dot>
      <i slot="icon" class="demo-icons-discover"></i>
    </yd-tabbar-item>
    <yd-tabbar-item title="测试4" link="/test4">
      <i slot="icon" class="demo-icons-me"></i>
    </yd-tabbar-item>
  </yd-tabbar>
</yd-layout>

</template>



<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      list: [{
          icon: 'demo-icons-button',
          name: 'Button',
          link: '/button'
        },
        {
          icon: 'demo-icons-dialog',
          name: 'Dialog',
          link: '/dialog'
        },
        {
          icon: 'demo-icons-cell',
          name: 'Cell',
          link: '/cell'
        },
        {
          icon: 'demo-icons-icons',
          name: 'Icons',
          link: '/icons'
        },
        {
          icon: 'demo-icons-grids',
          name: 'Grids',
          link: '/grids'
        } 

      ]

    };
  },
  created() {
    
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
