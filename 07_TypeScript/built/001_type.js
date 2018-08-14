"use strict";
// number
var num = 2;
// number = "error"
num += 3;
console.log(num);
// string
var text = "string";
// text = 3 // error
text += " add";
console.log(text);
// nullを代入することはできない
// text = null // error
// nullable
var nullableText = null;
nullableText = "nullable";
console.log(nullableText);
// boolean
var flag = true;
// flag = 1 // error
flag = false;
console.log(flag);
// literal
var type = "AType";
type = "BType";
// type = "DType" // error
console.log(type);
// ?がついているものを除く全てのプロパティを宣言時に定義しないとエラーになる
var apple = {
    name: "りんご",
    price: 200,
};
apple.name = "紅玉";
console.log(apple);
var orange = {
    name: "オレンジ",
    price: 200,
    discount: 100,
};
console.log(orange);
//# sourceMappingURL=001_type.js.map