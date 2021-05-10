import { City } from "@/modules/city/domain/entities/City";
import { InvalidParameterError } from "@/shared/errors/InvalidParameterError";
import { expect } from "chai";

describe('Criar entidade City', () => {
  it('deve retornar uma nova cidade criada', async () => {
    const cityToAdd = {
      name: "João Pessoa",
      state: "Paraíba"
    }
    
    const city = City.create(cityToAdd);

    expect(city).to.be.an.instanceOf(City)
    
    // expect(city).to.be
  })

});


describe('Criar entidade City com nome vazio', () => {
  it('deve retornar InvalidParameterError', async () => {
    const cityToAdd = {
      name: "",
      state: "Paraíba"
    }
    
    const city = City.create(cityToAdd);

    expect(city).to.be.an.instanceOf(InvalidParameterError)
    
    // expect(city).to.be
  })

});


describe('Criar entidade City com estado vazio', () => {
  it('deve retornar InvalidParameterError', async () => {
    const cityToAdd = {
      name: "João Pessoa",
      state: ""
    }
    
    const city = City.create(cityToAdd);

    expect(city).to.be.an.instanceOf(InvalidParameterError)
    
    // expect(city).to.be
  })

});
