import { BaseController } from "@/shared/models/infrastructure/http/BaseController";
import express from "express";
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
      // todo: caso de uso --
      let city = CityMapper.toEntity(body);
      if (city instanceof City) {
        let result = await this.repo.saveCity(city);
        if (result) {
          return this.created(res);
        }
        return this.fail(res, 'Erro Inesperado');

      }
    }

    catch {
      return this.fail(res, 'Erro Inesperado')

    }

  }
}
