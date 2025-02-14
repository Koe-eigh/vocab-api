import { HttpError } from "./HttpError";

export class BadRequest extends HttpError {
  constructor(message = "不正なリクエストです。") {
    super(400, message);
  }
}
