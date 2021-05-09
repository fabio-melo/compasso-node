import { GenericController } from "@/application/controllers/GenericController";
import { UseCase } from "@/shared/models/domain/UseCase";
import { CityRepository } from "../../domain/repositories/CityRepository";


interface FindCityByStateDTO {
  state: string,
}

export class FindCityByStateUseCase implements UseCase{
  private cityRepo: CityRepository;
  private cityController: GenericController;

  constructor (
    cityRepo: CityRepository,
    cityController: GenericController
  ) 
  {
    this.cityController = cityController,
    this.cityRepo = cityRepo
  }
  
  public async execute (): Promise<any> {
    
    try {
      const cityData = this.cityController.getData() as FindCityByStateDTO;

      const results = await this.cityRepo.findByState(cityData.state);
            
      return this.cityController.ok(results);

    } catch (err) {
      console.log(err);
      return this.cityController.fail("erro inesperado");
    }
  }
}