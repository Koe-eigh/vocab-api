import { HttpError } from "./HttpError";

export class ServiceUnavailableError extends HttpError {
  constructor(message = "サービスが一時的に利用できません。") {
    super(503, message);
  }
}
