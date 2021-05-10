import express from 'express'
import { concreteUseCaseFactory } from '../container/concreteUseCaseFactory';
import asyncHandler from "express-async-handler"
import { FindCustomerByNameUseCase } from '../../application/use-cases/FindCustomerByNameUseCase';
import { DeleteCustomerUseCase } from '../../application/use-cases/DeleteCustomerUseCase';
import { FindCustomerByIdUseCase } from '../../application/use-cases/FindCustomerByIdUseCase';
import { UpdateCustomerUseCase } from '../../application/use-cases/UpdateCustomerNameUseCase';
import { CreateCustomerUseCase } from '../../application/use-cases/CreateCustomerUseCase';


function handle(useCaseClass: any){
  // forma DRY de criar a rota.
  return asyncHandler(async (req, res) => {
    const useCase =  concreteUseCaseFactory(req,res, useCaseClass);
    return await useCase.execute();
  })

}

const customerRouter = express.Router();

customerRouter.get("/find-by-name/", handle(FindCustomerByNameUseCase));
customerRouter.get("/customer/:id_", handle(FindCustomerByIdUseCase));
customerRouter.delete("/customer/:id_", handle(DeleteCustomerUseCase));
customerRouter.put("/customer/:id_", handle(UpdateCustomerUseCase));
customerRouter.post("/create", handle(CreateCustomerUseCase));


export { customerRouter }