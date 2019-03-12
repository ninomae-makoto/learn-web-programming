import * as assert from "assert"
import { Fibonacci } from "./1207_fibonacci"

/**
 * 事前処理
 */
before((done) => {
  console.log("[describe]before 1207_fibonacci_test")
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
  it("n=2", (done) => {
    assert.equal(Fibonacci.calc(2), 1)
    done()
  })
  it("n=3", (done) => {
    assert.equal(Fibonacci.calc(3), 2)
    done()
  })
  it("n=4", (done) => {
    assert.equal(Fibonacci.calc(4), 3)
    done()
  })
  it("n=30", (done) => {
    assert.equal(Fibonacci.calc(30), 832040)
    done()
  })
})


/** テスト後の処理 */
after((done) => {
  console.log("[describe]after 1207_fibonacci_test")
  done()
})
