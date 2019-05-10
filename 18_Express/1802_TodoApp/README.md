
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

<script lang="ts">
import Vue from "vue"
interface DataModel {
  /** 全体で一意 */
  id: number,
  text: string,
  /** false:未完了 true:完了 */
  completed: boolean,
}
export default Vue.extend({
  name: "app",
  data() {
    return {
      data: [
        { id: 0, text: "example1", completed: false },
        { id: 1, text: "example2", completed: false },
        { id: 2, text: "example3", completed: false },
      ] as DataModel[],
    }
  },
  methods: {
    addTask() {
      this.$prompt("タスクの追加", {
        callback: (action) => {
          // TODO:タスク追加処理
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


### TODOを追加する

``` ts

export default Vue.extend({
// ...
  data() {
    return {
      tasks: [
      ] as DataModel[],

      maxID: 0,
    }
  },
  methods: {
    addTask() {
      this.$prompt("タスクの追加", {
        callback: (action, instance) => {
          if (action === "confirm" && instance.inputValue) {
            this.tasks.push({
              id: this.maxID,
              text: instance.inputValue,
              completed: false,
            })
            this.maxID++
        },
      })
    },
  },
})
```

dataをtasksにリネーム。 　
プロンプト画面の戻り値を元にタスクへ追加。 　
固定で指定していたdataの中身は削除する。 　

### Todoを削除、完了できるようにする

``` html
<el-button @click="done(task.id)">Done</el-button>
<el-button @click="remove(task.id)">Delete</el-button>
```

``` ts
done(taskID: number) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].id === taskID) {
      this.tasks.splice(i, 1)
    }
  }
},
remove(taskID: number) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].id === taskID) {
      this.tasks.splice(i, 1)
    }
  }
},
```


## サーバ側を作り込む(保存機能を作成する)

### 仕様

- タスクはテキストで管理する
- 追加したタイミングでテキストに保存する
- 削除したタイミングでテキストから削除する
- 完了した場合別途完了ずみのテキストファイルへ移動する

## やってみる

- タスクに着手しているのがわかるようにしたい
- タスクを並べ替えたい
- テキストに保存しているタスクをDBに保存するようにする
- 現状アプリケーション一つでタスクを共用しているので分けられるようにする

# 参考

https://vuejs.org/v2/examples/todomvc.html
