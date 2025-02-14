export class IntegerId {
  private static readonly MIN = Number.MIN_SAFE_INTEGER;
  private static readonly MAX = Number.MAX_SAFE_INTEGER;

  constructor(private readonly _value: number) {
    IntegerId.validate(_value);
    this._value = _value;
  }

  public get value(): number {
    return this._value;
  }

  public static validate(value: number) {
    if (!Number.isInteger(value)) {
      throw new Error("ID must be an integer.");
    }

    if (value < IntegerId.MIN || value > IntegerId.MAX) {
      throw new Error(
        `ID must be smaller than ${IntegerId.MAX} and greater than ${IntegerId.MIN}`,
      );
    }
  }

  public toString(): string {
    return this.value.toString();
  }
}
