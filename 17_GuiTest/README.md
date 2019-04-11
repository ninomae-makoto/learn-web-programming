
# 概要

Vue用のテストフレームワークvuetestutilsを使用してテストする。  

# Hello VueTestUtils

## 確認

```
cd 17_GuiTest/1701_HelloVueTestUtils/
npm run test:unit
```

```
 WEBPACK  Compiled successfully in 3995ms

 MOCHA  Testing...



  App.vue
    ✓ ボタンを押したときにカウントされることを確認する (41ms)


  1 passing (46ms)

 MOCHA  Tests completed successfully
```

と表示されたらOK

## 解説

### App.vue

``` html
<template>
  <div id="app">
    <h1>Hello VueTestUtils</h1>
    <span class="count">{{ count }}</span>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import ElementUI from "element-ui"
import Vue from "vue"


export default Vue.extend({
  name: "app",
  components: {
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
```

ボタンが押下されたらカウントアップして表示するという単純なプログラム。  

### example.spec.ts

``` ts
import App from "@/App.vue"
import { shallowMount } from "@vue/test-utils"
import { expect } from "chai"

describe("App.vue", () => {
  it("ボタンを押したときにカウントされることを確認する", () => {
    const wrapper = shallowMount(App, {
    })
    const span = wrapper.find("span")
    // console.log(span.text())
    expect(span.text()).equal("0")

    const button = wrapper.find("button")
    button.trigger("click")
    // console.log(span.text())
    expect(span.text()).equal("1")
  })
})

```

ボタンのクリックをシュミレートして、押下前、押下後の値を確認している。


# vue.config.js

Vueを外部化しているとエラーになる。  
本番とテストでパスを呼び分けるようにするといい。  
package.json→scriptsのbuild:dev, build:prod 参照。  

# 参考
https://vue-test-utils.vuejs.org/
