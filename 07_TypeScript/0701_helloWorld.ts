{


  // 関数
  const func = (message: string) => {
    console.log(`Hello ${message}`)
  }

  // String型の不変値
  const test: string = "TypeScript"

  func(test)

  // error ↓
  // message = 2
  // func(1)
  // func(text2)
  // func2(text)

  // 0301_calc.js との比較 ------------------
  let result: number

  // 変数は値を割り当てる前に使用することはできない
  // console.log(`${result}`)

  console.log(`-- add -----------------`)
  result = 1 + 1
  console.log(`1+1 = ${result}`)

  result = result + 1
  console.log(`(1+1)+1 = ${result}`)

  // result = 1 + undefined
  // console.log(`1+undefined = ${result}`)

  result = 1.2 + 1.1
  console.log(`1.2+1.1 = ${result}`)

  // 数値と文字列の演算はできない
  // result = 1 + "1"
  // console.log(`1+"1" = ${result}`)

  // 文字列を数値に変換して加算
  result = 1 + Number("1")
  console.log(`1+Number("1") = ${result}`)

  console.log(`-- sub -----------------`)
  result = 2 - 1
  console.log(`2-1 = ${result}`)

  result = 1.2 - 1.1
  console.log(`1.2-1.1 = ${result}`)

  // 数値とundefinedの演算はできない
  // result = 1 - undefined
  // console.log(`1-undefined = ${result}`)

  // 数値と文字列の演算はできない
  // result = 2 - "1"
  // console.log(`2-"1" = ${result}`)

  console.log(`-- mul -----------------`)

  result = 2 * 3
  console.log(`2*3 = ${result}`)

  result = 1.1 * 1.1
  console.log(`1.1*1.1 = ${result}`)

  // 数値とundefinedの演算はできない
  // result = 1 * undefined
  // console.log(`1*undefined = ${result}`)

  // 数値と文字列の演算はできない
  // result = 2 * "3"
  // console.log(`2*"3" = ${result}`)

  console.log(`-- div -----------------`)

  result = 2 / 6
  console.log(`2/6 = ${result}`)

  result = 1.1 / 1.1
  console.log(`1.1/1.1 = ${result}`)

  // 数値とundefinedの演算はできない
  // result = 1 / undefined
  // console.log(`1/undefined = ${result}`)

  // 数値と文字列の演算はできない
  // result = 2 / "6"
  // console.log(`2/"6" = ${result}`)

  console.log(`-- 演算順序確認 -----------------`)

  result = 1 / 2 * (3 + 4) - 5
  console.log(`1 / 2 * (3 + 4) - 5" = `)
  console.log(`0.5 * 7 - 5 = ${result}`)

}
