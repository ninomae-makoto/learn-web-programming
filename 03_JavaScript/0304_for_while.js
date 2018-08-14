
var result = null

console.log("")
console.log(`-- 10回繰り返す -----------------`)
let sum = 0
for (let i = 0; i < 10; i++) {
  sum += i
}
console.log(sum)

console.log("")
console.log(`-- 10回繰り返す(for文を使用しない場合) -----------------`)
sum = 0
sum += 0
sum += 1
sum += 2
sum += 3
sum += 4
sum += 5
sum += 6
sum += 7
sum += 8
sum += 9
console.log(sum)

console.log("")
console.log(`-- 配列を走査する -----------------`)
var array = ["Hello", "for", "and", "while"]
array.forEach(element => {
  console.log(element)
});

console.log("")
console.log(`-- ループ処理を飛ばす 途中で終了する -----------------`)
array = [0, 1, 2, null, 4, 5, "end", 7]

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // nullだったら飛ばす
  if (element === null) {
    continue
  }
  // "end"だったら終了する
  if (element === "end") {
    break
  }
  console.log(element)
}

console.log("")
console.log(`-- while -----------------`)
array = [1, 2, 3, 4, 5]

var result = 1
var value
while ((value = array.shift())) {
  result *= value
  console.log(value)

}
console.log("while loop: " + result)
