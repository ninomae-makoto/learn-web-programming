
window.addEventListener("load", function () {

  // id を指定して要素を取得
  var header = document.getElementById("header1")
  console.log(header)
  header.textContent = "見出しの変更"

  // クラスが配列で取得できる
  console.log(header.classList)
  // クラスが文字列として取得できる
  console.log(header.className)

  // リストを作成する
  var ul = document.createElement("ul")
  for (let i = 0; i < 5; i++) {
    var li = document.createElement("li")
    li.textContent = "test" + (i + 1)
    li.id = "li" + (i + 1)
    // スタイルの変更
    li.style.color = "red"
    ul.appendChild(li)
  }

  // 作成したリストをbodyの末尾へ追加
  document.body.appendChild(ul)

  // remoceChildは直下の要素でなければならない DOMに追加する前はgetElementByXXXXで要素を取得することはできない。
  ul.removeChild(this.document.getElementById("li3"))

  // 要素内部のHTML
  console.log(ul.innerHTML)

  // javaScriptからjavaScriptを読み込む 読み込みタイミングに注意する必要がある。
  var script = document.createElement('script')
  script.type = "text/javascript"
  script.src = "sub.js"
  document.head.appendChild(script)

  // DOMイベントの作成
  var input = this.document.getElementById("input")
  var button = this.document.getElementById("button")
  button.addEventListener("click", function () {
    input.value = "test"
    input.focus()
  })
})

