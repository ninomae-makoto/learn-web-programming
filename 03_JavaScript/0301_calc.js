
var result = null

console.log(`-- add -----------------`)
result = 1 + 1
console.log(`1+1 = ${result}`)

result = result + 1
console.log(`(1+1)+1 = ${result}`)

result = 1 + undefined
console.log(`1+undefined = ${result}`)

result = 1.2 + 1.1
console.log(`1.2+1.1 = ${result}`)

// 数値と文字列の加算
result = 1 + "1"
console.log(`1+"1" = ${result}`)

// 文字列を数値に変換して加算
result = 1 + Number("1")
console.log(`1+Number("1") = ${result}`)

console.log(`-- sub -----------------`)
result = 2 - 1
console.log(`2-1 = ${result}`)

result = 1.2 - 1.1
console.log(`1.2-1.1 = ${result}`)

result = 1 - undefined
console.log(`1-undefined = ${result}`)

result = 2 - "1"
console.log(`2-"1" = ${result}`)

console.log(`-- mul -----------------`)

result = 2 * 3
console.log(`2*3 = ${result}`)

result = 1.1 * 1.1
console.log(`1.1*1.1 = ${result}`)

result = 1 * undefined
console.log(`1*undefined = ${result}`)

result = 2 * "3"
console.log(`2*"3" = ${result}`)

console.log(`-- div -----------------`)

result = 2 / 6
console.log(`2/6 = ${result}`)

result = 1.1 / 1.1
console.log(`1.1/1.1 = ${result}`)

result = 1 / undefined
console.log(`1/undefined = ${result}`)

result = 2 / "6"
console.log(`2/"6" = ${result}`)

console.log(`-- 演算順序確認 -----------------`)

result = 1 / 2 * (3 + 4) - 5
console.log(`1 / 2 * (3 + 4) - 5" = `)
console.log(`0.5 * 7 - 5 = ${result}`)
