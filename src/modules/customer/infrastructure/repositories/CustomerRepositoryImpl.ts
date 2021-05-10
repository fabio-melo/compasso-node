import { DatabaseConnector } from "@/shared/models/infrastructure/database/DatabaseConnector";
import { Customer } from "../../domain/entities/Customer";
import { CustomerMap } from "../../domain/mappers/CustomerMap";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";


export class CustomerRepositoryImpl implements CustomerRepository{
  private database: DatabaseConnector;

  constructor(database: DatabaseConnector){
    this.database = database;
  }

  async checkIfCustomerAlreadyExists(name: string, state: string): Promise<boolean> {
    await this.database.connect()
    const CustomerQuery = { name, state}
    const result = await (await this.database.collection("cities")).find(CustomerQuery).toArray()
    console.log("result", result.length > 0)
    // await this.database.close()
    return (result.length > 0);
  }

  async saveCustomer(Customer: Customer): Promise<boolean>{
    await this.database.connect()
    let CustomerPersistence = CustomerMap.toPersistence(Customer);
    const result =  await (await this.database.collection("cities")).insertOne(CustomerPersistence);
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