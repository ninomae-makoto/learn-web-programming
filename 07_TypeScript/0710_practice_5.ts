
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

}

