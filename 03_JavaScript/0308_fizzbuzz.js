
var NUM = 100 + 1

console.log("")
console.log(`-- case1 -----------------`)

for (var i = 1; i < NUM; i++) {
  if (i % 15 === 0) {
    console.log("fizzbuzz")
  } else if (i % 3 === 0) {
    console.log("fizz")
  } else if (i % 5 === 0) {
    console.log("buzz")
  } else {
    console.log(i);
  }
}

console.log("")
console.log(`-- case2 -----------------`)

for (var i = 1; i < NUM; i++) {
  var output = ""
  if (i % 3 === 0) {
    output += "fizz"
  }
  if (i % 5 === 0) {
    output += "buzz"
  }
  if (output === "") {
    output += i
  }
  console.log(output)

}

console.log("")
console.log(`-- case3 -----------------`)

var MAP = [
  "", "", "fizz", "", "buzz",
  "fizz", "", "", "fizz", "buzz",
  "", "fizz", "", "", "fizzbuzz",
]

for (var i = 1; i < NUM; i++) {
  var output = MAP[(i - 1) % 15]

  if (output === "") {
    output = i
  }
  console.log(output)

}

console.log("")
console.log(`-- case4 -----------------`)

function fizzbuzz(n, end) {

  if (n === end) {
    return
  } else {
    var temp = n % 15
    switch (temp) {
      case 0:
        console.log("fizzbuzz")
        break;

      case 3:
      case 6:
      case 9:
      case 12:
        console.log("fizz")
        break;

      case 5:
      case 10:
        console.log("buzz")
        break;

      default:
        console.log(n);
        break;
    }
    fizzbuzz(n + 1, end)
  }

}
fizzbuzz(1, NUM)

