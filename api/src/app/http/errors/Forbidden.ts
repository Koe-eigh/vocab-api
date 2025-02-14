import { HttpError } from "./HttpError";

export class Forbidden extends HttpError {
  constructor(message = "アクセスが拒否されました。") {
    super(403, message);
  }
}
