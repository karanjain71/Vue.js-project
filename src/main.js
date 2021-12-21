import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import JsonExcel from 'vue-json-excel';

Vue.config.productionTip = false

Vue.component('downloadExcel', JsonExcel);


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
