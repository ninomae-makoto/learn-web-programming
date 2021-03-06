
# ユニットテストについて

書いたコードが『実装者』の意図した通りに動くかどうか調べるコード。  

PHP,Rubyなど型がない言語で特に見かける。  
Linterや型、Nullableなど言語やフレームワーク、IDEの機能によって担保できる部分はテストは不要。  

~~正直あんまり書いてない~~

## テスト 易

書いたほうが間違いなく進捗する。

- ミドルウェア
- ライブラリ
- 共通コード
- 依存の少ないコード

## テスト 難

時と場合と人と環境による。

- 画面、View
- データ処理
- 通信処理
- iOS
- 頻繁に変更が発生する実装難度の低い機能
- 仕様が不明瞭な業務ロジック(テスト以前の問題)

## Hello UnitTest

テスティングフレームワークにはmochaを使用。
https://mochajs.org/

ビルド

```
tsc -p 12_UnitTest/
```

テストの実行

```
npx nyc mocha 12_UnitTest/built/1201_test.js
```

以下のように表示される。

```
Hello UnitTest
[describe]before 1201_test
  UT1201
    ✓ 加算
    ✓ 差
0.5999999999999996
    ✓ 差(誤差確認)
    ✓ 除算
    ✓ 合計

[describe]after 1201_test

  5 passing (15ms)

--------------|----------|----------|----------|----------|-------------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------|----------|----------|----------|----------|-------------------|
All files     |       90 |      100 |     87.5 |     89.8 |                   |
 1201.ts      |       75 |      100 |       75 |    73.68 |    30,52,53,54,56 |
 1201_test.ts |      100 |      100 |      100 |      100 |                   |
--------------|----------|----------|----------|----------|-------------------|
```

### テストケース加算

JavaScript,PHPなどは不正な文字列が入った場合どうなるのかといった考慮が必要になる。  

### テストケース差(誤差確認)
仕様上想定外、うまくいかないパターンもテストとして記述する。  
仕様上誤差が認められないなら誤差が出ないように関数diff(+テスト)を修正する必要がある。  
いずれにせよ『実装者』がどういう動作を意図しているかは明確になる。  

### テストケース合計

不具合が発生しがちな空値、境界値などがテスト対象。  

TypeScript, TsLintの組み合わせなら設定にもよるが
- null, undefinedチェック
- 型の不一致
- 言語仕様による意図しない動作
- 到達不可能なコード
- その他言語仕様上の不正な演算

上記はテスト不要（使用しないなら必要）

## やってみる

- 乗算の関数、テストを書いてみる。
- avgのテストが書かれていないので書いてみる。

# TDD(テスト駆動開発)について

テストで開発を駆動すること。  


![テスト書いてないとか](cap/t_wada.jpg)


## ステップ

1. 失敗するテストコードを書く
2. テストが通る最小、最速のコードを書く
3. リファクタリングする

## もう少し細かいステップ

1. 作業内容をTODOリストに起こす
2. TODOリストから今から着手する作業を1つ決める
1. 失敗するテストコードを書く
2. テストが通る最小、最速のコードを書く
2. 2つ以上のテストを追加して、正しい実装へ導く
3. リファクタリングする
3. 必要に応じてTODOリストを編集する
3. 2に戻る

※ テストが通るまで次の実装には着手しないこと


## テスト駆動でフィボナッチ数列

テスト駆動開発付録Bより
n番目のフィボナッチ数を返すプログラムを作成する

### フィボナッチ数列とは

https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%9C%E3%83%8A%E3%83%83%E3%83%81%E6%95%B0
http://oeis.org/A000045

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946 ...
と続く数列。
0番目が0、1番目が1、以降は直前の2つの値の和になっている。

### テストを書く

Fibonacciクラスにcalcメソッドを用意して引数で受け取ったn番目のフィボナッチ数を返すことをテストする。
例えば5番目のフィボナッチ数を受け取る場合以下のようになる。

