

console.log("")
console.log(`-- 非同期制御を行わない -----------------`)

/** 何かしらランダム時間のかかるI/O処理(非同期) */
function func1(arg) {
  setTimeout(() => {
    console.log(arg)
  }, Math.random() * 100)
}

for (let index = 0; index < 30; index++) {
  func1(index)
}

// 混ざるので0.5秒後に実行
setTimeout(() => {

  console.log("")
  console.log(`-- Promise -----------------`)

  /** 何かしらランダム時間のかかるI/O処理(非同期) */
  async function func2(arg) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(arg)
        resolve()
      }, Math.random() * 10)
    })
  }

  Promise.resolve().then(async function () {
    for (let index = 0; index < 30; index++) {
      await func2(index)
    }
  })

}, 500)
