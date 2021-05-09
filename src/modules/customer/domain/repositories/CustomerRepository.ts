import { Customer } from "../entities/Customer";

export interface CustomerRepository {
  saveCustomer(customer: Customer): Promise<boolean>;
  findByName(name: string): Promise<Customer[]>
  findById(id: string): Promise<City[]>
  checkIfCustomerAlreadyExists(name: string): Promise<boolean>
  updateCustomerName(id: string, customer: Customer): Promise<boolean>
  deleteCustomer(id: string): Promise<boolean>
}