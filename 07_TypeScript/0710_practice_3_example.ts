{
  const source = ["d", "e", "s", "s", "e", "r", "t", "s"]
  console.log('source = ["d", "e", "s", "s", "e", "r", "t", "s"]')

  console.log("解答例1")
  let result = []
  for (let index = 0; index < source.length; index++) {
    const value = source[source.length - index - 1]
    result.push(value)
  }
  console.log(result)

  console.log("解答例2")
  result = source.slice()
  result.reverse()
  console.log(result)
}

