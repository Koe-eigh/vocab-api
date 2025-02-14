import { HttpError } from "./HttpError";

export class MethodNotAllowed extends HttpError {
  constructor(message = "許可されていないHTTPメソッドです。") {
    super(405, message);
  }
}
