import { VocabExample } from "../valueObjects/VocabExample";
import { VocabId } from "../valueObjects/VocabId";
import { VocabMeaning } from "../valueObjects/VocabMeaning";
import { VocabType } from "../valueObjects/VocabType";
import { VocabWord } from "../valueObjects/VocabWord";

export class Vocab {
  private readonly _id: VocabId;
  private readonly _word: VocabWord;
  private _types: VocabType[];
  private _meanings: VocabMeaning[];
  private _examples: VocabExample[];

  constructor(
    id: VocabId,
    word: VocabWord,
    types: VocabType[],
    meanings: VocabMeaning[],
    examples: VocabExample[],
  ) {
    this._id = id;
    this._word = word;
    this._types = types;
    this._meanings = meanings;
    this._examples = examples;
  }

  public get id(): VocabId {
    return this._id;
  }

  public get word(): VocabWord {
    return this._word;
  }

  public get types(): VocabType[] {
    return this._types;
  }

  public get meanings(): VocabMeaning[] {
    return this._meanings;
  }

  public get examples(): VocabExample[] {
    return this._examples;
  }
}
