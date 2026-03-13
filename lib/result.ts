export class Result<T, E> {
  private readonly isSuccess: boolean;
  private readonly value?: T;
  private readonly error?: E;

  private constructor(isSuccess: boolean, value?: T, error?: E) {
    this.isSuccess = isSuccess;
    this.value = value;
    this.error = error;
  }

  static ok<T, E>(value?: T): Result<T, E> {
    return new Result<T, E>(true, value);
  }

  static fail<T, E>(error?: E): Result<T, E> {
    return new Result<T, E>(false, undefined, error);
  }

  public isOk(): boolean {
    return this.isSuccess;
  }

  public isFail(): boolean {
    return !this.isSuccess;
  }

  public getValue(): T {
    if (!this.isSuccess) {
      throw new Error('Invalid Operation');
    }
    return this.value as T;
  }

  public getError(): E {
    if (this.isSuccess) {
      throw new Error('Invalid Operation');
    }
    return this.error as E;
  }
}
