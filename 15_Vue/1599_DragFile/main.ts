
import Vue from "vue"
import dragfileComponent from "./dragfile.vue"

const v = new Vue({
  el: "#app",
  components: {
    dragfileComponent,
  },
  data() {
    return {
    }
  },
  methods: {
    handleTemplate() {
      //
    },
  },
})

// 画面初期化までは非表示 IE11対策
v.$nextTick(() => {
  const app = document.getElementById("app")
  if (app) {
    app.classList.remove("hidden")
  }
})
