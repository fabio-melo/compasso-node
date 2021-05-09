// import * as CityName from "../domain

import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { Entity } from "@/shared/models/domain/Entity";
import { CityName } from "./CityName";
import { CityState } from "./CityState";

interface ICity{
  name: string,
  state: string
}

export class City implements Entity<City> {
  public readonly name: CityName;
  public readonly state: CityState;

  private constructor(name: CityName, state: CityState) {
    this.name = name
    this.state = state
  }

  public static create(city: ICity){
    const nameOrError = CityName.create(city.name);
    const stateOrError = CityState.create(city.state);

    if(nameOrError instanceof InvalidParameterError){
      return new InvalidParameterError("city");
    }
    if(stateOrError instanceof InvalidParameterError){
      return new InvalidParameterError("state");
    }

    return new City(nameOrError, stateOrError);
  }
}
