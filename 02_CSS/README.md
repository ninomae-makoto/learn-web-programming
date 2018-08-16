
# 動作確認

Windowsで開く

```
02_CSS/021_base.html
```

MACで開く

```
open 02_CSS/021_base.html
```

# 概要
主にデザインを記述する。

# 指定方法(セレクタ)

それぞれ組み合わせることができる。

## 要素

要素名{} でタグごとに指定できる
```
a {

}
```

カンマ区切りで同時指定
```
h1, h2, h3, h4 {

}
```

## id

```
\#idName {

}
```

でidに対して指定。
あまり推奨されない。
idはDOM操作(js),classにデザイン(css)を使うケースが多い。

## class

```
.className {

}
```

でクラスを指定。
HTML側は

``` html
<div class="className class2"></div>
```
空白区切りで複数指定することもできる。

## 子要素
ある要素を親にもつ要素の指定
空白区切りで指定する。
ul li {}

## first-child
最初の子要素

```
li:first-child {}
```

## 擬似要素 カーソルが乗っているとき

```
button:hover{}
```

## 属性

```
[disabled] {
    opacity: 0.3;
}
```

disableなDOM全てに適用する。

``` html
<textarea disabled="disabled"></textarea>
```

など

# プロパティ

## margin
外側の余白

margin 上下左右;
margin 上下 左右;
margin 上 右 下 左;


## padding
内側の余白

## color
文字色

## background-color
背景色

# 優先順位
上から順に優先度高

classよりidが優先される。
より詳細な方が優先される。
優先度が同じ場合後で読み込まれた値で上書きされる。

# 変形
割愛

# アニメーション
割愛

# flexbox
割愛

# やってみる
かいつまんで解説しているので以下の参考を元にいろいろ書き換えてみる。

# 参考
http://www.htmq.com/css3
