// import * as CityName from "../domain

import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { Entity } from "@/shared/models/domain/Entity";
import { CityName } from "./CustomerName";
import { CityState } from "./CustomerGender";
import { City } from "@/modules/city/domain/entities/City";

interface ICustomer{
  _id: string, name: string, birthdate: string, cityOfResidence: string
}

export class Customer implements Entity<Customer> {
  public readonly name: string //CustomerName;
  public readonly birthdate: string //CustomerBirthDate;
  public readonly _id: string;
  public readonly cityOfResidence: City;


  private constructor(_id: string, name: string, gender: string, birthdate: string, cityOfResidence: City) {
    this._id = _id
    this.name = name
    this.birthdate = birthdate
    this.cityOfResidence = cityOfResidence
  }

  public static create(customer: ICustomer){
    // const nameOrError = CityName.create(city.name);
    // const stateOrError = CityState.create(city.state);

    // if(nameOrError instanceof InvalidParameterError){
    //   return new InvalidParameterError("city");
    // }
    // if(stateOrError instanceof InvalidParameterError){
    //   return new InvalidParameterError("state");
    // }

    // return new City(nameOrError, stateOrError);
  }
}
