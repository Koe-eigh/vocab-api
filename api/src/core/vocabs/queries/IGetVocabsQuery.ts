import { GetVocabsInputPort } from "./inputs/GetVocabsInputPort";
import { VocabReadModel } from "./readModels/VocabReadModel";

export interface IGetVocabsQuery {
  execute(input: GetVocabsInputPort): Promise<VocabReadModel[]>;
}
