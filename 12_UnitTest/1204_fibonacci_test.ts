import * as assert from "assert"
import { Fibonacci } from "./1204_fibonacci"

/**
 * 事前処理
 */
before((done) => {
  console.log("[describe]before 1204_fibonacci_test")
  done()
})

describe("フィボナッチ", () => {
  it("n=0", (done) => {

    assert.equal(Fibonacci.calc(0), 0)

    done()
  })
  it("n=1", (done) => {

    assert.equal(Fibonacci.calc(1), 1)

    done()
  })
})


/** テスト後の処理 */
after((done) => {
  console.log("[describe]after 1204_fibonacci_test")
  done()
})
