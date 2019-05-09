
# 確認

```
cd 18_Express/1802_TodoApp/
```

## ビルド

```
npm run build:prod
```

## サーバ起動

```
npm start
```

http://localhost:3000 へアクセス


# 開発手順

## 仕様を考える

- TODOの追加、変更、削除ができるようにする
- TODOはとりあえずテキストで保持するようにする

## モックアップを作成する

``` html
<template>
  <div id="app">
    <h1>Todo App</h1>
    <ul>
      <li v-for="datum in data" :key="datum.id">
        <el-row>
          <el-col :span="18">
            <div class="todo_content">
              <span>{{ datum.text }}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <el-button>Done</el-button>
            <el-button>Delete</el-button>
          </el-col>
          <hr>
        </el-row>
      </li>
    </ul>
    <el-button type="primary" icon="el-icon-edit" circle @click="addTask"></el-button>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

li span {
  padding: 10px;
}

li .el-button {
  padding: 6px 4px;
  width: 6rem;
}

.todo_content {
  text-align: left;
}
</style>
```

ざっくり以下のようになる。

![mock](./img/mock.png)

## ローカルで動作するように作り込む

## サーバ側を作り込む(保存機能を作成する)

## やってみる

- 現状アプリケーション一つでタスクを共用しているので分けられるようにする
- タスクに着手しているのがわかるようにしたい
- タスクを並べ替えたい

# 参考

https://vuejs.org/v2/examples/todomvc.html
