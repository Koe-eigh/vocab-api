import { HttpError } from './HttpError'

export class NotFound extends HttpError {
  constructor(message = 'リソースが見つかりません。') {
    super(404, message)
  }
}
