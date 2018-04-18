import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    , {
      path: '/',
      name: 'visitors_home',
      component: resolve => require(['@/components/visitors/home'], resolve) /* <== 登录 */
    },
    //admin
    {
      path: '/admin_cash_info',
      name: 'admin_cash_info',
      component: resolve => require(['@/components/admin/cash_info'], resolve) /* <== 登录 */
    },
    {
      path: '/admin_cash_list',
      name: 'admin_cash_list',
      component: resolve => require(['@/components/admin/cash_list'], resolve) /* <== 登录 */
    }, {
      path: '/admin_comment_info',
      name: 'admin_comment_info',
      component: resolve => require(['@/components/admin/comment_info'], resolve) /* <== 登录 */
    }, {
      path: '/admin_comment_list',
      name: 'admin_comment_list',
      component: resolve => require(['@/components/admin/comment_list'], resolve) /* <== 登录 */
    }, {
      path: '/admin_complain_info',
      name: 'admin_complain_info',
      component: resolve => require(['@/components/admin/complain_info'], resolve) /* <== 登录 */
    }, {
      path: '/admin_complain_list',
      name: 'admin_complain_list',
      component: resolve => require(['@/components/admin/complain_list'], resolve) /* <== 登录 */
    }, {
      path: '/admin_guide_info',
      name: 'admin_guide_info',
      component: resolve => require(['@/components/admin/guide_info'], resolve) /* <== 登录 */
    }, {
      path: '/admin_guide_list',
      name: 'admin_guide_list',
      component: resolve => require(['@/components/admin/guide_list'], resolve) /* <== 登录 */
    }, {
      path: '/admin_home',
      name: 'admin_home',
      component: resolve => require(['@/components/admin/home'], resolve) /* <== 登录 */
    },{
      path: '/admin_login',
      name: 'admin_login',
      component: resolve => require(['@/components/admin/login'], resolve) /* <== 登录 */
    }, {
      path: '/admin_visitor_info',
      name: 'admin_visitor_info',
      component: resolve => require(['@/components/admin/visitor_info'], resolve) /* <== 登录 */
    }, {
      path: '/admin_visitor_list',
      name: 'admin_visitor_list',
      component: resolve => require(['@/components/admin/visitor_list'], resolve) /* <== 登录 */
    }, {
      path: '/admin_pays_list',
      name: 'admin_pays_list',
      component: resolve => require(['@/components/admin/pays_list'], resolve) /* <== 登录 */
    }, {
      path: '/admin_pays_setting',
      name: 'admin_pays_setting',
      component: resolve => require(['@/components/admin/pays_setting'], resolve) /* <== 登录 */
    }, {
      path: '/admin_visitor_info',
      name: 'admin_visitor_info',
      component: resolve => require(['@/components/admin/visitor_info'], resolve) /* <== 登录 */
    }, {
      path: '/admin_visitor_list',
      name: 'admin_visitor_list',
      component: resolve => require(['@/components/admin/visitor_list'], resolve) /* <== 登录 */
    }, {
      path: '/admin_words_setting',
      name: 'admin_words_setting',
      component: resolve => require(['@/components/admin/words_setting'], resolve) /* <== 登录 */
    }
    //guide
    , {
      path: '/guide_agreement',
      name: 'guide_agreement',
      component: resolve => require(['@/components/guide/agreement'], resolve) /* <== 登录 */
    }
    , {
      path: '/guide_cash_info',
      name: 'guide_cash_info',
      component: resolve => require(['@/components/guide/cash_info'], resolve) /* <== 登录 */
    }
    , {
      path: '/guide_cash_list',
      name: 'guide_cash_list',
      component: resolve => require(['@/components/guide/cash_list'], resolve) /* <== 登录 */
    }
    , {
      path: '/guide_comment_info',
      name: 'guide_comment_info',
      component: resolve => require(['@/components/guide/comment_info'], resolve) /* <== 登录 */
    }
    , {
      path: '/guide_comment_list',
      name: 'guide_comment_list',
      component: resolve => require(['@/components/guide/comment_list'], resolve) /* <== 登录 */
    }
    , {
      path: '/guide_complain_info',
      name: 'guide_complain_info',
      component: resolve => require(['@/components/guide/complain_info'], resolve) /* <== 登录 */
    }
    , {
      path: '/guide_complain_list',
      name: 'guide_complain_list',
      component: resolve => require(['@/components/guide/complain_list'], resolve) /* <== 登录 */
    }
    , {
      path: '/guide_home',
      name: 'guide_home',
      component: resolve => require(['@/components/guide/home'], resolve) /* <== 登录 */
    }
    , {
      path: '/guide_person_info',
      name: 'guide_person_info',
      component: resolve => require(['@/components/guide/person_info'], resolve) /* <== 登录 */
    }
    //visitors
    , {
      path: '/visitors_comment',
      name: 'visitors_comment',
      component: resolve => require(['@/components/visitors/comment'], resolve) /* <== 登录 */
    }
    , {
      path: '/visitors_complain',
      name: 'visitors_complain',
      component: resolve => require(['@/components/visitors/complain'], resolve) /* <== 登录 */
    }
    , {
      path: '/visitors_guide_info',
      name: 'visitors_guide_info',
      component: resolve => require(['@/components/visitors/guide_info'], resolve) /* <== 登录 */
    }
    , {
      path: '/visitors_guide_list',
      name: 'visitors_guide_list',
      component: resolve => require(['@/components/visitors/guide_list'], resolve) /* <== 登录 */
    }
    , {
      path: '/visitors_home',
      name: 'visitors_home',
      component: resolve => require(['@/components/visitors/home'], resolve) /* <== 登录 */
    }
    , {
      path: '/visitors_news_info',
      name: 'visitors_news_info',
      component: resolve => require(['@/components/visitors/news_info'], resolve) /* <== 登录 */
    }
    , {
      path: '/visitors_news_list',
      name: 'visitors_news_list',
      component: resolve => require(['@/components/visitors/news_list'], resolve) /* <== 登录 */
    }
    , {
      path: '/visitors_pays',
      name: 'visitors_pays',
      component: resolve => require(['@/components/visitors/pays'], resolve) /* <== 登录 */
    }, {
      path: '/visitors_search',
      name: 'visitors_search',
      component: resolve => require(['@/components/visitors/search'], resolve) /* <== 登录 */
    }
    , {
      path: '/visitors_person_info',
      name: 'visitors_person_info',
      component: resolve => require(['@/components/visitors/person_info'], resolve) /* <== 登录 */
    }
    
  ]
})
