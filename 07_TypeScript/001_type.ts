// number
let num: number = 2
// number = "error"
num += 3
console.log(num)

// ---- string ----
let text: string = "string"
// text = 3 // error
text += " add"
console.log(text)
// nullを代入することはできない
// text = null // error

// ---- nullable ----
let nullableText: string | null = null
nullableText = "nullable"
console.log(nullableText)


// ---- boolean ----
let flag = true
// flag = 1 // error
flag = false
console.log(flag)

// ---- literal ----
let type: "AType" | "BType" | "CType" = "AType"
type = "BType"
// type = "DType" // error
console.log(type)

// ---- interface ----
// 商品
interface Item {
  /** 名前 */
  name: string
  /** 値段 */
  price: number
  /** 割引額 値を持たないケースあり */
  discount?: number
}

// ?がついているものを除く全てのプロパティを宣言時に定義しないとエラーになる
const apple: Item = {
  name: "りんご",
  price: 200,
}
// 配列及び連想配列はconstにしていても変更できてしまう。取り扱い注意。
apple.name = "紅玉"
console.log(apple)

const orange: Item = {
  name: "オレンジ",
  price: 200,
  discount: 100,
}
console.log(orange)

// ---- array ----
const array: Item[] = [apple, orange]
array.push({
  name: "ぶどう",
  price: 500,
})
console.log(array)

// ---- 連想配列 ----
const associativeSrray: { [key: string]: Item } = {
  apple: apple,
  orange: orange,
}
console.log(associativeSrray["apple"])

// ---- function ----
// number型のvalue1,2を引数にnumber型を返す関数の型
const add: (value1: number, value2: number) => number =
  (value1: number, value2: number): number => {
    return value1 + value2
  }
console.log(add(4, 5))

// 単純化すると以下
const add2 = (value1: number, value2: number) => {
  return value1 + value2
}


