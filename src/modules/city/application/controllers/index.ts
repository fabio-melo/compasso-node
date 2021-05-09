import { CityRepositoryImpl } from "../infrastructure/repositories/CityRepositoryImpl";
import { CreateCityController } from "./CreateCityController";


const repo = new CityRepositoryImpl();

export const createCityController = new CreateCityController(repo);
