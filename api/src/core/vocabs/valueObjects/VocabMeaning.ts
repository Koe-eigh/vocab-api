/**
 * 英単語の意味を表すクラス。
 */
export class VocabMeaning {
  constructor(private readonly _value: string) {
    // FIX: validationを実装。
    this._value = _value
  }

  public get value(): string {
    return this._value
  }
}
