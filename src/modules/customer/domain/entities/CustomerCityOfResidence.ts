import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { ValueObject } from "@/shared/models/domain/ValueObject";
import { validateString } from "@/shared/validators/validateString";


export class CityState extends ValueObject<string>{
    
    private constructor (value: string){
        super(value);
        Object.freeze(this);
    }

    static create (value: string): CityState | InvalidParameterError {
        if(!validateString(value)){
            return new InvalidParameterError("state");
        }
        return new CityState(value);
    }

}