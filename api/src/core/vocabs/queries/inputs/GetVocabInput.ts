import { GetVocabInputPort } from "./GetVocabInputPort";

export class GetVocabInput implements GetVocabInputPort {
  constructor(private readonly _vocabId: number) {}

  vocabId(): number {
    return this._vocabId;
  }
}
