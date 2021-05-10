import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { Entity } from "@/shared/models/domain/Entity";
import { CustomerName } from "./CustomerName";
import { CustomerGender } from "./CustomerGender";
import { CustomerBirthDate } from "./CustomerBirthDate";
import { CustomerCityOfResidence } from "./CustomerCityOfResidence";
import { UniqueID } from "@/shared/models/domain/UniqueID";

export interface ICustomer {
  id_: any, // null ou string 
  name: string, 
  birthdate: string, 
  cityOfResidence: {
    name: string,
    state: string,
  }, 
  gender: string
}

export class Customer implements Entity<Customer> {

  public readonly id_: UniqueID;
  public readonly name: CustomerName //CustomerName;
  public readonly birthdate: CustomerBirthDate //CustomerBirthDate;
  public readonly cityOfResidence: CustomerCityOfResidence;
  public readonly gender: CustomerGender;


  private constructor(id_: UniqueID, name: CustomerName, gender: CustomerGender, birthdate: CustomerBirthDate, cityOfResidence: CustomerCityOfResidence) {
    this.id_ = id_
    this.name = name
    this.gender = gender
    this.birthdate = birthdate
    this.cityOfResidence = cityOfResidence
  }

  // não verifico o ID;

  public static create(customer: ICustomer) {

    const idOrError = UniqueID.create(customer.id_);
    if (idOrError instanceof InvalidParameterError){
      console.log("erro no id")
      return new InvalidParameterError("id")
    }

    const nameOrError = CustomerName.create(customer.name);
    if (nameOrError instanceof InvalidParameterError) {
      return new InvalidParameterError("name");
    }

    const genderOrError = CustomerGender.create(customer.gender);
    if (genderOrError instanceof InvalidParameterError) {
      return new InvalidParameterError("gender");
    }
    const birthdateOrError = CustomerBirthDate.create(customer.birthdate);
    if (birthdateOrError instanceof InvalidParameterError) {
      return new InvalidParameterError("birthdate");
    }

    const cityOfResidenceOrError = CustomerCityOfResidence.create(customer.cityOfResidence);
    if (cityOfResidenceOrError instanceof InvalidParameterError) {
      return new InvalidParameterError("cityOfResidence");
    }


    return new Customer(idOrError, nameOrError, genderOrError, birthdateOrError, cityOfResidenceOrError);

  }

  get age() {
    // definir utils - return age.
    return "22"
  }
}
