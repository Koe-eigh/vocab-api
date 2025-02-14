import { Request, Response } from 'express'

import { DIContainer } from '../../../DI/DIContainer'

import { GetVocabsInput } from '../../../../core/vocabs/queries/inputs/GetVocabsInput'
import { IGetVocabsQuery } from '../../../../core/vocabs/queries/IGetVocabsQuery'
import { handleErrorAsHttpError } from '../../utils/actions'

export const GetVocabsAction = async (req: Request, res: Response) => {
  try {
    const getVocabsQuery: IGetVocabsQuery =
      DIContainer.resolve('IGetVocabsQuery')
    const input = new GetVocabsInput()
    const vocabs = await getVocabsQuery.execute(input)
    res.status(200).json(vocabs)
  } catch (e) {
    const httpError = handleErrorAsHttpError(e)
    res.status(httpError.status).json(httpError.body)
  }
}
