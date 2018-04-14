import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve) /* <== 主页 */
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/components/search'], resolve) /* <== 查找 */
    },
    {
      path: '/comment',
      name: 'comment',
      component: resolve => require(['@/components/comment'], resolve) /* <== 评论 */
    }, {
      path: '/tipoffs',
      name: 'tipoffs',
      component: resolve => require(['@/components/tipoffs'], resolve) /* <== 举报 */
    }, {
      path: '/news',
      name: 'news',
      component: resolve => require(['@/components/news'], resolve) /* <== 新闻 */
    }
    , {
      path: '/pays',
      name: 'pays',
      component: resolve => require(['@/components/pays'], resolve) /* <== 充值 */
    }
    , {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/register'], resolve) /* <== 注册 */
    },
    , {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve) /* <== 登录 */
    }
  ]
})
