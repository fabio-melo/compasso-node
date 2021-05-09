import { Mapper } from "@/shared/models/mappers/Mapper";
import { City } from "../domain/City";


export interface CityProps {
  name: string,
  state: string,
}

export class CityMapper implements Mapper<City>{
  static toEntity(raw: CityProps) {
    let city = raw.name;
    let state = raw.state;

    return City.create(raw);
  }
  static toPersistence(city: City){
    return {
      name: city.name.value.toString(),
      state: city.state.value.toString(),
    };
  }
  // toPersistenc
    
}