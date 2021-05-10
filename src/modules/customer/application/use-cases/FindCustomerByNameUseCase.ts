import { GenericController } from "@/shared/application/controllers/GenericController";
import { UseCase } from "@/shared/models/domain/UseCase";
import { CustomerMap } from "../../domain/mappers/CustomerMap";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";


interface FindCustomerByNameDTO {
  name: string,
}

export class FindCustomerByNameUseCase implements UseCase{
  private CustomerRepo: CustomerRepository;
  private CustomerController: GenericController;

  constructor (
    CustomerRepo: CustomerRepository,
    CustomerController: GenericController
  ) 
  {
    this.CustomerController = CustomerController,
    this.CustomerRepo = CustomerRepo
  }
  
  public async execute (): Promise<any> {
    
    try {
      const {name} = this.CustomerController.getQuery() as unknown as FindCustomerByNameDTO;
      
      let customer = await this.CustomerRepo.findByName(name);

      return this.CustomerController.ok(customer);

    } catch (err) {
      console.log(err);
      return this.CustomerController.fail("erro inesperado");
    }
  }
}