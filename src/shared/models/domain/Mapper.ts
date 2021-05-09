
export abstract class Mapper<T> {
  
  abstract toDomain (raw: any): T;
  abstract toPersistence (t: T): any;

}