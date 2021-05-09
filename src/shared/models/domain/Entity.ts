import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";

export abstract class Entity<T> {

  /**
  * Fábrica que retorna uma instância da entidade ou erro
  * @abstract
  */
  
  // abstract create(): T | InvalidParameterError;

}