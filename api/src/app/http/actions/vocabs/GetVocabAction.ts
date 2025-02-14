import { Request, Response } from 'express'

import { DIContainer } from '../../../DI/DIContainer'

import { GetVocabInput } from '../../../../core/vocabs/queries/inputs/GetVocabInput'
import { IGetVocabQuery } from '../../../../core/vocabs/queries/IGetVocabQuery'

export const GetVocabAction = async (req: Request, res: Response) => {
  const getVocabQuery: IGetVocabQuery = DIContainer.resolve('IGetVocabQuery')
  const input = new GetVocabInput(parseInt(req.params.id))
  const word = await getVocabQuery.execute(input)
  res.status(200).json(word)
}
