import { HttpError } from "./HttpError";

export class Conflict extends HttpError {
  constructor(message = "リクエストが競合しています。") {
    super(409, message);
  }
}
