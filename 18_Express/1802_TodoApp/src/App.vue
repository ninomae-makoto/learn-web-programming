<template>
  <div id="app">
    <h1>Todo App</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <el-row>
          <el-col :span="18">
            <div class="todo_content">
              <span>{{ task.text }}</span>
            </div>
          </el-col>
          <el-col :span="6">
            <el-button @click="done(task.id)">Done</el-button>
            <el-button @click="remove(task.id)">Delete</el-button>
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
          }
        },
      })
    },

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
