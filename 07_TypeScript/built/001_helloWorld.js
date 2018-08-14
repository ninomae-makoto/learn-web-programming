"use strict";
// 関数
var func = function (message) {
    console.log("Hello " + message);
};
// String型の不変値
var message = "TypeScript";
func(message);
// error ↓
// message = 2
// func(1)
// func(message2)
// func2(message)
//# sourceMappingURL=001_helloWorld.js.map