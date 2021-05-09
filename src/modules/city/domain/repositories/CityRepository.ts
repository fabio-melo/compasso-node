import { City } from "../entities/City";

export interface CityRepository {
  saveCity(city: City): Promise<boolean>;
  findByName(name: string): Promise<City[]>
  findByState(state: string): Promise<City[]>
  checkIfCityAlreadyExists(name: string, state: string): Promise<boolean>
}