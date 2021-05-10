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

  async findById(id_: string): Promise<any>{

    const query = { id_ }
    await this.database.connect();
    const result =  await (await this.customerCollection()).findOne(query)
  
    return result;
      
    }

  async deleteCustomer(id_: string): Promise<boolean>{

    const query = { id_ }
    await this.database.connect();
    const result =  await (await this.customerCollection()).deleteOne(query);

    if(result.deletedCount === 1){
      return true
    }
      
  
    return false;
      
    }

  
  async updateCustomerName(id_: string, name: string): Promise<boolean> {

    const query = { id_ }
    const data = { name }
    await this.database.connect();
    const result =  await (await this.customerCollection()).updateOne(query, {$set: data})
    if(result.result.ok == 1){
      return true
    }
      
  
    return false;
        
  }


}