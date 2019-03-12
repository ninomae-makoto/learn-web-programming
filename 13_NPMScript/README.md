
# NPMScriptについて

シェルスクリプトのエイリアス。  
Node.jsのスクリプトと組み合わせれば大体のことができるようになる。  
主な用途はよく使う複雑なコマンドをまとめる、ビルド、テスト、リリースなど。  
コマンドがOSで異なる場合tasks.jsonで呼び分けることができる。  

package.jsonのscriptsに記述する。  

# Hello NPM Script

以下のコマンド（またはpackage.jsonからマウスオーバーで実行できる）

```
npm run hello
```

以下のような表示になる。  

```
MacBook-Pro:learn-web-programming user$ npm run hello

> learn-web-programming@1.0.0 hello /Users/user/Project/learn-web-programming
> echo "Hello NPM Script!!"

Hello NPM Script!!
```

# 使用例

```
  "scripts": {
    "build": "webpack --mode development",
    "test": "mocha",
    "deploy": "node release.js",
    "list": "npm ls --depth=0",
    "log": "git log -n 30 --format='%cd %s' --date=format:'%y/%m/%d %H:%M:%S' --no-merges | sort > commitlog.txt"
  },
```

上から順にビルド処理、テスト、デプロイ(release.js実行)、プロジェクトにインストールされているパッケージを一覧表示、過去30回分のコミットログ出力。  
使用するときは```npm start```など一部を除いて```npm run xxxx```で呼び出す。  

コマンドの先頭にpreをつけると前処理、postをつけると後処理になる。  
用途としてpredeployでテストを実行して失敗した場合デプロイを中断するなど。  
その他postdeployでslackにメッセージ通知なども可能。  

# 参考

https://docs.npmjs.com/misc/scripts
