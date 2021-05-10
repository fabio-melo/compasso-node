# compasso-node

## Objetivo

Este repositório engloba o desafio de código da Compasso UOL e foi criado utilizando os padrões SOLID, Clean Architecture e Domain-Driven Design

## Como executar:
Para executar no modo desenvolvimento:
```sh
yarn 
yarn dev
```
Para executar no modo produção
```sh
yarn 
yarn run-prod
```

--------------------

## Documentação

Um servidor swagger pode ser encontrado em http://localhost:3000/api/v1/docs, além disso, um arquivo de testes do postman está incluido na raiz do repositório.


## Suposições e Detalhes da Implementação

### Entitade City
- O nome da cidade não é uma chave única ou identificador (podem existir multiplas cidades com o mesmo nome, em diferentes estados OU no mesmo estado). [exemplo]([https://exame.com/brasil/os-nomes-mais-usados-para-batizar-cidades-no-brasil/])
- Portanto, Consultar cidade pelo nome retorna um array de cidades.
- O Caso de uso FindCityByName e FindCityByState aderem aos pré-requisitos,  em uma implementação subsequente poderiam ser entregues em uma única rota permitindo filtrar por nome, estado ou ambos via Query.


### Entidade Customer
- Idade é um dado computado através da data de nascimento;
- Cidade *não* é uma chave estrangeira para a entidade Cidade; (foge do escopo do projeto a criação de uma rotina de validação para verificação de existência do estado, e tratamento de erros para cadastros onde a cidade não existe.); 


## Comentários


- Devido ao escopo limitado do projeto, não achei válido aplicar o DDD por completo, pois geraria uma dezena de classes redundantes, causando uma sensação de *overengineering*: complexidade elevada para algo relativamente simples.

- Uma implementação subsequente nesta API , como uma documentação mais robusta, code-coverage maior, circuit-breaking, etc


---------------
## Casos de Uso Implementados

- Cadastrar cidade
- Cadastrar cliente
- Consultar cidade pelo nome
- Consultar cidade pelo estado
- Consultar cliente pelo nome
- Consultar cliente pelo Id
- Remover cliente
- Alterar o nome do cliente

------------------

## Frameworks e bibliotecas utilizadas

- Node.js 12+ com Typescript como base
- Express.js
- MongoDB para persistência
- Jest e Chai para testing