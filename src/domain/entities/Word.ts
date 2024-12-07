export class Word {
  private id: number;
  private word: string;
  private type: string;
  private meaning: string;
  private example: string;

  constructor(id: number, word: string, type: string, meaning: string, example: string) {
    this.id = id;
    this.word = word;
    this.type = type;
    this.meaning = meaning;
    this.example = example;
  }

  public getId(): number {
    return this.id;
  }

  public getWord(): string {
    return this.word;
  }

  public getType(): string {
    return this.type;
  }

  public getMeaning(): string {
    return this.meaning;
  }

  public getExample(): string {
    return this.example;
  }
}
