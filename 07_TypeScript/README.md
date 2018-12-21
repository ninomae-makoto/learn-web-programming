
# TypeScriptについて

JavaScriptによく似た型付き言語。
JavaScriptへトランスパイル(変換)して使用する(TypeScriptはそのままではブラウザで解釈できないため)

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

tslint.jsonを元に構文チェックがおこなわれる。

# 001_HelloWorld
jsファイルへ変換する。

トランスパイル(tsconfig.jsonがオプション)

```
tsc
```

実行

```
node built/001_helloWorld.js
```

# 参考

公式
https://www.typescriptlang.org/docs/tutorial.html

日本語(若干情報が古い)
http://js.studio-kingdom.com/typescript/)
