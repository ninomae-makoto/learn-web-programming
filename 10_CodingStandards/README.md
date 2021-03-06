
# コーディング規約について
すでに何かしらあるならそれを使えばいいし、
ないなら参考にしてもしなくてもいい。

# 基本はtslintに準拠する
あまりカスタムするつもりはないが不都合がある場合は適宜ルールを変更する

# 命名及び言語仕様の制限について
実装上の表記を統一する。  
実装方法に制限を設けて考えることを減らす。

## 命名
基本的に省略しない。  
一般的で間違いようがない場合は省略して構わない。  
変数、関数共に複数の意味を持つような命名だった場合は分ける。  
searchAndUpdate() など  

アプリケーション固有の用語は統一する。  
実装前に用語集を作成する。  
同じ意味で違う命名をしない。  

## 変数
キャメルケース  
システムハンガリアンは使用しない。

## 関数
キャメルケース

## インタフェース・クラス
パスカルケース

## クラスのメンバ
キャメルケース  
先頭に_やmはつけない。  

※ どちらかというとつけたほうがいいかもしれないがこれ書いた人が馴染まなかった。

## 定数
アッパーケース

## URL
プログラムと直接関係ないがURLは全て小文字にする。

## クォート
基本的にダブルクォート。  
文字列内に文字列を持つ場合シングルクォートを使う。  

``` ts
const text = "Hello 'Coding Standards'"
```

バッククォートは使ってもいい(がIE11では動かない。TypeScriptから変換する場合は問題ない)  

## 複数形
配列構造など複数の値を持つ場合基本的に複数形にする。  

この資料においてxxxxが配列構造を持っていて特に固有の意味を持たせない場合  

``` js
userData.foreach((userDatum) => {
	// hoghoge
}
```

とすることがかなりある。  
がおそらく一般的ではない。  

ちなみに上記例なら  

```
users.foreach((user) => {
	// hogehoge
}
```

で事足りる。

## 末尾のセミコロンはつけない
どちらがより優れているか言うとどちらでも構わない。  
つけないことで問題が起きるようなコードはそもそも認められない。  

``` js
// return undefined
return
    "bug"
```

上記はよく問題点として上げられているがセミコロンの有無には関係ない。

``` js
// y = a * x(function()...)
y = a * x

(function() {
    var x, y, z;
})()

```

どうせ即時間数を使うなら命名(変数に代入あるいは関数宣言)したほうが良い。


``` js

const input = document.getElementById("test")
(input as HtmlInputElement).value = "test"

```

上記は想定外の挙動になるが、Lintエラーが発生するので問題ない。

## 三項演算子
適切な命名がされていれば問題にはならない。  
目安としては該当箇所を一言で説明できないなら使用しない。

## prototypeの拡張はしない
実装にはTypeScriptを使うのでそれで事足りる。

## 条件式に==は使用しない
例外は認めない。  
tslintで弾く。

## for文の添字は基本的に0から始める
0以外から始まる場合データの持ち方に問題があるケースあり。  
あるいはforeachを利用する。  
例外は認める。  

## whileは基本的に使用しない
終わりが分からないときなど例外は認める。

## switchは基本的に使用しない
以下のようにする。

×

``` js
// 未初期化
var UNINITIALIZED = 0
// 準備完了
var READY = 1
// 読み込み中
var LOADING = 2
// 読み込み完了
var LOADED = 3
// 未初期化(0)〜ロード完了(3)までの状態を擬似的に取得
var state = Math.floor(Math.random()*4)

switch (state) {
  case UNINITIALIZED:
    console.log("未初期化")
    break

  case READY:
    console.log("準備完了")
    break

  case LOADING:
    console.log("読み込み中")
    break

  case LOADED:
    console.log("読み込み完了")
    break

  default:
    console.log("未定義の状態")
    break
}

```

以下のようにする。
◯

``` js
// 未初期化
var UNINITIALIZED = 0
// 準備完了
var READY = 1
// 読み込み中
var LOADING = 2
// 読み込み完了
var LOADED = 3
// 未初期化(0)〜ロード完了(3)までの状態を擬似的に取得
var state = Math.floor(Math.random()*4)
var MAP = [
  "未初期化",
  "準備完了",
  "読み込み中",
  "読み込み完了",
]

if( state < MAP.length ) {
  console.log(MAP[state])
} else {
  console.log("未定義の状態")
}


```

添字が0から始まらない場合に連想配列を使用したり、値に処理を入れることもできる。  
機能が重厚になる場合はクラス化してもいい。

例外は認める。


## switch,ifはネストしない

展開する。  

 
``` js
// ×
var PATTERN1 = 1
var PATTERN2 = 2
var PATTERN2_1 = 3
var PATTERN2_2 = 4
var PATTERN3 = 5
var PATTERN4 = 6

// 任意のパターン
var patternA = PATTERN4
var patternB = PATTERN2_1

switch (patternA) {
  case PATTERN1:
    console.log("PATTERN1")
    break

  case PATTERN2:
    if (patternB === PATTERN2_1) {
      console.log("PATTERN2_1")
    } else {
      console.log("PATTERN2_2")
    }
    break

  case PATTERN3:
    console.log("PATTERN3")
    break

  case PATTERN4:
    console.log("PATTERN4")
    break

}

```

