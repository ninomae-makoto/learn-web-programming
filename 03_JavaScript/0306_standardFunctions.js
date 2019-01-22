
var result = null

console.log("")
console.log(`-- 文字列 -----------------`)

// 文字の個数を取得する。 厳密には関数ではない
console.log('"text".length: ' + "text".length)

// 指定した文字列で分割して配列で返す
console.log(`"1,2,3".split()[2]: ` + "1,2,3".split(",")[2])

// 指定した文字列と一致する位置を返す 文字列検索に使用する
console.log(`"indexOf".indexOf("ex"): ` + "indexOf".indexOf("ex"))
if ("search text".indexOf("search") !== -1) {
  console.log("match")
}

// 指定した正規表現と一致する位置を返す 文字列検索に使用する
console.log(`"1,2,3aklAS".search(/[A-Z]/): ` + "1,2,3aklAS".search(/[A-Z]/))
var isAlphanumeric = "123aX".search(/\W/) === -1
if (isAlphanumeric) {
  console.log("123aX は英数字のみ")
}
var isNotAlphanumeric = "123@aX".search(/\W/) !== -1
if (isNotAlphanumeric) {
  console.log("123@aX は英数字以外が含まれている")
}

// その他、test(),match),exec()などがある

// 前後の空白(文字コード上で空白となっているいくつかの文字)を削除する
console.log(`" space　".trim(): ` + "'" + " space　".trim() + "'")

// 文字列の切り出し
// n文字目から最後まで切り出し
var n = 6
console.log(`"slice test".slice(6): ` + "slice test".slice(n))
// n文字目からm文字目までを切り出し
var m = 9
console.log(`"slice test".slice(6, 9): ` + "slice test".slice(n, m))

// n文字目からl文字分切り出し
var l = 3
console.log(`"slice test".substr(6, 3): ` + "slice test".substr(n, l))

// 文字列の置き換え 最初の1文字しか置換えないので正規表現にしてgオプションをつける
console.log(`"1,2,3".replace(/,/g, "\t"): ` + "1,2,3".replace(/,/g, "\t"))
// ()内にマッチした値を$nで使用することもできる
console.log(`"replace test".replace(/(re.*ce )(test)/, "○$1○$2"): `
  + "replace test".replace(/(re.*ce )(test)/, "○$1○$2"))


// 大文字に変換
console.log(`"1,2,3abCDあ".toUpperCase(): ` + "1,2,3abCDあ".toUpperCase())

// 小文字に変換
console.log(`"1,2,3abCDあ".toLowerCase(): ` + "1,2,3abCDあ".toLowerCase())




console.log("")
console.log(`-- 配列 -----------------`)
var array = [1, 2, 3, 4, 5]

// 配列のサイズを確認する
console.log("array.length: " + array.length)

// 配列の末尾へ追加する
array.push(6)
console.log("array.push(6)")
console.log("array: " + array)

// 配列の末尾から取り出す
var result = array.pop()
console.log("array.pop(): " + result)
console.log("array: " + array)

// 配列の先頭へ追加する
array.unshift(0)
console.log("array.unshift(0)")
console.log("array: " + array)

// 配列の先頭から取り出す
result = array.shift()
console.log("array.shift()")
console.log("array: " + array)

// 配列を結合する
console.log('array.join("-"): ' + array.join("-"))

array = ["apple", "orange", "grape"]
console.log("array: " + array)

// 要素の検索
console.log('array.indexOf("orange"): ' + array.indexOf("orange"))

// 位置を指定して配列から取り除く
// 上記indexOfと併用して任意の要素を取り除くことができる
array.splice(array.indexOf("orange"), 1)
console.log('array.splice(array.indexOf("orange"), 1)')
console.log("array: " + array)

// 配列のコピー array.concat()でも可能
var copyArray = array.slice()
array = null
console.log('copyArray = array.splice()')
console.log('array = null')
console.log("array: " + array)
console.log("copyArray: " + copyArray)

console.log("")
console.log(`-- Math -----------------`)

// 0~1までのランダムな値を取得する
console.log("Math.random(): " + Math.random())
console.log("Math.random(): " + Math.random())
console.log("Math.random(): " + Math.random())

// 絶対値を取得する
console.log("Math.abs(-4): " + Math.abs(-4))
console.log("Math.abs(4): " + Math.abs(4))

// 最小値を取得する
console.log("Math.min(-3, 3, 4, 1): " + Math.max(-3, 3, 4, 1))

// 最大値を取得する
console.log("Math.max(-5, 3, 4, 1): " + Math.max(-5, 3, 4, 1))

// 小数点以下切上げ
console.log("Math.ceil(-4.4): " + Math.ceil(-4.4))
console.log("Math.ceil(4.4): " + Math.ceil(4.4))

// 小数点以下切り捨て
console.log("Math.floor(-4.4): " + Math.floor(-4.4))
console.log("Math.floor(4.4): " + Math.floor(4.4))

// 四捨五入
console.log("Math.round(4.4): " + Math.round(4.4))
console.log("Math.round(4.5): " + Math.round(4.5))
console.log("Math.round(-4.5): " + Math.round(-4.5))
console.log("Math.round(4.05): " + Math.round(4.05))

