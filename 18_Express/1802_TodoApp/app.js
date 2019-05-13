
var express = require("express")
var path = require("path");
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(express.static(path.join(__dirname, "/dist")));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.route('/task')
  // タスク一覧を取得する
  .get(function (req, res) {
    fs.readFile("data/task.tsv", 'utf8', function (err, data) {

      const tasks = []
      if (!err) {
        const list = data.split("\n")
        list.forEach((line) => {
          const task = line.split("\t")
          if (task.length === 3) {
            tasks.push({
              id: task[0],
              text: task[1],
              completed: task[2],
            })
          }
        })
      }

      res.send(tasks);
    });
  })
  // タスクを追加する
  .post(function (req, res) {
    // console.log(req.body);
    const task = req.body.src
    const data = task.id + "\t" + task.text + "\t" + task.completed + "\n"

    const directory = "data"
    fs.mkdir(directory, function (err) {
      fs.appendFile(directory + "/task.tsv", data, function (err) {
        if (err) {
          console.log(err);
        }
      });
    });

    res.send('Add task');
  })
  // タスクを更新する
  .put(function (req, res) {
    const updateTask = req.body.task

    const directory = "data"
    fs.appendFile(directory + "/done.tsv", `${updateTask.id}\t${updateTask.text}\t${updateTask.completed}\n`, function (err) {
      if (err) {
        console.log(err);
      }
    });

    fs.readFile(directory + "/task.tsv", 'utf8', function (err, readedData) {

      let tasks = ""
      if (!err) {
        const list = readedData.split("\n")
        list.forEach((line) => {
          const task = line.split("\t")
          if (task.length === 3 && task[0] !== updateTask.id) {
            tasks += line + "\n"
          }

        })
        fs.writeFile("data/task.tsv", tasks, function (err) {
          res.send("Deleted.");
        })
      }

    });
  })
  // タスクを削除する
  .delete(function (req, res) {
    const taskID = req.body.taskid
    fs.readFile("data/task.tsv", 'utf8', function (err, readedData) {

      let tasks = ""
      if (!err) {
        const list = readedData.split("\n")
        list.forEach((line) => {
          const task = line.split("\t")
          if (task.length === 3 && task[0] !== taskID) {
            tasks += line + "\n"
          }

        })
        fs.writeFile("data/task.tsv", tasks, function (err) {
          res.send("Deleted.");
        })
      }

    });
  })

// add routing
app.use(errorHandler)

function errorHandler(err, req, res, next) {
  res.status(500)
  res.render("error", { error: err })
}

app.listen(3000, "0.0.0.0", function () {
  console.log("server starting on %o", "http://localhost:" + 3000);
});

module.exports = app;
