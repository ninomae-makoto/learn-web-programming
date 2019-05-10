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
import axios from "axios"
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
  mounted() {
    axios({
      method: "get",
      url: "/task",
    }).then((response) => {
      response.data.forEach((datum: DataModel) => {
        this.tasks.push(datum)
      })
      this.maxID = this.tasks[this.tasks.length - 1].id + 1
    })
  },
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
            const task = {
              id: this.maxID,
              text: instance.inputValue,
              completed: false,
            }
            this.tasks.push(task)
            this.maxID++

            axios({
              method: "post",
              url: "/task",
              headers: {
                "Content-Type": "application/json",
              },
              data: {
                src: task,
              },
            }).then((response) => {
              console.log(response.data)
            })
          }
        },
      })
    },

    done(taskID: number) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === taskID) {
          this.tasks.splice(i, 1)
          axios({
            method: "put",
            url: "/task",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              src: {},
            },
          }).then((response) => {
            console.log(response.data)
          })
          break
        }
      }
    },
    remove(taskID: number) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === taskID) {
          this.tasks.splice(i, 1)
          axios({
            method: "delete",
            url: "/task",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              src: {},
            },
          }).then((response) => {
            console.log(response.data)
          })
          break
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
