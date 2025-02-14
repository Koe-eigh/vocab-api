export abstract class HttpError extends Error {
  private _status: number;
  private _message: string;

  constructor(status: number, message: string) {
    super(message);
    this._status = status;
    this._message = message;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  public get status(): number {
    return this._status;
  }

  public get message(): string {
    return this._message;
  }

  body(): { status: number; message: string } {
    return {
      status: this._status,
      message: this._message,
    };
  }
}
