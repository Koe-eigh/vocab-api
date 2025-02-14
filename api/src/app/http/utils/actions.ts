import { HttpError } from '../errors/HttpError'
import { InternalServerError } from '../errors/InternalServerError'

/**
 * ErrorをHttpErrorにパースします
 * @param err
 * @returns HttpErrorを返します。
 */
export function handleErrorAsHttpError(err: unknown): HttpError {
  if (err instanceof HttpError) {
    return err
  } else {
    return new InternalServerError('サーバーエラーが発生しました。')
  }
}
