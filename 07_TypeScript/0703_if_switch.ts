{
  // let result = null

  console.log("")
  console.log(`-- 数値による条件分岐 -----------------`)
  let array = [1, 2, 3]
  if (array.length === 3) {
    console.log("arrayのサイズは3")
  }
  if (array.length !== 0) {
    console.log("arrayのサイズは0ではない")
  }
  if (array.length > 0) {
    console.log("arrayのサイズは0より大きい")
  }
  if (array.length <= 3) {
    console.log("arrayのサイズは3以下")
  }

  console.log("")
  console.log(`-- 文字列による条件分岐 -----------------`)
  const text = "Hello if and switch"
  if (text === "Hello if and switch") {
    console.log("文字列の完全一致")
  }

  if (text.indexOf("Hello") !== -1) {
    console.log("文字列が含まれているか検証するときに使う")
  }

  console.log("")
  console.log(`-- 空を判定する -----------------`)
  const undefValue = undefined
  if (undefValue) {
    console.log("not called")
  }

  if (0) {
    console.log("not called")
  }

  if (null) {
    console.log("not called")
  }

  if ("") {
    console.log("not called")
  }

  if (0 / 1) {
    console.log("not called")
  }

  console.log("")
  console.log(`-- if else -----------------`)
  array = []
  if (array.length === 0) {
    // nop
  } else {
    console.log("条件に合わない場合呼ばれる")
  }

  console.log("")
  console.log(`-- switch -----------------`)
  const MAIN = 0
  const SUB1 = 1
  const SUB2 = 2

  const scene: number = MAIN
  switch (scene) {
    case MAIN:
      console.log("MAINのシーン")
      break
    case SUB1:
      console.log("SUB1のシーン")
      break
    case SUB2:
      console.log("SUB2のシーン")
      break

    default:
      console.log("未定義のシーン")
      break
  }
}
