<template>
  <div id="app">
    <h1>Hello VueElement</h1>
    <el-row>
      <el-col :span="8">
        <div>1</div>
      </el-col>
      <el-col :span="8">
        <div>2</div>
      </el-col>
      <el-col :span="8">
        <div>3</div>
      </el-col>
    </el-row>
    <el-row>
      <el-input placeholder="Please input" v-model="input"></el-input>
    </el-row>
    <el-row>
      <el-button type="primary" @click="openFullScreen">Test</el-button>
    </el-row>
    <el-row>
      <el-button type="primary" @click="openPopup">Test2</el-button>
    </el-row>
    <el-cascader></el-cascader>
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
      input: "",
    }
  },
  methods: {
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      })
      setTimeout(() => {
        loading.close()
      }, 1000)
    },
    openPopup() {
      this.$alert("This is a message", "Title", {
        confirmButtonText: "OK",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          })
        },
      })
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
.el-row {
  margin-bottom: 20px;
}
</style>
