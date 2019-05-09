
# 確認

```
cd 18_Express/1801_HelloExpress/
```

## ビルド

```
npm run build:prod
```

## サーバ起動

```
npm start
```

http://localhost:3000 へアクセス
http://localhost:3000/api へアクセス

# 解説

## 静的ファイル設定

``` js
app.use(express.static(path.join(__dirname, "/dist")));
```

静的ファイルの設定を指定している。  
http://localhost:3000/path にアクセスするとdist/pathを参照するようになる。  
Expressでは何も指定していない時 http://localhost:3000 にアクセスすると http://localhost:3000/index.html を参照するようにあっている。  
http://localhost:3000 にアクセスした時に、dist/index.html が表示される。  

## ルーティング

``` js
app.use("/api", (req, res, next) => {
  res.send("test")
})
```

http://localhost:3000/api にアクセスした時の処理を記述している。  

## サーバ起動

``` js
app.listen(3000, "0.0.0.0", function () {
  console.log("server starting on %o", "http://localhost:" + 3000);
});
```

