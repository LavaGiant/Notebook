import Vue from 'vue'
import App from './App.vue'
import store from './store'
import CateEnum from '@/model/CateEnum'
// import ItemData from '@/model/ItemData'
import ActionHelper from '@/store/ActionHelper'
import ItemData from './model/ItemData'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')