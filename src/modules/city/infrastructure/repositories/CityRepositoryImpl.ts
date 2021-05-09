import { DatabaseConnector } from "@/shared/models/infrastructure/database/DatabaseConnector";
import { City } from "../../domain/entities/City";
import { CityMap } from "../../domain/mappers/CityMap";
import { CityRepository } from "../../domain/repositories/CityRepository";


export class CityRepositoryImpl implements CityRepository{
  private database: DatabaseConnector;

  constructor(database: DatabaseConnector){
    this.database = database;
  }

  async checkIfCityAlreadyExists(name: string, state: string): Promise<boolean> {
    const cityQuery = { name, state}
    const result = await this.database.collection("cities").find(cityQuery).toArray()
    return (result.length > 0);
  }

  async saveCity(city: City): Promise<boolean>{
    let cityPersistence = CityMap.toPersistence(city);
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

    return result;
    
    }
  
  async findByState(state: string): Promise<any[]>{

    const query = { state }
    await this.database.connect();
    const result =  await (await this.database.collection("cities")).find(query).toArray();
    
    return result;
  }

}