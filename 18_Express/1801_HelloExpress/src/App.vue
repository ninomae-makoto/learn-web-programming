<template>
  <div id="app">
    <h1>Hello VueTestUtils</h1>
    <span class="count">{{ count }}</span>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
// import lang from "element-ui"
import ElementUI from "element-ui"
// import locale from "element-ui/lib/locale/lang/ja"
import Vue from "vue"


export default Vue.extend({
  name: "app",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
  },
})
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
