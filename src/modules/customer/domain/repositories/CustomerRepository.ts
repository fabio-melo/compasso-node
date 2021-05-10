import { Customer } from "../entities/Customer";

export interface CustomerRepository {
  saveCustomer(customer: Customer): Promise<boolean>;
  findByName(name: string): Promise<Customer[]>
  findById(id: string): Promise<Customer[]>
  // checkIfCustomerAlreadyExists(name: string): Promise<boolean>
  updateCustomerName(id_: string, name: string): Promise<boolean>
  deleteCustomer(id: string): Promise<boolean>
}