// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

import Vuex from 'vuex';
import axios from 'axios'; 

import "./assets/js/ydui.flexible.js" 
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
//import './assets/js/pc_to_mobile'
Vue.config.productionTip = false
Vue.use(YDUI);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus(state, isLoading) {
      state.isLoading = isLoading;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})

const FastClick = require('fastclick');

document.addEventListener('DOMContentLoaded', function () {
  FastClick.attach(document.body);
}, false);

router.beforeEach((route, redirect, next) => {
  /* 显示加载中动画 */
  store.commit('updateLoadingStatus', true);
  next();
});

router.afterEach(route => {
  /* 隐藏加载中动画 */
  store.commit('updateLoadingStatus', false);
});