```
const result = Fibonacci.calc(5)
```

テストの実行

```
npx nyc mocha 12_UnitTest/built/1201_test.js
```

1201_test.ts を参照。  
nが0のときに0を返すテストを書いている。
Fibonacchiクラスそのものが存在しないのでテストに失敗する。
そもそもビルドで失敗している。

### 最速でテストを通す

クラスと関数を用意してテストを通す。  
1203_fibonacci.ts を参照。  

```

export class Fibonacci {
  /**
   * n番目のフィボナッチ数を返す
   * @param n
   */
  public calc(n: number) {
    return 0
  }
}
```

```
npx nyc mocha 12_UnitTest/built/1203_fibonacci_test.js
```

### テストケースを追加する

1204_fibonacci.ts を参照。  
n=1のテストケースを追加して実装する。  
フィボナッチ数は https://keisan.casio.jp/exec/system/1161228773 から計算できる。

```
public static calc(n: number) {
  if (n === 1) { return 0 }
  return 0
}
```

```
npx nyc mocha 12_UnitTest/built/1204_fibonacci_test.js
```


### テストケースを更に追加する

1205_fibonacci.ts を参照。  
n=2,3,4のテストケースを追加して実装する。  

``` ts
public static calc(n: number) {
  if (n === 1) { return 1 }
  if (n === 2) { return 1 }
  if (n === 3) { return 2 }
  if (n === 4) { return 3 }
  return 0
}
```

```
npx nyc mocha 12_UnitTest/built/1205_fibonacci_test.js
```

この調子でフィボナッチ数を全パターン網羅すれば理論上正しい実装になるはず。  
ただ何かが違う気がする。  
どうやらどこかで間違えてしまったようだ。  

### 実装を見直す

1206_fibonacci.ts を参照。  
そもそもフィボナッチ数とはなんだったか改めて確認してみる。  
https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%9C%E3%83%8A%E3%83%83%E3%83%81%E6%95%B0
0番目が0、1番目が1、以降は直前の2つの値の和になる。

0,1番目は固定値で返すようにしても問題ないがそれ以降に関しては計算するようにしたい。  
``` ts
public static calc(n: number) {
  if (n === 0) { return 0 }
  if (n === 1) { return 1 }
  
  // 以降を書き換える
  if (n === 2) { return 1 }
  if (n === 3) { return 2 }
  if (n === 4) { return 3 }
  return 0
}
```

```
npx nyc mocha 12_UnitTest/built/1206_fibonacci_test.js
```

特にテストは変更していないがまだ通っている。

### n=2以降が通るように書き換える

1207_fibonacci.ts を参照。  
n=2以降はF(n)=F(n-2)+F(n-1)で表される。  
これをプログラムで表現する。  

Fibonacci.calc(2) = Fibonacci.calc(2-2) + Fibonacci.calc(2-1)
Fibonacci.calc(3) = Fibonacci.calc(3-2) + Fibonacci.calc(3-1)
Fibonacci.calc(4) = Fibonacci.calc(4-2) + Fibonacci.calc(4-1)
Fibonacci.calc(n) = Fibonacci.calc(n-2) + Fibonacci.calc(n-1)

```
public static calc(n: number): number {
  if (n === 0) { return 0 }
  if (n === 1) { return 1 }
  return this.calc(n - 2) + this.calc(n - 1)
}
```

だいぶ歩幅が大きくなってしまった気がする。  
大丈夫そうに見えるがこれで本当に完成しているのか確証が持てない。  
テストを実行してみる。  

```
npx nyc mocha 12_UnitTest/built/1207_fibonacci_test.js
```

通ったということはどうやらこれで完成しているらしい。

# 実践について

実際にここまで細かくやるかというとやらない。  
自身が管理可能な粒度で進める。  

# 参考

混乱するのであまり調べないほうがいい。

## 書籍

テスト駆動開発
