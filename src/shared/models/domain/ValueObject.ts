import { shallowEqual } from "shallow-equal-object";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";

export abstract class ValueObject<T> {
  public readonly value: T;

  constructor (value: T) {
    this.value = value;
    Object.freeze(this);
  }

  /**
  * Fábrica que retorna uma instância do value-object ou erro
  * @abstract
  */

  //  abstract create(): T | InvalidParameterError;

  /**
  * Verifica a igualdade comparando os valores internos da classe
  * @abstract
  */

  public equals (vo?: ValueObject<T>) : boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.value === undefined) {
      return false;
    }
    return shallowEqual(this.value, vo.value)
  }
}