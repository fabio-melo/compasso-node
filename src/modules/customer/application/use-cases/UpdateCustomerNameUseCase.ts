import { GenericController } from "@/application/controllers/GenericController";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { UseCase } from "@/shared/models/domain/UseCase";
import { CustomerMap } from "../../domain/mappers/CustomerMap";
import { CustomerRepository } from "../../domain/repositories/CustomerRepository";

export class UpdateCustomerUseCase implements UseCase{
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
      const { name } = this.CustomerController.getData();
      const { _id } = this.CustomerController.getParams();

      let customer = await this.CustomerRepo.findById(_id);
      
      if(customer == null){
        return this.CustomerController.notFound("cliente não encontrado");
      }
      // substitui
      customer.name = name;
      // verificar consistência
      if (CustomerMap.toEntity(customer) instanceof InvalidParameterError){
        return this.CustomerController.fail('nome inválido');
      }

      const results = await this.CustomerRepo.updateCustomerName(_id, name)

      if(results){
        return this.CustomerController.ok(customer);
      }
      return this.CustomerController.fail("erro no salvamento");


    } catch (err) {
      console.log(err)
      return this.CustomerController.fail("erro inesperado");
    }
  }
}