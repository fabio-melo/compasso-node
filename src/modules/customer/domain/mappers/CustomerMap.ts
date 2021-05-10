import { Mapper } from "@/shared/models/domain/Mapper";
import { Customer, ICustomer } from "../entities/Customer";


export class CustomerMap implements Mapper<Customer>{
  static toEntity(raw: ICustomer) {
    // this._id = raw._id
    // this.name = raw.name
    // this.birthdate = raw.birthdate
    // this.cityOfResidence = raw.cityOfResidence

    // return Customer.create(raw);
  }
  static toPersistence(customer: Customer){
    return {
      // name: city.name.value.toString(),
      // state: city.state.value.toString(),
    };
  }
    
}