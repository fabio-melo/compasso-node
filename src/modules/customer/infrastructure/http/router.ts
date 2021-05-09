import { GenericController } from '@/application/controllers/GenericController';
import MongoConnector from '@/infrastructure/database';
import express from 'express'
import { FindCityByNameUseCase } from '../../application/use-cases/FindCustomerByNameUseCase';
import { concreteUseCaseFactory } from '../container/concreteUseCaseFactory';
import { CityRepositoryImpl } from '../repositories/CustomerRepositoryImpl';
import asyncHandler from "express-async-handler"
import { FindCityByStateUseCase } from '../../application/use-cases/FindCustomerByIdUseCase';
import { CreateCityUseCase } from '../../application/use-cases/CreateCustomerUseCase';

const cityRouter = express.Router();

function handle(useCaseClass: any){
  // forma DRY de criar a rota.
  return asyncHandler(async (req, res) => {
    const useCase =  concreteUseCaseFactory(req,res, useCaseClass);
    return await useCase.execute();
  })

}

console.log("router city")

cityRouter.get("/find-by-name/", handle(FindCityByNameUseCase));
cityRouter.get("/find-by-state/", handle(FindCityByStateUseCase));
cityRouter.post("/create", handle(CreateCityUseCase));

// customerRouter.use('/user', );

// All routes go here 

export { cityRouter }