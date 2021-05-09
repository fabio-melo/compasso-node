# compasso-node

## Objetivo

Este repositório engloba o desafio de código da Compasso UOL e foi criado utilizando os padrões de Clean/Onion Architecture e Domain Driven Design

-----------------
## Suposições e Detalhes da Implementação

- Devido ao escopo limitado do projeto, não achei válido aplicar o DDD por completo, pois geraria uma dezena de classes redundantes, causando uma sensação de *overengineering*: complexidade elevada para algo relativamente simples.

- Por motivos de escopo e simplicidade, optei por manter os controllers e os casos de uso na camada da aplicação.


### Entitade City
- O nome da cidade não é uma chave única ou identificador (podem existir multiplas cidades com o mesmo nome, em diferentes estados OU no mesmo estado). [exemplo]([https://exame.com/brasil/os-nomes-mais-usados-para-batizar-cidades-no-brasil/])
- Portanto, Consultar cidade pelo nome retorna um array de cidades.
- O Caso de uso FindCityByName e FindCityByState aderem aos pré-requisitos,  em uma implementação subsequente poderiam ser entregues em uma única rota permitindo filtrar por nome, estado ou ambos via Query.


### Entidade Costumer
- Idade é um dado computado através da data de nascimento;
- Cidade *não* é uma chave estrangeira para a entidade Cidade; (foge do escopo do projeto a criação de uma rotina de validação para verificação de existência do estado, e tratamento de erros para cadastros onde a cidade não existe.); 

---------------
# Casos de Uso

- Cadastrar cidade
- Cadastrar cliente
- Consultar cidade pelo nome
- Consultar cidade pelo estado
- Consultar cliente pelo nome
- Consultar cliente pelo Id
- Remover cliente
- Alterar o nome do cliente

------------------

## Estrutura de Arquivos.

- **infrastructure**: implementação da camada de persistência e de apresentação (via express)

---------------------
## Comentários
