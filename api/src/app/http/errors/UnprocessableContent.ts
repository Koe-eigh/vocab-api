import { HttpError } from "./HttpError";

export class UnprocessableContent extends HttpError {
  constructor(message = "リクエストの内容を処理できません。") {
    super(422, message);
  }
}
