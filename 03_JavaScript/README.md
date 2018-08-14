
情報源が多いので重要な部分だけさらっと。
開発時はTypeScriptを利用するため深淵には触れない。
詳細は05_VisualStudioCodeで触れるが、jsファイルを開いてF5キーでデバッグ実行及び挙動の確認が可能。

# Hello World

ターミナル上で以下のコマンド

```
node -e "console.log('Hello JavaScript!!')"
```

# 0301_calc
JavaScriptの演算の癖について知る

```
node 03_JavaScript/0301_calc.js
```

## 加算について

計算処理にnull, undefinedが入っている場合NaNになる。不正な値が入る可能性がある場合は事前にチェックする。
計算処理に小数点が入ってきた場合正確な結果にならない場合がある。その時は結果の補正が必要。
数字と文字列の計算は文字列の結合になる。望んだ動きでない場合は文字列を数値へと変換する必要がある。また文字列が数値かどうかのチェックも必要になる。)

## 減算について

加算と違い文字列が含まれていた場合でも数値に自動変換されて計算する。

## 乗算について

乗算では小数点以下の計算に不整合が出やすいので注意が必要。

## 除算について

除算では小数点以下の計算に不整合が出やすいので注意が必要。

## 演算の優先順序について

他の言語とだいたい同じ

上から優先度が高い
1. ()
1. !
1. **
1. \*
1. /
1. %
1. \+
1. \-
1. \<\<
1. \>\>
1. == != === !==
1. &&
1. ||

%は除算した時のあまり
** はべき乗
\<\<, \>\> はビットシフト演算

覚えるのが面倒ならとりあえずカッコでくくっておく。

# 0302_type
JavaScriptの型について知る。

## Number
少数を含む数値。
10の累乗を示すのにenが使えたり16進数を表すのに0xnnnnが使用できる。
NanもNumber型になる。

## String型
文字列を値に持つ。

## Boolean
true/false

## Undefined
宣言して未定義の変数などはこの値になる。

## null
null値を示す。
明示的に代入しない限りおそらく入ってこない。

## Symbol型
ECMA2015より
詳細割愛

## Object型
上記以外はObject型になる。
≒ 連想配列と捉えても問題ないか。

## 配列
分類上はObject型
0以上の複数の値を持つリスト構造になっている。
添字は0から始まる。


```
node 03_JavaScript/0302_type.js
```

# 0303_if_switch
条件分岐について
指定した条件に一致する場合のみ処理をおこなう。
条件式に==は使用しない


false, undefined, null, "", 0, Nan
は全てfalseと判断される。
存在チェックに使用できるが数値型には注意すること(数値型の存在チェックに利用すると0が入った時に想定外の挙動をする)

```
node 03_JavaScript/0303_if_switch.js
```

# 0304_for_while
ループ構文について
繰り返し処理を実行する。

```
node 03_JavaScript/0304_for_while.js
```

# 0305_function
関数について
名前のつけられる一連の処理
複数回呼ばれるルーチン処理
入力を与えると出力を返すもの
y = f(x)

0以上の引数と0~1つの戻り値を持つ。

```
node 03_JavaScript/0305_function.js
```

## やってみる
- 書き換えてみる
- 掛け算する関数を作ってみる
- 再帰関数を使用してフィボナッチ数列を表示してみる

# 0306_standirdFunctions
よく使う標準関数を一部抜粋。
非標準のもの、対応していないブラウザがある場合は便利でも使用しない(trimLeftなど)


```
node 03_JavaScript/0306_standirdFunctions.js
```

## 文字列

``` ts
String.split(arg) // 指定した文字で分割
String.indexOf(arg) // 指定した文字が見つかる位置を返す
String.search(arg) // 指定した正規表現が見つかる位置を返す
String.trim(arg) // 前後の空白を削除する
String.slice(arg) // 文字列を切り出す
String.toUpperCase(arg) // 大文字にして返す
String.toLowerCase(arg) // 小文字にして返す

```

## 配列

``` ts
Array.push(arg) // 末尾へ追加
Array.pop() // 末尾から取り出す
Array.unshift(arg) // 先頭へ追加
Array.shift() // 先頭から取り出す
Array.join(arg) // 配列を結合して一つの文字列にする
Array.indexOf(arg) // 要素の検索
Array.splice(arg) // 位置を指定して配列から取り除く
Array.slice() // 配列にコピー

```

そのほかforEach,some,filter など配列の要素を走査して処理を実行する関数がある。詳細は割愛。

## その他

### Math
数学系のライブラリ
精度はOSやブラウザによって異なるので注意が必要。

### JSON
文字列をJSON形式のオブジェクトに変換する。
オブジェクトをJSON形式の文字列へ変換する。

### Date
日付の管理をおこなう。

# 0307_Promise
非同期処理。
IE11が対応していないのでブラウザでは使用しない(polyfillは使用しない方針)

```
node 03_JavaScript/0307_Promise.js
```

# 0308_fizzbuzz
JavaScriptでfizzbuzz
任意の与えられた数字をカウントしてコンソールへ出力する。
ただし3で割り切れる場合はfizz、5で割り切れる場合はbuzz、15で割り切れる場合はfizzbuzzと出力する。



```
node 03_JavaScript/0308_fizzbuzz.js
```

# JavaScriptの特徴的な仕様

## 変数の巻き上げ
JavaScriptにおいて変数はどこで宣言してもスコープ内の一番先頭で宣言されたものとみなされる。

``` js
var value = "test";

function func() {
  // undefind
  console.log(value))
  var value = "test2"
  // test2
  console.log(value)
}
func()
```

上記は最初の出力はローカル内の変数を参照するがまだ値が入っていないので"undefined"と表示される


```
node 03_JavaScript/0309.js
```

## 配列と連想配列について

下記は想定した動作をしない。
配列と連想配列は明確に区別すること。

``` ts
var arr = []

arr["4000"] = "test"
console.log(arr); // // [ <4000 empty items>, 'test' ]
console.log(arr.length); // 4001
arr.test = "test2"
console.log(arr); // [ <4000 empty items>, 'test', test: 'test2' ]
console.log(arr.length); // 4001
```


# 参考
https://developer.mozilla.org/ja/docs/Web/JavaScript
https://www.w3schools.com/js/default.asp
