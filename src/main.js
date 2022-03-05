import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import vueScrollto from 'vue-scrollto'


var numeral = require("numeral")
Vue.filter("formatNumber", function (value) {
    return numeral(value).format("0.00"); // displaying other groupings/separators is possible, look at the docs
});


Vue.config.productionTip = false

Vue.use(vueScrollto)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
