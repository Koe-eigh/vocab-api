import { GetVocabInputPort } from './inputs/GetVocabInputPort'
import { VocabReadModel } from './readModels/VocabReadModel'

export interface IGetVocabQuery {
  execute(input: GetVocabInputPort): Promise<VocabReadModel>
}
