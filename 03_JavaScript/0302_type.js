
var result = null

console.log("")
console.log(`-- Number -----------------`)
console.log(`0 = ${typeof(0)}`)
console.log(`0.01 = ${typeof(0.01)}`)
console.log(`0xab = ${typeof(0xab)}`)
console.log(`3.14e2 = ${typeof(3.14e2)}`)
console.log(`NaN = ${typeof(1/0)}`)


console.log("")
console.log(`-- String -----------------`)
console.log(`"text" = ${typeof("text")}`)
console.log(`"0" = ${typeof("0")}`)
console.log(`0+"1" = ${typeof(0+"1")}`)


console.log("")
console.log(`-- Boolean -----------------`)
console.log(`true = ${typeof(true)}`)
console.log(`false = ${typeof(false)}`)
console.log(`1 === 1 = ${typeof(1 === 1)}`)


console.log("")
console.log(`-- Undefined -----------------`)
console.log(`undefined = ${typeof(undefined)}`)
var undefValue
console.log(`undefValue = ${typeof(undefValue)}`)


console.log("")
console.log(`-- Object -----------------`)
var obj = {
    num: 1,
    text: "test",
    bool: false,
}
console.log(`obj = ${typeof(obj)}`)
console.log(`obj.num = ${(obj.num)}`)
console.log(`obj.text = ${(obj.text)}`)
console.log(`obj.bool = ${(obj.bool)}`)
console.log(`obj["num"] = ${(obj["num"])}`)


console.log("")
console.log(`-- Array -----------------`)
var array = ["one", "two", "three"]
console.log(`array = ${typeof(array)}`)
console.log(`array[0] = ${typeof(array[0])}`)
console.log(`array[1] = ${typeof(array[1])}`)
console.log(`array[2] = ${typeof(array[2])}`)
console.log(`array[3] = ${typeof(array[3])}`)
