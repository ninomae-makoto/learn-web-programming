
/**
 * イミュータブルなクラス
 * newしたタイミングでメッセージが一つに決まり変更できない
 */
class HelloWorld1 {
  private msg: string
  constructor(msg: string) {
    this.msg = msg
  }
  /**
   * コンソールにメッセージを出力
   */
  public print() {
    console.log(this.msg)
  }
}

/**
 * ミュータブルなクラス
 * 表示するメッセージを変更して使い回すことができる
 * イメージとしてはDateが近い
 */
class HelloWorld2 {
  public msg: string = ""
  /**
   * コンソールにメッセージを出力
   */
  public print() {
    console.log(this.msg)
  }
}

/**
 * クラスに属するただの関数
 * イメージとしてはMathが近い
 */
class HelloWorld3 {
  public static print(msg: string) {
    console.log(msg)
  }
}

const helloClass1 = new HelloWorld1("HelloClass1")
helloClass1.print()

const helloClass2 = new HelloWorld2()
helloClass2.msg = "HelloClass2"
helloClass2.print()

HelloWorld3.print("HelloClass3")
