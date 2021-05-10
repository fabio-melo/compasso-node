import { GenericController } from "@/application/controllers/GenericController";
import { UseCase } from "@/shared/models/domain/UseCase";
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
      const CustomerData = this.CustomerController.getQuery() as unknown as FindCustomerByNameDTO;
      console.log("params", CustomerData)
      
      const results = await this.CustomerRepo.findByName(CustomerData.name);
      return this.CustomerController.ok(results);

    } catch (err) {
      console.log(err);
      return this.CustomerController.fail("erro inesperado");
    }
  }
}