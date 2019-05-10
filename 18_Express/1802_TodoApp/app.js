
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
    // TODO
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
    // TODO
    res.send('Update task');
  })
  // タスクを削除する
  .delete(function (req, res) {
    // TODO
    res.send('Delete task');
  })


app.listen(3000, "0.0.0.0", function () {
  console.log("server starting on %o", "http://localhost:" + 3000);
});

module.exports = app;
