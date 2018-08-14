// 関数
const func = (message: string) => {
    console.log(`Hello ${message}`)
}

// String型の不変値
const test = "TypeScript"

func(test)

// error ↓
// message = 2
// func(1)
// func(text2)
// func2(text)
