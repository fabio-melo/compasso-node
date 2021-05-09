import express from "express";
import { BaseController } from "@/shared/models/infrastructure/http/BaseController";
import { City } from "../domain/City";
import { CityMapper } from "../mappers/CityMapper";
import { CityRepository } from "../repositories/CityRepository";


export class CreateCityController extends BaseController {
  private repo;

  constructor(repository: CityRepository) {
    super();
    this.repo = repository
  }


  async executeImpl(req: express.Request, res: express.Response): Promise<any> {
    try {
      const { body } = req;
      let { name } = body;

      let result = await this.repo.findByName(name);

      return this.fail(res, 'Erro Inesperado');

      }
    }

    catch {
      return this.fail(res, 'Erro Inesperado')

    }

  }
}
