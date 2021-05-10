import { GenericController } from "@/shared/application/controllers/GenericController";
import { UseCase } from "@/shared/models/domain/UseCase";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";


interface FindCustomerByStateDTO {
  id_: string,
}

export class FindCustomerByIdUseCase implements UseCase{
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
      const { id_ } = this.CustomerController.getParams() as unknown as FindCustomerByStateDTO;

      const results = await this.CustomerRepo.findById(id_);
      if(results == null){
        return this.CustomerController.notFound("cliente não encontrado");
      }
      return this.CustomerController.ok(results);

    } catch (err) {
      console.log(err);
      return this.CustomerController.fail("erro inesperado");
    }
  }
}