import { DatabaseConnector } from "@/shared/models/infrastructure/database/DatabaseConnector";
import { City } from "../../domain/entities/Customer";
import { CityMap } from "../../domain/mappers/CustomerMap";
import { CityRepository } from "../../domain/repositories/CustomerRepository";


export class CityRepositoryImpl implements CityRepository{
  private database: DatabaseConnector;

  constructor(database: DatabaseConnector){
    this.database = database;
  }

  async checkIfCityAlreadyExists(name: string, state: string): Promise<boolean> {
    await this.database.connect()
    const cityQuery = { name, state}
    const result = await (await this.database.collection("cities")).find(cityQuery).toArray()
    console.log("result", result.length > 0)
    // await this.database.close()
    return (result.length > 0);
  }

  async saveCity(city: City): Promise<boolean>{
    await this.database.connect()
    let cityPersistence = CityMap.toPersistence(city);
    const result =  await (await this.database.collection("cities")).insertOne(cityPersistence);
    await this.database.close()

    if(result.insertedCount === 1){
      return true;
    }
    return false;

    
  }
  async findByName(name: string): Promise<any[]>{

    console.log("name", name)
    const query = { name }
    await this.database.connect();
    const result =  await (await this.database.collection("cities")).find(query)
    const resultArray = await result.toArray();
    console.log("aa", resultArray)
    

    return resultArray;
    
    }
  
  async findByState(state: string): Promise<any[]>{

    const query = { state }
    await this.database.connect();
    const result =  await (await this.database.collection("cities")).find(query).toArray();
    await this.database.close()

    return result;
  }

}