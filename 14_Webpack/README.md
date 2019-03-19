# Webpackについて

モジュールバンドラ。  
いろいろなファイル(ES6〜,ts,sass,cjs,png,jpg)からブラウザが認識可能なjs,css,画像ファイルへ変換するツール。  
画像含め全て1つのjsに書き出すことが可能。分割も可能。  
用意されたものを目的に合わせて微調整するケースが多い。  
Webpack4で確認。  

# メリット

- パフォーマンスが上がる可能性がある
- 一元的に管理できるようになる

# デメリット

- よく壊れる
- 難しい
- 使い方によってはjsファイルが肥大化する
- 使い方によってはビルド時間が肥大化する

# Hello Webpack

事前に依存関係は解決しておく(順番にやって来たなら実行済み)

```
npm i
```

webpackの実行

```
npx webpack --config 14_Webpack/1401_HelloWebpack/webpack.config.js --mode development
```

Windowsで確認

```
14_Webpack/1401_HelloWebpack/page.html 
```

MACで確認

```
open 14_Webpack/1401_HelloWebpack/page.html 
```


## Hello Webpack 解説

### webpack.config.js
https://webpack.js.org/configuration/

``` js
const path = require('path');

module.exports = {
  entry: './14_Webpack/1401_HelloWebpack/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
```

#### entry
Webpackのビルド開始点。  
entryで指定されたファイルから順次処理していく。

#### output
ビルドファイルの出力先。  
dist/bundle.js を指定している。  

### index.js

``` js
import bar from './bar';
bar();
```

bar.jsファイルをインポートしている。  
ブラウザではimportが使えないのでこのままでは動かない。  

### bar.js

``` js
export default function bar() {
  const p = document.createElement("p")
  p.innerText = "Hello Webpack"
  document.body.appendChild(p)
}
```

bodyにテキストを挿入している。  

# webpack.config.js について
https://webpack.js.org/configuration/

# 参考

https://webpack.js.org/
