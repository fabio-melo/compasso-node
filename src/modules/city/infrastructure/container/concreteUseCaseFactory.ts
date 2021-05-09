import { GenericController } from "@/application/controllers/GenericController";
import MongoConnector from "@/infrastructure/database";
import express from "express";
import { CityRepositoryImpl } from "../repositories/CityRepositoryImpl";


export function concreteUseCaseFactory(req: express.Request, res: express.Response, useCaseClass: any): any{

  const controller = new GenericController(req,res);
  
  const database = new MongoConnector();
  const repo = new CityRepositoryImpl(database);
  
  return new useCaseClass(repo, controller);
}
