
var express = require("express")
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "/dist")));

app.use("/api", (req, res, next) => {
  res.send("test")
})

app.listen(3000, "0.0.0.0", function () {
  console.log("server starting on %o", "http://localhost:" + 3000);
});

module.exports = app;
