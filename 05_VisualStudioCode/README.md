
# 概要

Visual Studio Codeに詳細について学ぶ。
開発を促進するエトセトラ。


# Visual Studio Codeについて
エディタ。
対応OS: Windows, MacOS, Linux。
対応言語:C++, C＃, Java, Python, PHP, Goなど。
インテリセンス、コード補完、デバッグ機能、ターミナルやバージョン管理と統合など。

https://code.visualstudio.com

# UIについて
https://code.visualstudio.com/docs/getstarted/userinterface

## アクティビティバー
左のメニュー
Ctrl(Command) + B で表示切り替え

- エクスプローラー
- 検索
- ソース管理
- デバッグ
- 拡張機能

を切り替えて表示できる。
左下の歯車から本体の更新が可能。

### エクスプローラー
主にファイルの管理を行う。
表示中のディレクトリ以下のファイル一覧、現在開いているファイル、表示中のファイルのアウトラインの表示及びNOMスクリプトの一覧と実行が可能。

### 検索
ファイルの検索が可能。
正規表現も使用できる。

### ソース管理
gitの操作が可能。
拡張機能を入れればSVNも使用可能(未確認)

#### リポジトリの初期化
git管理していない場合
ソース管理 → リポジトリの初期化
からgitの初期化が可能
```git init``` とほぼ同様

#### リーカルレポジトリへコミット
コミット対象をステージング(ファイルの右側の+)したあと
コミットコメントを記述してCtrl(Command) + Enter

#### リモートレポジトリへプッシュ
... → プッシュ

#### リモートレポジトリの内容をローカルへ反映
... → プル
プル(リベース)だとマージ履歴が残らない

ローカルレポジトリは事前にコミットしておく必要がある。

#### 前回のコミットを戻す
... → 前回のコミットを戻す
1つ前に戻す

### デバッグ

.vscode/launch.json の設定をもとにデバッグ起動する。
ブレイクポイントを張って変数の確認したりする。

jsファイルなどはこの限りではない。
例えば
0303_if_switch.js
を開いてブレイクポイントを貼った(行番号の左をクリックあるいはF9)あと
F5デバッグ起動で値の確認が可能。

### 拡張機能

以下は(この資料では)ほぼ必須

- Japanese Language Pack
- TSLint
- TSLint Vue
- Veter

以下はおすすめ

- Git History
- JSON to TS
- Raibow CSV
- Bracket Pair Colorizer


## サイドバー
左下の小さなスペースのこと

現在操作中のブランチ、リモートレポジトリの更新差分数、ローカルの更新差分数、エラー数、警告数 が確認できる。
ブランチの変更も可能。

## エディタグループ
ファイルの編集。
画面を分割することができる。

## パネル
右下の領域。
表示されていない場合は
Ctrl(Command) + J で表示切り替え
あるいは
Windows: Ctrl + @
Mac/Linux: Ctrl + Shift + @

画面を複数に分割できる。

- 警告エラーの確認
- gitやlint及び拡張機能などの動作の確認
- デバッグ中のコンソール出力
- ターミナルの表示及びコマンドの実行

が可能。

## ステータスバー
右下の小さい領域
カーソルの位置、タブ文字の表示方法及びタブの扱い、文字コード、ファイルフォーマット、フィードバック、通知。


# 設定
メニューの設定から(Ctrl + , あるいは Command + ,)

https://code.visualstudio.com/docs/getstarted/settings
左ペインに設定とデフォルト値が一覧表示されているのでざっと眺めてみるといい。日本語で詳細な解説がついている。

## ユーザー設定
ユーザ単位で設定できる。
エディタ背景、GUIの表示など。
ソースコードに直接影響しない部分。

## ワークスペースの設定
ディレクトリ単位で設定できる。
タブサイズ、表示しないファイル、保存時のコード整形、EOL など。
ソースコードに影響があり共通化したい部分。

.vscode/setting.json に保存される。
例えばこのプロジェクトでは
- タブサイズをスペース2つ
- ペースト時、保存時にコードフォーマット
- d.ts, jsファイルを表示しない
- 改行をLFで統一

などに設定している。

