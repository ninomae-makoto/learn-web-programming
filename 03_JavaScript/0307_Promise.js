

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


console.log("")
console.log(`-- 非同期順次処理 -----------------`)
/** 何かしらランダム時間のかかるI/O処理(非同期) */
function func2(arg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(arg)
      resolve()
    }, Math.random() * 10)
  })
}
// func2と全く同じ動きになる
async function func3(arg) {
  setTimeout(() => {
    console.log(arg)
  }, Math.random() * 10)
}


// func1と処理が混ざるので0.5秒後に実行
setTimeout(() => {

  Promise.resolve().then(async function () {
    for (let index = 0; index < 30; index++) {
      // 終了するまで待つ
      await func2(index)
    }
  })

}, 500)


setTimeout(() => {
  console.log("")
  console.log(`-- 同時実行処理 -----------------`)
  const promise1 = func3(101)
  const promise2 = func3(102)
  const promise3 = func3(103)

  Promise.all([promise1, promise2, promise3])

  // 上記とほぼ同じ処理
  Promise.resolve().then(async function () {
    for (let index = 0; index < 3; index++) {
      func2(index)
    }
  })
}, 1000)
