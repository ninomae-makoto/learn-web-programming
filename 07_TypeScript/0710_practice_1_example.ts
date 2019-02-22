{
  const NUM = Math.floor(Math.random() * 100)
  console.log("NUM= " + NUM)

  // 0 + 1 + 2... NUM
  console.log("解答例1")
  let total = 0
  for (let i = 0; i < NUM + 1; i++) {
    total += i
  }
  console.log(total)

  console.log("解答例2")
  total = (NUM + 1) * NUM * 0.5
  console.log(total)
}
