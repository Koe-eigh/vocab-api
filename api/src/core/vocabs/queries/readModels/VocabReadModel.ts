export class VocabReadModel {
  constructor(
    private readonly _id: number,
    private readonly _word: string,
    private readonly _types: string,
    private readonly _meanings: string,
    private readonly _examples: string,
  ) {}

  public get id(): number {
    return this._id;
  }

  public get word(): string {
    return this._word;
  }

  public get types(): string {
    return this._types;
  }

  public get meanings(): string {
    return this._meanings;
  }

  public get examples(): string {
    return this._examples;
  }
}
