import express from 'express'
import { concreteUseCaseFactory } from '../container/concreteUseCaseFactory';
import asyncHandler from "express-async-handler"
import { FindCustomerByNameUseCase } from '../../application/use-cases/FindCustomerByNameUseCase';
import { DeleteCustomerUseCase } from '../../application/use-cases/DeleteCustomerUseCase';
import { FindCustomerByIdUseCase } from '../../application/use-cases/FindCustomerByIdUseCase';
import { UpdateCustomerUseCase } from '../../application/use-cases/UpdateCustomerNameUseCase';

const cityRouter = express.Router();

function handle(useCaseClass: any){
  // forma DRY de criar a rota.
  return asyncHandler(async (req, res) => {
    const useCase =  concreteUseCaseFactory(req,res, useCaseClass);
    return await useCase.execute();
  })

}
cityRouter.get("/find-by-name/", handle(FindCustomerByNameUseCase));
cityRouter.get("/customer/:_id", handle(FindCustomerByIdUseCase));
cityRouter.delete("/customer/:_id", handle(DeleteCustomerUseCase));
cityRouter.put("/customer/:_id", handle(UpdateCustomerUseCase));

// customerRouter.use('/user', );

// All routes go here 

export { cityRouter }