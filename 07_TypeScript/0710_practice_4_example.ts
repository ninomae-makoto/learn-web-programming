
{
  // 最初に小さい単位から実装するとスムースに進む
  // const temp = []
  // for (let i = 0; i < 11; i++) {
  //   temp.push(i)
  // }
  // const result = []
  // for (let i = 0; i < 10; i++) {
  //   const index = Math.floor(Math.random() * (11 - i))
  //   // console.log(index)
  //   result.push(temp[index])
  //   console.log(temp[index])
  //   console.log(temp.splice(index, 1))
  // }

  // console.log(result)


  const temp = []
  for (let i = 0; i < 101; i++) {
    temp.push(i)
  }
  const result = []
  for (let i = 0; i < 100; i++) {
    const index = Math.floor(Math.random() * (101 - i))
    result.push(temp[index])
    temp.splice(index, 1)
  }
  console.log(result)

}