# スニペット
for文などスニペットが用意されている他、よく利用するコードを独自にスニペットを設定することができる。

基本設定 → ユーザスニペット
あるいは左下の歯車からユーザスニペット

``` json

"Unit Test": {
  "prefix": "unittest",
  "body": [
    "describe(\"xxxx\", () => {",
    "    it(\"xxxx\", () => {",
    "    }",
    "    it(\"xxxx\", () => {",
    "    }",
    "})"

  ],
  "description": "unit testを作成する"
}
```
prefix: 上記例ではunittes...と入力すると候補に出てくる。選択するとスニペットが展開される。
body: 展開される文字列。改行はカンマで区切る。$nを利用することで任意の値を埋め込める。$を入力したい場合は$$と入力する。
description: snipetの説明だが特に出てこない。

# よく使うショートカット

ヘルプ → ショートカットの参照 からショートカット一覧を参照できる。
あるいは以下
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

Ctrl(Command) + K → Ctrl(Command) + S
で独自のショートカットを設定できる(ビルドなど)

## ファイル

### ファイルを開く
Ctrl + P → ファイル名を入力

### エラーへジャンプ
F8

### ファイルを検索して表示
Ctrl(Command) + P → ファイル名

### ファイル内シンボルを検索
Ctrl(Command) + P → @ → シンボル名

## 編集

### 検索
Ctrl(Command) + F
置き換えもできる

### 変更を一つ戻す
Ctrl + Z

### 戻した変更を取り消し
Ctrl + Shift + Z

### 行コピー
カーソル位置でCtrl + C

### 行切り取り
カーソル位置でCtrl + X

### 貼り付け
Ctrl + V

### 行削除
Ctrl(Command) + Shift + K

### 行移動(選択行の移動)
選択して(あるいはカーソル位置で)Alt + ↑↓

### 宣言へ移動
Ctrl(Command) + Click

### コメントアウト
Ctrl(Command) + /

### クイック検索/置き換え
カーソル位置の(選択した)単語でファイル内検索
Ctrl(Command) + D
そのまま編集すると置き換え

### ファイルを閉じる
Ctrl + W

### クイックフィックス
警告が出ているところを自動修正。
Ctrl(Command) + .

### 変数名変更
F2

### 矩形選択
Shift + Alt + ドラッグ

## その他ショートカット

### デバッグ
https://code.visualstudio.com/docs/editor/debugging
設定したデバッグ構成で起動
F5

# tasks.jsonについて

NPM Scriptで表現しにくい場合などに使用する(OSによって処理を切り替える場合など)  
実行するときはF1 → タスクの実行から。Ctrl(Cmd) + O で最近使用したタスクを実行できる。  
またタスクに関してはショートカットキーを割当てることができるのでウォッチやテスト、リリースが一発で可能になる。 

以下は一例 

```
    {
      "label": "test",
      "type": "shell",
      "windows": {
        "command": "npm run wintest"
      },
      "osx": {
        "command": "npm run mactest"
      },
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": []
    },
```

labelは一意の名前。ショートカットを指定するときなどに利用する。  
windows,osx,linuxなどでcommandoをか囲むことでOSごとに処理を切り替えることが可能。  
typeにはgrunt,gulp,tsc,npm,shell などが使用できる。  
shellだと汎用性が高い。  
groupはデフォルトのビルドコマンドであることを示している。kindにはbuildとtestが指定できる。  
Ctrl(Cmd) + Shift + B でビルドタスクが実行される。  

古い記事だと記述が違うので注意（バージョンが0.0.1→2.0.0に上がっている）  

## タスクにショートカットを割り当てる

keybindings.json を開く(Cmd + K, Cmd + S or Ctrl + K, Ctrl + S)

```
  {
    "key": "shift+cmd+1",
    "command": "workbench.action.tasks.runTask",
    "args": "tadkname"
  },
```
keyはショートカットコマンド  
commandはタスクを示している  
argsでtasks.jsonのlabelを指定する  

https://code.visualstudio.com/docs/editor/tasks

# その他
ヘルプ → 対話型プレイグラウンド から実行しながら機能を確認できる。

# 参考

https://code.visualstudio.com/docs

