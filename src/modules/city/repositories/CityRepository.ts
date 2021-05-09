import { City } from "../domain/City";

export interface CityRepository {
  saveCity(city: City): Promise<boolean>;
  findByName(name: string): Promise<City[]>
  findByState(state: string): Promise<City[]>
}