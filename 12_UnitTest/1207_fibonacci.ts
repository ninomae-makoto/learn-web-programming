import { callbackify } from "util"

export class Fibonacci {

  /**
   * n番目のフィボナッチ数を返す
   * @param n
   */
  public static calc(n: number): number {
    if (n === 0) { return 0 }
    if (n === 1) { return 1 }

    return this.calc(n - 2) + this.calc(n - 1)
  }

}
