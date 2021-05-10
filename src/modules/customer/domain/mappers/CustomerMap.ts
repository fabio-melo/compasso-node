import { CityMap } from "@/modules/city/domain/mappers/CityMap";
import { Mapper } from "@/shared/models/domain/Mapper";
import { Customer, ICustomer } from "../entities/Customer";


export class CustomerMap implements Mapper<Customer>{
  static toEntity(raw: ICustomer) {
    return Customer.create(raw)
  }
  static toPersistence(customer: Customer){
    return {
        id_: customer.id_.value.toString(), // null ou string 
        name: customer.name.value.toString(), 
        birthdate: customer.birthdate.value.toString(), 
        cityOfResidence: CityMap.toPersistence(customer.cityOfResidence.value), 
        gender: customer.gender.value.toString()
      }
    }
}
    