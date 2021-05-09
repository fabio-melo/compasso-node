export abstract class UseCase{

  /**
  * Recebe um objeto serializado do JSON, executa a operação e (pode) retornar um objeto.
  * @abstract
  */
  
  // abstract execute(raw: any): any ;

}


// export interface UseCase<IRequest, IResponse> {
//   execute (request?: IRequest) : Promise<IResponse> | IResponse;
// }