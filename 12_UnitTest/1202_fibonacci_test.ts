import * as assert from "assert"

/**
 * 事前処理
 */
before((done) => {
  console.log("[describe]before 1202_fibonacci_test")
  done()
})

describe("フィボナッチ", () => {
  it("n=0", (done) => {

    assert.equal(Fibonacci.calc(0), 0)

    done()
  })
})


/** テスト後の処理 */
after((done) => {
  console.log("[describe]after 1202_fibonacci_test")
  done()
})
