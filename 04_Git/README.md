
# 概要

分散型バージョン管理システム。  
PC環境ごとに存在するローカルレポジトリと一つのリモートレポジトリが存在する。

# VSCodeでソース管理画面を開く
Ctrl + Shift + G

# ローカルレポジトリの初期化
ローカルから開発を始める場合レポジトリの初期化を行う。

## VSCodeでの操作
ソース管理からレポジトリの初期化

## コマンドから操作

```
git init
```

# リモートURLを指定してプッシュ
ローカルに存在するプロジェクトをリモートへ上げる。  
基本最初の一回のみ

```
git remote add origin https://xxxxx.git
```

```
1. git push -u origin master
```

# リモートレポジトリをローカルに持って来る

```
git clone https://xxxxx.git
```

# コミットする
ローカルで管理しているレポジトリに修正内容を登録する。
- コミットメッセージを書く
- Ctrl + Enter(Cmd + Enter)

# ファイルを指定してコミットする
機能単位でコミットを分けるときに使用する

## VSCodeでの操作
- コミットメッセージを書く
- ファイル名にカーソルを乗せると + が表示されるのでクリック
- Ctrl + Enter(Cmd + Enter)

# 変更を元に戻す

## VSCodeでの操作
- ファイル名にカーソルを乗せると表示される+の横のアイコンをクリック

# ローカルレポジトリの変更をリモートレポジトリへ反映する
事前にコミットすること

## VSCodeでの操作
- ... をクリック
- プッシュ

# リモートレポジトリの変更をローカルへ反映する

## VSCodeでの操作
- ...をクリック
- プル(rebase付きだとマージ履歴が残らない)
※同期だとプッシュとプルが同時に行われる

# プッシュ・プルできない
全てのソースをコミット済みのこと

# コミットできない場合

```
git config --global user.email [myEmail]
```

```
git config --global user.name [myName]
```

# すでに管理対象のファイルを除外する

```
git rm --cached -r .
```

```
git add -A .
```

# Git管理対象外のファイルを設定
.gitignore に記述したファイルはgitの管理対象外になる。

# コミットルール
組織、プロジェクトによって適宜変更する。

## 追加
画面、ファイル、機能追加時

```
add: ログ画面追加
```

## 更新
画面、ファイル、機能更新

```
update: ログ絞り込み機能
```

## 削除
ファイル、機能、画面削除時

```
delete: 不要ファイル削除
```

## 不具合修正

```
fix: 検索機能の不具合修正
```

# 運用ルール的な
すでにリモートへ上げてしまったものは手をつけない。  
うっかり間違えた場合は打ち消しコミット(該当ファイルを元の状態に戻して再プッシュする)

# その他
リポジトリをブランチで分割したり、
スタッシュを用いて変更を一時保留することができる。  
適宜調べる。

# 参考

本家マニュアル(コマンド一覧)
https://git-scm.com/docs

サルでもわかるGit入門
https://backlog.com/ja/git-tutorial/

やらかした時に使える19個の奥義
http://qiita.com/muran001/items/dea2bbbaea1260098051

コミット作法
http://qiita.com/itosho/items/9565c6ad2ffc24c09364
http://anond.hatelabo.jp/20160725092419

