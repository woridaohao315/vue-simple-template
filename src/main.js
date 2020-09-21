import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.use(require('vue-wechat-title'))
import '@/universal/utils/css/reset.css'
import '@/universal/utils/css/util.styl'



axios.interceptors.response.use(function (response) {
  if (response.headers.token) {
      //doSomething
  }
  return response;

}, function (error) {

  return Promise.reject(error);

});

axios.interceptors.request.use(function (config) {
  config.headers.common['token'] = 'something'
  let url = config.url

  return config;

}, function (error) {

  return Promise.reject(error);

})
console.log(router)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')







