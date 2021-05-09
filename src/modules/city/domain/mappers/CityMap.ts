import { Mapper } from "@/shared/models/domain/Mapper";
import { City } from "../entities/City";


export interface CityProps {
  name: string,
  state: string,
}

export class CityMap implements Mapper<City>{
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
    
}