import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { ValueObject } from "@/shared/models/domain/ValueObject";
import { validateString } from "@/shared/validators/validateString";


export class CityName extends ValueObject<string>{
    
    private constructor (value: string){
        super(value);
        Object.freeze(this);
    }

    static create (value: string): CityName | InvalidParameterError {
        if(!validateString(value)){
            return new InvalidParameterError("name");
        }
        return new CityName(value);
    }


}