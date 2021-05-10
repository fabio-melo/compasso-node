import { GenericController } from "@/shared/application/controllers/GenericController";
import { UseCase } from "@/shared/models/domain/UseCase";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";


interface DeleteCustomerDTO {
  _id: string,
}

export class DeleteCustomerUseCase implements UseCase{
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
      const {_id} = this.CustomerController.getParams() as unknown as DeleteCustomerDTO;

      const result = await this.CustomerRepo.deleteCustomer(_id);
      if(result){
        return this.CustomerController.ok("cliente deletado com sucess")
      }
      return this.CustomerController.fail("cliente não existe ou já foi deletado")
      // testar se a cidade existe


    } catch (err) {
      console.log(err)
      return this.CustomerController.fail("erro inesperado");
    }
  }
}