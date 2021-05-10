import { GenericController } from "@/application/controllers/GenericController";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { UseCase } from "@/shared/models/domain/UseCase";
import { CustomerMap } from "../../domain/mappers/CustomerMap";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";


interface CreateCustomerDTO {
  _id: any, // null ou string 
  name: string, 
  birthdate: string, 
  cityOfResidence: {
    name: string,
    state: string,
  }, 
  gender: string
}

export class CreateCustomerUseCase implements UseCase{
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
      const CustomerData = this.CustomerController.getData() as CreateCustomerDTO;

      const Customer = CustomerMap.toEntity(CustomerData);
      if(Customer instanceof InvalidParameterError){
        return this.CustomerController.fail("dados inválidos")
      }

      await this.CustomerRepo.saveCustomer(Customer);

      return this.CustomerController.created();


    } catch (err) {
      console.log(err)
      return this.CustomerController.fail("erro inesperado");
    }
  }
}