/**
 * 英単語を表すクラスです。
 */
export class VocabWord {
  constructor(private readonly _value: string) {
    // FIX: validationを実装。
    this._value = _value
  }

  public get value(): string {
    return this._value
  }
}
