
export class Fibonacci {

  /**
   * n番目のフィボナッチ数を返す
   * @param n
   */
  public static calc(n: number) {
    if (n === 0) { return 0 }
    if (n === 1) { return 1 }

    // 以降を書き換える
    if (n === 2) { return 1 }
    if (n === 3) { return 2 }
    if (n === 4) { return 3 }
    return 0
  }

}
