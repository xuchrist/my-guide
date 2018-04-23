import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [, {
      path: '/',
      name: 'index',
      component: resolve => require(['@/components/home'], resolve)
    },
    //admin
    {
      path: '/admin_cash_info',
      name: 'admin_cash_info',
      component: resolve => require(['@/components/admin/cash_info'], resolve)
    },
    {
      path: '/admin_cash_list',
      name: 'admin_cash_list',
      component: resolve => require(['@/components/admin/cash_list'], resolve)
    }, {
      path: '/admin_comment_info',
      name: 'admin_comment_info',
      component: resolve => require(['@/components/admin/comment_info'], resolve)
    }, {
      path: '/admin_comment_list',
      name: 'admin_comment_list',
      component: resolve => require(['@/components/admin/comment_list'], resolve)
    }, {
      path: '/admin_complain_info',
      name: 'admin_complain_info',
      component: resolve => require(['@/components/admin/complain_info'], resolve)
    }, {
      path: '/admin_complain_list',
      name: 'admin_complain_list',
      component: resolve => require(['@/components/admin/complain_list'], resolve)
    }, {
      path: '/admin_guide_info',
      name: 'admin_guide_info',
      component: resolve => require(['@/components/admin/guide_info'], resolve)
    }, {
      path: '/admin_guide_list',
      name: 'admin_guide_list',
      component: resolve => require(['@/components/admin/guide_list'], resolve)
    }, {
      path: '/admin_home',
      name: 'admin_home',
      component: resolve => require(['@/components/admin/home'], resolve)
    }, {
      path: '/admin_login',
      name: 'admin_login',
      component: resolve => require(['@/components/admin/login'], resolve)
    },  {
      path: '/admin_visitor_list',
      name: 'admin_visitor_list',
      component: resolve => require(['@/components/admin/visitor_list'], resolve)
    }, {
      path: '/admin_pays_list',
      name: 'admin_pays_list',
      component: resolve => require(['@/components/admin/pays_list'], resolve)
    }, {
      path: '/admin_pays_setting',
      name: 'admin_pays_setting',
      component: resolve => require(['@/components/admin/pays_setting'], resolve)
    }, {
      path: '/admin_visitor_info',
      name: 'admin_visitor_info',
      component: resolve => require(['@/components/admin/visitor_info'], resolve)
    },   {
      path: '/admin_words_setting',
      name: 'admin_words_setting',
      component: resolve => require(['@/components/admin/words_setting'], resolve)
    }
    //guide
    , {
      path: '/guide_agreement',
      name: 'guide_agreement',
      component: resolve => require(['@/components/guide/agreement'], resolve)
    }, {
      path: '/guide_cash_info',
      name: 'guide_cash_info',
      component: resolve => require(['@/components/guide/cash_info'], resolve)
    }, {
      path: '/guide_cash',
      name: 'guide_cash',
      component: resolve => require(['@/components/guide/cash'], resolve)
    }, {
      path: '/guide_cash_list',
      name: 'guide_cash_list',
      component: resolve => require(['@/components/guide/cash_list'], resolve)
    }, {
      path: '/guide_comment_info',
      name: 'guide_comment_info',
      component: resolve => require(['@/components/guide/comment_info'], resolve)
    }, {
      path: '/guide_comment_list',
      name: 'guide_comment_list',
      component: resolve => require(['@/components/guide/comment_list'], resolve)
    }, {
      path: '/guide_complain_info',
      name: 'guide_complain_info',
      component: resolve => require(['@/components/guide/complain_info'], resolve)
    }, {
      path: '/guide_complain_list',
      name: 'guide_complain_list',
      component: resolve => require(['@/components/guide/complain_list'], resolve)
    }, {
      path: '/guide_home',
      name: 'guide_home',
      component: resolve => require(['@/components/guide/home'], resolve)
    }, {
      path: '/guide_person_info',
      name: 'guide_person_info',
      component: resolve => require(['@/components/guide/person_info'], resolve)
    }, {
      path: '/guide_more',
      name: 'guide_more',
      component: resolve => require(['@/components/guide/more'], resolve)
    }
    //visitors
    , {
      path: '/visitors_comment',
      name: 'visitors_comment',
      component: resolve => require(['@/components/visitors/comment'], resolve)
    }, {
      path: '/visitors_complain',
      name: 'visitors_complain',
      component: resolve => require(['@/components/visitors/complain'], resolve)
    },
    {
      path: '/visitors_guide_history',
      name: 'visitors_guide_history',
      component: resolve => require(['@/components/visitors/guide_history'], resolve)
    }, 
    {
      path: '/visitors_guide_info',
      name: 'visitors_guide_info',
      component: resolve => require(['@/components/visitors/guide_info'], resolve)
    }, {
      path: '/visitors_guide_list',
      name: 'visitors_guide_list',
      component: resolve => require(['@/components/visitors/guide_list'], resolve)
    }, {
      path: '/visitors_home',
      name: 'visitors_home',
      component: resolve => require(['@/components/visitors/home'], resolve)
    }, {
      path: '/visitors_news_info',
      name: 'visitors_news_info',
      component: resolve => require(['@/components/visitors/news_info'], resolve)
    }, {
      path: '/visitors_news_list',
      name: 'visitors_news_list',
      component: resolve => require(['@/components/visitors/news_list'], resolve)
    }, {
      path: '/visitors_pays',
      name: 'visitors_pays',
      component: resolve => require(['@/components/visitors/pays'], resolve)
    }, {
      path: '/visitors_search',
      name: 'visitors_search',
      component: resolve => require(['@/components/visitors/search'], resolve)
    }, {
      path: '/visitors_person_info',
      name: 'visitors_person_info',
      component: resolve => require(['@/components/visitors/person_info'], resolve)
    }

  ]
})
