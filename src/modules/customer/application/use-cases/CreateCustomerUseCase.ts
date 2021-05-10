import { GenericController } from "@/shared/application/controllers/GenericController";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { UseCase } from "@/shared/models/domain/UseCase";
import { CustomerMap } from "../../domain/mappers/CustomerMap";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";


interface CreateCustomerDTO {
  id_: any, // null ou string 
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
      const customerData = this.CustomerController.getData() as CreateCustomerDTO;

      const customer = CustomerMap.toEntity(customerData);
      if(customerData.id_ != null){
        const checkExistence = await this.CustomerRepo.findById(customerData.id_);

        if(checkExistence != null){
          return this.CustomerController.fail("já existe cliente com esse ID");
        }
      }
      if(customer instanceof InvalidParameterError){
        return this.CustomerController.fail("dados inválidos")
      }
      const newCustomerData = CustomerMap.toPersistence(customer);

      await this.CustomerRepo.saveCustomer(customer);

      return this.CustomerController.created(newCustomerData);


    } catch (err) {
      console.log(err)
      return this.CustomerController.fail("erro inesperado");
    }
  }
}