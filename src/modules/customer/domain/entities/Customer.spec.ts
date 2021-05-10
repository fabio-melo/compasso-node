import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { expect } from "chai";

import { Customer, ICustomer } from "./Customer"

describe('Criar entidade Customer', () => {
  it('deve retornar uma nova entidade', async () => {
    
    const customerToAdd: ICustomer = {
      _id: null,
      name: "Fábio Melo",
      birthdate: "1990-02-03",
      cityOfResidence: {
        name: "João Pessoa",
        state: "PB"
      },
      gender: "Male",
    }
    
    const customer = Customer.create(customerToAdd);

    expect(customer).to.be.an.instanceOf(Customer)
    
    // expect(city).to.be
  })

});

