import { DatabaseConnector } from "@/shared/models/infrastructure/database/DatabaseConnector";
import { Customer } from "../../domain/entities/Customer";
import { CustomerMap } from "../../domain/mappers/CustomerMap";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";


export class CustomerRepositoryImpl implements CustomerRepository{
  private database: DatabaseConnector;

  constructor(database: DatabaseConnector){
    this.database = database;
  }
  async customerCollection(){
    return await this.database.collection("customers")
  }

  async saveCustomer(Customer: Customer): Promise<boolean>{
    await this.database.connect()
    let CustomerPersistence = CustomerMap.toPersistence(Customer);
    const result =  await (await this.customerCollection()).insertOne(CustomerPersistence);
    await this.database.close()

    if(result.insertedCount === 1){
      return true;
    }
    return false;

    
  }
  async findByName(name: string): Promise<any[]>{

    const query = { name }
    await this.database.connect();
    const result =  await (await this.customerCollection()).find(query)
    const resultArray = await result.toArray();
    

    return resultArray;
    
  }

  async findById(_id: string): Promise<any>{

    const query = { _id }
    await this.database.connect();
    const result =  await (await this.customerCollection()).findOne(query)
      
  
    return result;
      
    }

  async deleteCustomer(_id: string): Promise<boolean>{

    const query = { _id }
    await this.database.connect();
    const result =  await (await this.customerCollection()).deleteOne(query)
    console.log("del", result)
    if(result.ok == 1){
      return true
    }
      
  
    return false;
      
    }

  
  async updateCustomerName(_id: string, name: string): Promise<boolean> {

    const query = { _id }
    const data = { name }
    await this.database.connect();
    const result =  await (await this.customerCollection()).updateOne(query, {$set: name})
    console.log("del", result)
    if(result.ok == 1){
      return true
    }
      
  
    return false;
        
  }


}