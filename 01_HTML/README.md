# HTMLとは
HyperText Markup Language.  
Webの基本的な構成要素の一つ。  
文書を構造化する目的で利用する。

# 動作確認
htmlファイルをブラウザ上で確認する。

1. LearnWEbProgrammingフォルダをVSCodeで開く(ファイル→開く)
2. VSCode上でターミナルを開く(Ctrl+Shift+@)

3. Windowsで開く

```
01_HTML/011_base.html
```

3. MACで開く

```
open 01_HTML/011_base.html
```

# HTML5 テンプレート

011_base.htmlを参照のこと

## lang="ja"
文書が日本語であることを示す

## !DOCTYPE html
文書がhtml5であることを示す

## head
主に画面に表示されないメタ情報を埋め込む

## charset="utf-8"
文字コードにutf8を設定する

## http-equiv="X-UA-Compatible" content="IE=edge"
表示モードを設定する

## title
タブに表示される

## name="viewport" content="width=device-width, initial-scale=1
ブラウザのviewport(レンダリング領域)を設定する。
ブラウザはviewportにレンダリングしたあとディスプレイに拡大縮小して反映する。

## body
主に画面に表示する内容を記述する。

## h1 ~ h6
見出し
数値が大きいほど重要度が高い

## p
一つの段落を示すテキスト

## hr
罫線

## a
リンク

## div
ブロックを構成する。

## input text
テキスト入力フィールド

## textarea
複数行に渡る入力フィールド

## button
ボタン

## form
入力フォームを構成する。
form内の入力値を元にactionのURLに対してリクエストを投げる。

## ul li
リスト

## table


# Emmetについて
少ない入力でhtmlへ展開できる。
タブかエンターで展開する

## htmlテンプレート作成

```
html
```

## 水平に展開

```
h1{見出し1}+h2{見出し2}+h3{見出し3}
```

↓

```
<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
```

## リストの展開


```
ul>li{test$}*5
```

↓

``` html
<ul>
    <li>test1</li>
    <li>test2</li>
    <li>test3</li>
    <li>test4</li>
    <li>test5</li>
</ul>
```

# やってみる
以下の参考を元にいろいろ書き換えてみる。

# 参考

http://www.htmq.com/

https://docs.emmet.io/cheat-sheet/
