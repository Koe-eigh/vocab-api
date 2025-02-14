import { HttpError } from "./HttpError";

export class InternalServerError extends HttpError {
  constructor(message = "サーバーエラーが発生しました。") {
    super(500, message);
  }
}
