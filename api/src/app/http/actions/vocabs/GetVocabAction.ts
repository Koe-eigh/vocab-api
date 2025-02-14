import { Request, Response } from 'express'

import { DIContainer } from '../../../DI/DIContainer'

import { GetVocabInput } from '../../../../core/vocabs/queries/inputs/GetVocabInput'
import { IGetVocabQuery } from '../../../../core/vocabs/queries/IGetVocabQuery'
import { handleErrorAsHttpError } from '../../utils/actions'

export const GetVocabAction = async (req: Request, res: Response) => {
  try {
    const getVocabQuery: IGetVocabQuery = DIContainer.resolve('IGetVocabQuery')
    const input = new GetVocabInput(parseInt(req.params.id))
    const vocab = await getVocabQuery.execute(input)
    res.status(200).json(vocab)
  } catch (e) {
    const httpError = handleErrorAsHttpError(e)
    res.status(httpError.status).json(httpError.body())
  }
}
