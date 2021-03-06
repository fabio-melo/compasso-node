import { ValueObject } from "./ValueObject";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { uuidValidateV4 } from "@/shared/validators/validateUUID";
import { generateID } from "@/shared/utils/generateID";

export class UniqueID extends ValueObject<string>{

  private constructor(id_: string){
    super(id_)
  }

  static create(id_: string | null): UniqueID | InvalidParameterError{
    if(id_ == null){
      let id = generateID();
      return new UniqueID(id);
    }
    if(uuidValidateV4(id_)){
      return new UniqueID(id_)
    }
    return new InvalidParameterError("uuid inválido")
  }

}