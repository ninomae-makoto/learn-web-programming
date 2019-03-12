
export class UT1201 {

  /**
   * 引数を加算して返す
   * @param arg1
   * @param arg2
   */
  public static sum(arg1: number, arg2: number) {
    return arg1 + arg2
  }

  /**
   * 引数を差を返す
   * @param arg1
   * @param arg2
   */
  public static diff(arg1: number, arg2: number) {
    return arg1 - arg2
  }

  /**
   * 引数を除算して返す
   * ゼロ除算の場合undefinedを返す
   * @param arg1
   * @param arg2
   */
  public static div(arg1: number, arg2: number) {
    if (arg2 === 0) {
      return undefined
    }
    return arg1 / arg2
  }

  /**
   * 配列の合計を返す
   * @param arg 数字の配列
   */
  public static total(args: number[]) {
    let result = 0
    args.forEach((arg) => {
      result += arg
    })
    return result
  }

  /**
   * 配列の平均を返す
   * @param arg 数字の配列
   */
  public static avg(args: number[]) {
    let result = 0
    args.forEach((arg) => {
      result += arg
    })
    return result / args.length
  }

}
