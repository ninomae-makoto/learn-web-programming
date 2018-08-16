
var result = null

console.log("")
console.log(`-- hello関数 -----------------`)
// 関数定義
function hello() {
  console.log("Hello Method")
}

// 関数呼び出し
hello()
// 一度定義した鑵子は何度でも呼び出すことができる
hello()

// 関数は変数に入れることもできる。
var hello2 = function hello2() {
  console.log("Hello Method2")
}
hello2()

console.log("")
console.log(`-- 足し算をする関数 -----------------`)
function add(arg1, arg2) {
  return arg1 + arg2
}

// 戻り値がある場合変数で受け取ることができる
result = add(1, 2)
console.log("result = add(1, 2): " + result)

// 戻り値を直接使うこともできる
console.log("add(1, 2): " + add(1, 2))

console.log("")
console.log(`-- 引数に関数を渡す -----------------`)
// 呼び出し元から操作を指定したいときなど
function sum(array, onRunning) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    // onRunnning関数が渡されていたら実行
    if (onRunning) {
      onRunning(sum)
    }
  }
  return sum
}

console.log("関数を渡さない")
result = sum([1, 2, 3, 4, 5])
console.log("result: " + result);

console.log("関数を渡す")
result = sum([1, 2, 3, 4, 5],
  function (sum) {
    console.log(sum)
  })
console.log("result: " + result);


console.log("")
console.log(`-- 再帰関数 -----------------`)
// 関数は自信を呼び出すこともできる 以下は階乗計算
function factorial(n) {
  var result = 0;
  if (n > 0) {
    result = n * factorial(n - 1);
  } else {
    result = 1; // 0! = 1
  }
  return result;
}
// 6! = 6 * 5 * 4 * 3 * 2 * 1
console.log("6の階乗: " + factorial(6));

