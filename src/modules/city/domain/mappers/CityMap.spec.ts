import { expect } from "chai";
import { City } from "../entities/City";
import { CityMap } from "./CityMap";


describe('Objeto serializável para City', () => {
  it('deve transformar City em um objeto serializável', async () => {
    const cityToAdd = {
      name: "João Pessoa",
      state: "Paraíba"
    }
    
    const city = CityMap.toEntity(cityToAdd);

    expect(city).to.be.an.instanceOf(City);
    
  })

});


describe('City para Objeto serializável', () => {
  it('deve transformar City em um objeto serializável', async () => {
    const cityToAdd = {
      name: "João Pessoa",
      state: "Paraíba"
    }
    
    // executamos o primeiro teste novamente
    const city = CityMap.toEntity(cityToAdd);

    expect(city).to.be.an.instanceOf(City);
    
    // verificamos se a volta dá certo
    if(city instanceof City){
      const result = CityMap.toPersistence(city);
      expect(result).to.eql(cityToAdd)  
    }

  })

});

