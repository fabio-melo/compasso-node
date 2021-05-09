
export class InvalidParameterError extends Error {
  constructor (parameterName: string) {
    super(`Invalid parameter: ${parameterName}`);
    this.name = 'InvalidParameterError';
  }
}