↓
 
``` js
// ◯
var PATTERN1_1 = 1
var PATTERN2_1 = 3
var PATTERN2_2 = 4
var PATTERN3_1 = 5
var PATTERN4_1 = 6

// 任意のパターン
var pattern = PATTERN4

switch (pattern) {
  case PATTERN1_1:
    console.log("PATTERN1")
    break

  case PATTERN2_1:
      console.log("PATTERN2_1")
    break

  case PATTERN2_2:
      console.log("PATTERN2_2")
    break

  case PATTERN3_1:
    console.log("PATTERN3")
    break

  case PATTERN4_1:
    console.log("PATTERN4")
    break

}

```

場合による。

## evalは使用しない
例外は認めない。  
使わないといけないレベルのもの(フレームワークとかライブラリとか)を作っている人はこんなものは見ない。  


---


# 可読性について
前半は言語共通部分、後半はJavaScript,TypeScript固有の部分。

## 人間にわかりやすいように書く
実装におけるボトルネックを削減する。つまり実装時間の大部分を占める『コードを読む』部分を最適化する。  
理解するまでの時間が最も短くなるように記述する。  
コードが短いこと及び言語機能部分のパフォーマンス最適化は最重要ではない。  
8割はボトルネックとなり得ない。  

## コメントを書く

意味のあるコメントを書く。ソースをそのまま日本語にしたようなコメントは書かない。  
実装に別の選択肢がある場合などなぜそうなっていないのかも書く。  
関数及びクラスなど外部とのインタフェースになる部分は役割や使用方法を書く(内部の実装にはあまり触れない)  
ひどい実装、名前を補うようなコメントは書かない。実装、名前を変える。  

ソースを読んで意図を理解できるようにすべき。  
→ 正しい  
ソースで全て表現できる(すべき)だからコメントは書かなくていい。  
→ 間違い。そんなものはこの世に存在しない。存在すると思っている人はそこそこいる。  
コメントはメンテされず嘘をつくがソースコードは嘘をつかない。  
→ 誤解を生む表現。変数、関数、クラスなどの名前は嘘をつく可能性がある。  

またソースコードはドキュメントとして複雑すぎるという問題がある。  

TODOコメントやFIXコメントは悪いものではないが時期を決めて対応しないといけない。  
TODOコメントがいつまでも残り続けるような運用は避ける。

## 説明変数
複雑なif文の中身などを変数で説明、要約すれば可読性が上がる。

## 変数のスコープを小さくする
変数のスコープはできるだけ減らす。  
一度に考えることを減らす。

## 変数の数を減らす
不要な制御フロー変数など。  
一度に考えることを減らす。

## 変数の使い分け
- 関数とほぼ同義
- 不変の値、パラメータ（引数など）
- 絶えず変化するデータ構造

に分けることを意識すると可読性が上がる。

## クラスのメンバを減らす
メンバが増えるごとに複雑度が上がる。  
ローカル変数でも問題ない場合などはメンバを削る。

## 変数は使用する直前で宣言する
変数の巻き上げの問題が出る可能性がある。  
スコープの外の変数を使わないようにして対処する。

## 変数temp
超短命(数行)だったら使っても問題ない、推奨される。  
それ以外は使わない。

## constを多用する
変数は極力変更しないようにする。  
errorやresultなどの汎用的な名前で使いまわさない。

## 一度に一つのことだけをやる
変数、関数、クラスに複数の意味を持たせない。
複数の意味を持つような命名だった場合は分ける。
searchAndUpdate() など

## 否定文について
二重否定になるような表現は避ける。
if( !notFound ) など
可能なら否定文も極力避ける。
if( !isInvalid ) など
文脈上自然なら問題ない。

## 関数の実装基本方針
最初に入力値を検証して早期リターン
途中ではリターンしない
出口は一つ

※ あくまで基本方針なので多少異なっていてもいい

## オブジェクトは基本的に値コピーする
配列を含むオブジェクトはconstにしていても中身を書き換えられてしまう。
バグを産みやすいので基本的に値コピーする。
以下のスニペットが使える。

``` ts
const testData = {
    id: 123456,
    value: "test",
}

const copyData = JSON.parse(JSON.stringfy(testData))

```

※ 参照渡しの方がわかりやすく都合がいい時や、パフォーマンスなど要件によって変わる

## 連想配列を使用する場合interfaceを使用して専用の型を使用する
特に広い範囲で使用する場合などにはinterfaceを利用する。
操作が入る場合はclassにする。

bad

``` ts
const orange = {
    id: "xxxx",
    name: "オレンジ",
    price: 100,
}
```

good

``` ts
interface Item {
    id: string
    name: string
    price: number
}

const orange: Item = {
    id: "xxxx",
    name: "オレンジ",
    price: 100,
}
```



# 参考
https://www38.atwiki.jp/aias-jsstyleguide2/pages/1.html
http://mitsuruog.github.io/javascript-style-guide/
http://popkirby.github.io/contents/nodeguide/style.html
リーダブルコード
