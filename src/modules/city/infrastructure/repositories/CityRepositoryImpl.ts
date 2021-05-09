import { CityRepository } from "../../repositories/CityRepository";
import Database from "@/infrastructure/database"
import { City } from "../../domain/City";
import { CityMapper } from "../../mappers/CityMapper";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";


export class CityRepositoryImpl implements CityRepository{
  private database: Database;

  constructor(){
    this.database = new Database();
  }

  async saveCity(city: City): Promise<boolean>{
    let cityPersistence = CityMapper.toPersistence(city);
    await this.database.connect();
    const result =  await (await this.database.collection("cities")).insertOne(cityPersistence);
    if(result.insertedCount === 1){
      return true;
    }
    return false;

    
  }
  async findByName(name: string): Promise<any[]>{


    const query = { name }
    await this.database.connect();
    const result =  await (await this.database.collection("cities")).find(query).toArray();
    
    let cities: any[] = []

    result.map((k) => {
      const cityOrError = CityMapper.toEntity(k)
      if(cityOrError instanceof City){
        cities.push(cityOrError)
      }
    })


    return cities;
    
    }
  
  async findByState(state: string): Promise<any[]>{


    const query = { state }
    await this.database.connect();
    const result =  await (await this.database.collection("cities")).find(query).toArray();
    
    let cities: any[] = []

    result.map((k) => {
      const cityOrError = CityMapper.toEntity(k)
      if(cityOrError instanceof City){
        cities.push(cityOrError)
      }
    })

    return cities;
  }

}