console.log("")
console.log(`-- JSON -----------------`)

// object → json string
console.log('JSON.stringify({ id: 0, name: "test" }: ' +
  JSON.stringify({ id: 0, name: "test" }))

// json string → object
console.log(`JSON.parse('{"id":0,"name":"test"}').name): ` +
  JSON.parse('{"id":0,"name":"test"}').name)


console.log("")
console.log(`-- Date -----------------`)

// 現在時刻を取得 実行環境に依存する
console.log("new Date():: " + new Date())

// 日付、時刻を指定してDateを取得 超過した場合は自動で繰り上げられる
console.log("new Date(2020, 01, 02, 03, 04, 65): " + new Date(2020, 01, 02, 03, 04, 65))

// UTC の 1970 年 1 月 1 日 00:00:00 から経過したミリ秒数を返す
console.log("Date.now(): " + Date.now())

// 年を取得
console.log("new Date().getFullYear(): " + new Date().getFullYear())

// 月を取得 0~11
console.log("new Date().getMonth(): " + new Date().getMonth())

// 日を取得
console.log("new Date().getDate(): " + new Date().getDate())

// 時を取得
console.log("new Date().getHours(): " + new Date().getHours())

// 分を取得
console.log("new Date().getMinutes(): " + new Date().getMinutes())

// 秒を取得
console.log("new Date().getSeconds(): " + new Date().getSeconds())


// 年を設定 setXXXXは超過及びマイナス分は補正されて設定される
var date = new Date()
date.setFullYear(2020)
console.log("date.setFullYear(2020): " + date)

// 月を設定 0~11
date.setMonth(1)
console.log("date.setMonth(1): " + date)

// 日を取得
date.setDate(31)
console.log("date.setDate(31): " + date)

// 時を取得
date.setHours(-5)
console.log("date.setHours(-5): " + date)

// 分を取得
date.setMinutes(37)
console.log("date.setMinutes(37): " + date)

// 秒を取得
date.setSeconds(13)
console.log("date.setSeconds(13): " + date)

console.log("")
console.log(`-- Number -----------------`)

// 数値へ変換する
console.log('Number("1234"): ' + Number("1234"))
console.log('Number("1234.56"): ' + Number("1234.56"))
console.log('Number("asdf"): ' + Number("asdf"))

// 最大値
console.log("Number.MAX_VALUE: " + Number.MAX_VALUE)
// 最小値
console.log("Number.MIN_VALUE: " + Number.MIN_VALUE)
// 整数で表現できる最大値
console.log("Number.MAX_SAFE_INTEGER: " + Number.MAX_SAFE_INTEGER)
// 整数で表現できる最小値
console.log("Number.MIN_SAFE_INTEGER: " + Number.MIN_SAFE_INTEGER)


console.log("")
console.log(`-- 組み込み関数 -----------------`)

// 数値が有限数か調べる 数値以外、NaN、正の無限大、負の無限大 のときfalse を返す。
console.log("isFinite(12): " + isFinite(12))
console.log("isFinite('12'): " + isFinite("12"))
console.log("isFinite(null): " + isFinite(null))
console.log("isFinite('12s'): " + isFinite("12s"))
console.log("isFinite(1 / 0): " + isFinite(1 / 0))

// 文字列から浮動小数点数を返す
console.log('parseFloat("4"): ' + parseFloat("4"))
console.log('parseFloat("4.25"): ' + parseFloat("4.25"))
console.log('parseFloat("5@"): ' + parseFloat("5@"))
console.log('parseFloat("h4fg"): ' + parseFloat("h4fg"))

// 文字列から整数を返す
console.log('parseInt("4"): ' + parseInt("4"))
console.log('parseInt("4.25"): ' + parseInt("4.25"))
console.log('parseInt("5@"): ' + parseInt("5@"))
console.log('parseInt("h4fg"): ' + parseInt("h4fg"))


// アルファベット、10進数字、- _ . ! ~ * ' ( ) を除くすべての文字をエスケープする
// 例えばURIのパラメータ部に限定して使用する
console.log(`"http://example.com?test=" + encodeURIComponent("テスト"): ` +
  "http://example.com?test=" + encodeURIComponent("テスト"))

// encodeURIComponentによってエスケープされた文字を元に戻す。
console.log(`decodeURIComponent("%E3%83%86%E3%82%B9%E3%83%88"): ` +
  decodeURIComponent("%E3%83%86%E3%82%B9%E3%83%88"))

// (アルファベット、10進数字、- _ . ! ~ * ' ( ) に加えURIで特別な意味を持つ文字) を除くすべての文字をエスケープする
// URL全体を引数に使用することができるが想定通りに行かないケースもある
console.log(`encodeURI("http://example.com?test=テスト"): ` +
  encodeURI("http://example.com?test=テスト"))

// 以下はおそらく想定外
console.log(`encodeURI("http://example.com?test=テスト?"): ` +
  encodeURI("http://example.com?test=テスト?"))

// encodeURIによってエスケープされた文字を元に戻す。
console.log(`decodeURI("http://example.com?test=%E3%83%86%E3%82%B9%E3%83%88"): ` +
  decodeURI("http://example.com?test=%E3%83%86%E3%82%B9%E3%83%88"))
