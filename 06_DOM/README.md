
# 概要

ライブラリに依存しないDocument Object Model(HTMLの各要素)の操作

# 動作確認
htmlファイルをブラウザ上で確認する。

## Windowsで開く

```
06_DOM/06_base.html
```

## MACで開く

```
open 06_DOM/06_base.html
```

# DOMへのアクセス
```document.getElementById(id)``` で指定したidの要素が取得できる。
```document.getElementsByClassName(className))``` で指定したclassNameに一致するすべての要素が取得できる。

取得した要素からテキストの変更、スタイル、クラスの変更、イベントの追加などが可能。

# DOMの作成・追加・削除
```document.createElement(element)``` で要素を作成できる(作成時点では画面上には追加されない)
```element.appendChild(element2)``` で要素の末尾に要素を追加できる。
```element.removeChild(element2)``` で指定した要素を削除できる。

```element.parentNode.removeChild(element)``` 自身の削除

remoceChildは直下の要素でなければならない。
DOMに追加する前はgetElementByXXXXで要素を取得することはできない。

# DOMイベント

``` js
element.addEventListener(event, function () {
  // イベント発火時の処理
})
```
イベントには
- クリック
- ダブルクリック
- マウスホバー
- フォーカス
- ドラッグ
- キー入力
- 読み込み時
などがある。

# やってみる
- テーブルをソースから追加してみる。
- テーブルにクリックイベントを付与してクリックされたセルの背景色を変更する。

# 参考
https://developer.mozilla.org/ja/docs/DOM
https://www.w3schools.com/js/js_htmldom.asp
