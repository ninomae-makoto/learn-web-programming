import ElementUI from "element-ui"
import Vue from "vue"
import App from "./App.vue"

// 日本語化
declare var ELEMENT: { locale: (arg0: any) => void; lang: { ja: any; }; }
ELEMENT.locale(ELEMENT.lang.ja)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
