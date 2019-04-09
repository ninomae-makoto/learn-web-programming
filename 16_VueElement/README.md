
# 概要

Vue用のUIフレームワーク。  
ボタン、アイコン、ダイアログ、プログレスなど。 　
Vueと組み合わせることでそれっぽいデザインが作成できる。  
デザインを作り込む場合使用しないほうがいい。  


# Vue Elementの組み込み方法

## インストール

```
npm i element-ui
```

## 外部ファイルとして扱う

### vue.web.config

main.jsにまとめられないようにする。ついでにVueも。

``` js
module.exports = {
  chainWebpack: config => {
    config.externals({
      "vue": "Vue",
      'element-ui': 'ElementUI'
    })
  }
}
```

### index.htmlに読み込み処理追加

``` html
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.22/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

### App.vue

``` html
<template>
  <div id="app">
    <h1>Hello VueCLI</h1>
    <el-row>
      <el-col :span="8"><div>1</div></el-col>
      <el-col :span="8"><div>2</div></el-col>
      <el-col :span="8"><div>3</div></el-col>
    </el-row>
    <el-row><el-input placeholder="Please input" v-model="input"></el-input></el-row>
    <el-row>
      <el-button
        type="primary"
        @click="openFullScreen">
        Test
      </el-button>
    </el-row>
    <el-row>
      <el-button
        type="primary"
        @click="openPopup">
        Test2
      </el-button>
    </el-row>
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
              message: `action: ${ action }`,
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

```

# 動作確認

```
cd 16_VueElement/1601_HelloElement
npm i
npm run serve
```

http://localhost:8080/ へアクセス  

# 参考
https://element.eleme.io/#/en-US/component
