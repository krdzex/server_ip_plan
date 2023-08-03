export class ValidationException extends Error {
  errors: { [key: string]: string };

  constructor(errors: { [key: string]: string }) {
    super("Validation failed");
    this.errors = errors;
  }
}