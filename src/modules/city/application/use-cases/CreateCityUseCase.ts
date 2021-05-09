import { GenericController } from "@/application/controllers/GenericController";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { UseCase } from "@/shared/models/domain/UseCase";
import { CityMap } from "../../domain/mappers/CityMap";
import { CityRepository } from "../../domain/repositories/CityRepository";


interface CreateCityDTO {
  name: string,
  state: string,
}

export class CreateCityUseCase implements UseCase{
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
      const cityData = this.cityController.getData() as CreateCityDTO;

      const city = CityMap.toEntity(cityData);
      if(city instanceof InvalidParameterError){
        return this.cityController.fail("dados inválidos")
      }

      // testar se a cidade existe
      if(await this.cityRepo.checkIfCityAlreadyExists(cityData.name, cityData.state)){
        return this.cityController.fail('cidade já está cadastrada');
      }
      console.log("salvarr")

      await this.cityRepo.saveCity(city);

      return this.cityController.created();


    } catch (err) {
      console.log(err)
      return this.cityController.fail("erro inesperado");
    }
  }
}