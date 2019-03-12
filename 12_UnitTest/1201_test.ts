import * as assert from "assert"
import { UT1201 } from "./1201"

/**
 * 事前処理
 */
before((done) => {
  console.log("Hello UnitTest")
  console.log("[describe]before 1201_test")
  done()
})

describe("UT1201", () => {
  it("加算", (done) => {

    assert.equal(UT1201.sum(1, 2), 3)
    assert.equal(UT1201.sum(13, 21), 34)

    // TypeScriptなら数値以外の引数の考慮は不要
    // 文字列を許可するかどうかは仕様による
    // assert.equal(UT1201.sum("13", 21), 34)
    // assert.equal(UT1201.sum("abc", 21), 34)

    done()
  })
  it("差", (done) => {

    assert.equal(UT1201.diff(10, 2), 8)
    assert.equal(UT1201.diff(10.25, 5.25), 5)

    done()
  })
  it("差(誤差確認)", (done) => {

    // 誤差が出るので一致しない
    assert.notEqual(UT1201.diff(10.7, 10.1), 0.6)
    console.log(UT1201.diff(10.7, 10.1))

    done()
  })
  it("除算", (done) => {

    assert.equal(UT1201.div(1, 2), 0.5)
    assert.equal(UT1201.div(289, 17), 17)

    done()
  })
  it("合計", (done) => {

    assert.equal(UT1201.total([1, 2, 3, 4, 5]), 15)
    // 空配列で問題ないかチェック
    assert.equal(UT1201.total([]), 0)
    // TypeScriptならundefinedチェックは不要（例外あり）
    // let array: number[]
    // assert.equal(UT1201.total(array), 15)

    done()
  })
})


/** テスト後の処理 */
after((done) => {
  console.log("[describe]after 1201_test")
  done()
})
