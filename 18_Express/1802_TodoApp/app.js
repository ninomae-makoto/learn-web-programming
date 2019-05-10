
var express = require("express")
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "/dist")));

app.route('/task')
  // タスク一覧を取得する
  .get(function (req, res) {
    // TODO
    res.send('Get tasks');
  })
  // タスクを追加する
  .post(function (req, res) {
    // TODO
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
