export class BaseHttpResponse {
  constructor(
    public readonly data: any = {},
    public readonly msg: string | null = null,
    public readonly errors: { [key: string]: string } | null = null,
    public readonly statusCode: number
  ) {}

  static success(data: any, statusCode = 200) {
    return new BaseHttpResponse(data, null, null, statusCode);
  }

  static failed(msg: string, statusCode = 400) {
    return new BaseHttpResponse(null, msg, null, statusCode);
  }

  static validationFailed(
    msg: string,
    erros: { [key: string]: string },
    statusCode = 422
  ) {
    return new BaseHttpResponse(null, msg, erros, statusCode);
  }
}
