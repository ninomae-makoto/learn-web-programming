
{
  const temp = []
  for (let i = 0; i < 101; i++) {
    temp.push(i)
  }
  const src = []
  for (let i = 0; i < 100; i++) {
    const index = Math.floor(Math.random() * (101 - i))
    src.push(temp[index])
    temp.splice(index, 1)
  }
  console.log(src)

  // search excluded number from src
  // 5050 = 0 + 1 + 2 + ... + 100
  const excludedNo = 5050 - src.reduce((l, r) => {
    return l + r
  })
  console.log(excludedNo)

  // 検証用コード 詳細はUnitTestで解説
  if (src.indexOf(excludedNo) !== -1) {
    // 配列内に一致する値があったら間違い
    console.log("\u001b[31m" + "error" + "\u001b[0m")
  }

}

