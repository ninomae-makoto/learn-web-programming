
# TypeScriptについて

JavaScriptによく似た型付き言語。  
JavaScriptへトランスパイル(変換)して使用する(TypeScriptはそのままではブラウザで解釈できないため)  

比較できるようにjavascriptとほぼ同じ構成にしている。  
Ctrl(Cmd) + クリックで 03xx.js と 07xx.ts を選択して、右クリック → 選択項目の比較で差分が確認できる。  

実行前に以下のコマンド

```
cd 07_TypeScript/
```

TypeScriptをインストール(Nodeのインストールが必要)

```
npm install -g typescript
```

TSLintインストール

```
npm install -g tslint
```

## jsファイルへ変換(トランスパイル)する

```
tsc
```

tslint.jsonを元に構文チェックがおこなわれる。

# 0701_HelloWorld

実行

```
node built/0701_helloWorld.js
```

- 変数は代入前に使用することができない
- 数値と文字列の演算はできない
- 数値とundefinedの演算はできない
などできないことが増えている。  
主にバグを防ぐため。  

またvarはletとconstに分かれる。  
let → 可変値、再代入可能
const → 不変値、再代入不可  
またスコープの問題が発生するため全体を{}で囲っている。  

# 0702_type

宣言時に型を明示する。  
一意に型が定まる場合はある程度省略可能。  
interfaceを使用して独自の型を作成することができる。  

```
node built/0702_type.js
```

# 0703_if_switch

JavaScriptとの違いを確認してみる。

```
node built/0703_if_switch.js
```

# 0704_for_while

JavaScriptとの違いを確認してみる。  
1つの配列にいろいろな型を入れるのは型がわからなくなってしまうのであまり望ましくない。  
for文はより簡潔に記述されることが好まれる。  

```
node built/0704_for_while.js
```

# 0705_function

JavaScriptとの違いを確認してみる。  
コールバック関数などを使用すると型が複雑になるが、不具合を埋め込む可能性が下がる。  

```
node built/0705_function.js
```

# 0706_standardFunctions

JavaScriptとの違いを確認してみる。  
差異は少ないが危険なことができないようになっている。  

```
node built/0706_standardFunctions.js
```

# 0707_Promise
JavaScriptとの違いを確認してみる。  

# 0708_fizzbuzz
JavaScriptとの違いを確認してみる。  

# 参考

公式
https://www.typescriptlang.org/docs/tutorial.html

日本語(若干情報が古い)
http://js.studio-kingdom.com/typescript/)
