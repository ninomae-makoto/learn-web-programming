
var NUM = 100 + 1

console.log("")
console.log(`-- case1 -----------------`)
console.log(`素直な方法 おそらく一番見る`)

var start_ms = new Date().getTime()
for (var i = 1; i < NUM; i++) {
  if (i % 15 === 0) {
    console.log("fizzbuzz")
  } else if (i % 3 === 0) {
    console.log("fizz")
  } else if (i % 5 === 0) {
    console.log("buzz")
  } else {
    console.log(i);
  }
}

console.log("")
console.log(`-- case2 -----------------`)
console.log(`素直な方法2 ここまでは調べれば出てくる`)

start_ms = new Date().getTime()
for (var i = 1; i < NUM; i++) {
  var output = ""
  if (i % 3 === 0) {
    output += "fizz"
  }
  if (i % 5 === 0) {
    output += "buzz"
  }
  if (output === "") {
    output += i
  }
  console.log(output)

}

console.log("")
console.log(`-- case3 -----------------`)
console.log(`ルールを変数一つで表現しようというアプローチ`)
console.log(`ロジック上は最速候補で単純な計算だけならcase1の1/2倍、case2の1/30程度速い(出力処理が10000倍程度遅いので誤差の範囲)`)
console.log(`1~15で一巡するのであらかじめ決めうちしておく 個人的にお気に入り`)

start_ms = new Date().getTime()
var MAP = [
  "", "", "fizz", "", "buzz",
  "fizz", "", "", "fizz", "buzz",
  "", "fizz", "", "", "fizzbuzz",
]

for (var i = 1; i < NUM; i++) {
  var output = MAP[(i - 1) % 15]

  if (output === "") {
    output = i
  }
  console.log(output)

}

console.log("")
console.log(`-- case4 -----------------`)
console.log(`特に意味のない再帰と特に意味のないswitch 最遅の上NUMが多いと落ちる`)
console.log(`一応マルチスレッドにも対応できる利点がある 例えばconsole.logがファイルの非同期出力でも(少し書き換えれば)正しく出力できる`)

function fizzbuzz(n, end) {

  if (n === end) {
    return
  } else {
    var temp = n % 15
    switch (temp) {
      case 0:
        console.log("fizzbuzz")
        break;

      case 3:
      case 6:
      case 9:
      case 12:
        console.log("fizz")
        break;

      case 5:
      case 10:
        console.log("buzz")
        break;

      default:
        console.log(n);
        break;
    }
    fizzbuzz(n + 1, end)
  }

}
fizzbuzz(1, NUM)

