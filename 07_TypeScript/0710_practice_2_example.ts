{
  const source = [1, 2, 3, 5, 8, 13, 21]
  console.log("source = [1, 2, 3, 5, 8, 13, 21]")

  console.log("解答例1")
  let total = 0
  source.forEach((num) => {
    total += num
  })
  console.log(total)

  console.log("解答例2")
  total = source.reduce((l, r) => {
    return l + r
  })
  console.log(total)
}

