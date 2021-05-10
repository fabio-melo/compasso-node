import { GenericController } from "@/shared/application/controllers/GenericController";
import MongoConnector from "@/infrastructure/database";
import express from "express";
import { CustomerRepositoryImpl } from "../repositories/CustomerRepositoryImpl";


export function concreteUseCaseFactory(req: express.Request, res: express.Response, useCaseClass: any): any{

  const controller = new GenericController(req,res);
  
  const database = new MongoConnector();
  const repo = new CustomerRepositoryImpl(database);
  
  return new useCaseClass(repo, controller);
}
