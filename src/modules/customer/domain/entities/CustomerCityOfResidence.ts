import { City } from "@/modules/city/domain/entities/City";
import { CityMap, CityProps } from "@/modules/city/domain/mappers/CityMap";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { ValueObject } from "@/shared/models/domain/ValueObject";
import { validateString } from "@/shared/validators/validateString";


export class CustomerCityOfResidence extends ValueObject<City>{
    
    private constructor (value: City){
        super(value);
        Object.freeze(this);
    }

    static create (value: CityProps): CustomerCityOfResidence | InvalidParameterError {
        const city = CityMap.toEntity(value);
        if(city instanceof InvalidParameterError ){
            return new InvalidParameterError("CustomerCityOfResidence");
        }
        return new CustomerCityOfResidence(city);
    }

}