{
  // 未定義の変数は使用することができない
  // console.log(aaaaaaa)

  // varは使用できない。未使用の変数はエラー
  // var test = 0

  // == は使用できない
  // const test1 = 10
  // const test2 = "10"
  // if (test1 == test2) {
  //   console.log("error")
  // }

  // 配列の末尾は,をつけないとエラー
  const arr = [
    0,
    1,
    2,
    // 3
  ]

  // null を代入しようとするとエラー
  let num = 0
  num = 1
  // num = null

  // nullable型
  let num2: number | null = 0
  num2 = null

  interface Item {
    id: number,
    name: string,
    price?: number,
  }

  const apple: Item = { id: 0, name: "りんご" }
  // error
  // const orange: Item = { name: "オレンジ", price: 100 }

  // 以下の形式はエラー
  // const func = function () {
  //   //
  // }
  // 以下のようにする
  const func2 = () => {
    //
  }
}
