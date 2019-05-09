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
// import lang from "element-ui"
import ElementUI from "element-ui"
// import locale from "element-ui/lib/locale/lang/ja"
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
  components: {
    // HelloWorld,
  },
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
          //
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
