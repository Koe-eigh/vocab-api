import { IntegerId } from "../../../utils/id/IntegerId";
import { GetVocabInputPort } from "./GetVocabInputPort";

export class GetVocabInput implements GetVocabInputPort {
  constructor(private readonly _vocabId: number) {
    IntegerId.validate(_vocabId);
    this._vocabId = _vocabId;
  }

  vocabId(): number {
    return this._vocabId;
  }
}
