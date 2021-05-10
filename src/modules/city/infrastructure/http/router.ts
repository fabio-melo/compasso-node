import express from 'express'
import { FindCityByNameUseCase } from '../../application/use-cases/FindCityByNameUseCase';
import { concreteUseCaseFactory } from '../container/concreteUseCaseFactory';
import asyncHandler from "express-async-handler"
import { FindCityByStateUseCase } from '../../application/use-cases/FindCityByStateUseCase';
import { CreateCityUseCase } from '../../application/use-cases/CreateCityUseCase';

const cityRouter = express.Router();

function handle(useCaseClass: any){
  // forma DRY de criar a rota.
  return asyncHandler(async (req, res) => {
    const useCase =  concreteUseCaseFactory(req,res, useCaseClass);
    return await useCase.execute();
  })

}

cityRouter.get("/find-by-name/", handle(FindCityByNameUseCase));
cityRouter.get("/find-by-state/", handle(FindCityByStateUseCase));
cityRouter.post("/create", handle(CreateCityUseCase));

export { cityRouter }