import { HttpError } from './HttpError'

export class Unauthorized extends HttpError {
  constructor(message = '認証が必要です。') {
    super(401, message)
  }
}
