import { Customer } from "../entities/Customer";

export interface CustomerRepository {
  saveCustomer(customer: Customer): Promise<boolean>;
  findByName(name: string): Promise<any[]>
  findById(id: string): Promise<any>
  // checkIfCustomerAlreadyExists(name: string): Promise<boolean>
  updateCustomerName(id_: string, name: string): Promise<boolean>
  deleteCustomer(id: string): Promise<boolean>
}