
/**
 * イミュータブルな日付型
 */
class DateTime {
  private dateTime: Date

  /**
   * @param date 引数がない場合現在の日付になる
   */
  constructor(date?: Date) {
    // new しないと引数の値を変更した時にdatetimeの値も変わってしまう
    if (date) {
      this.dateTime = new Date(date.getTime())
    } else {
      this.dateTime = new Date()
    }
  }

  /**
   * 現在の日時を文字列に変換して返す
   * @param format 変換形式 yyyy:年 MM:月 dd:日 hh:時 mm:分 ss:秒
   */
  public toString(format: string = "yyyy/MM/dd") {
    format = format.replace(/yyyy/g, "" + this.getYear())
    format = format.replace(/MM/g, ("0" + this.getMonth()).slice(-2))
    format = format.replace(/M/g, "" + this.getMonth())
    format = format.replace(/dd/g, ("0" + this.getDay()).slice(-2))
    format = format.replace(/d/g, "" + this.getDay())
    return format
  }

  /**
   * 年を取得
   */
  public getYear() {
    return this.dateTime.getFullYear()
  }

  /**
   * 月を取得
   * 1 ~ 12
   */
  public getMonth() {
    return this.dateTime.getMonth() + 1
  }

  /**
   * 日付を取得
   */
  public getDay() {
    return this.dateTime.getDate()
  }

  /**
   * value年加算された新たなDateTimeを返す
   * @param value value年加算する マイナスも可
   */
  public addYear(value: number): DateTime {
    const result = new Date(this.dateTime.getTime())
    result.setFullYear(result.getFullYear() + value)
    return new DateTime(result)
  }

  /**
   * valueヶ月加算された新たなDateTimeを返す
   * @param value valueヶ月加算する マイナスも可
   */
  public addMonth(value: number): DateTime {
    const result = new Date(this.dateTime.getTime())
    result.setMonth(result.getMonth() + value)
    return new DateTime(result)
  }

  /**
   * value日加算された新たなDateTimeを返す
   * @param value value日加算する マイナスも許可
   */
  public addDay(value: number): DateTime {
    const result = new Date(this.dateTime.getTime())
    result.setDate(result.getDate() + value)
    return new DateTime(result)
  }

}

{
  const now = new DateTime()
  console.log("現在の日付は")
  console.log(now.toString())
  console.log(now.toString("yyyy-MM-dd"))
  console.log(now.toString("yyyy年MM月dd日"))

  console.log("-----------------------")

  let date = new DateTime(new Date(2017, 12, 1))
  console.log(date.toString())
  console.log("1年プラス")
  date = date.addYear(1)
  console.log(date.toString())
  console.log("2ヶ月プラス")
  date = date.addMonth(2)
  console.log(date.toString())
  console.log("3日マイナス")
  date = date.addDay(-3)
  console.log(date.toString())
}
