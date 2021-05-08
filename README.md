# compasso-node

## Objetivo

Este repositório engloba o desafio de código da Compasso UOL e foi criado utilizando os padrões de Clean/Onion Architecture e Domain Driven Design

-----------------
## Suposições

### Entitade City
- City (string) não é uma chave única ou identificador (podem existir multiplas cidades com o mesmo nome, em diferentes estados OU no mesmo estado)
- Portanto, Consultar cidade pelo nome retorna uma lista de cidades.
- Estado não é uma chave estrangeira (foge do escopo do projeto a implementação de rotas para cadastro de estado);

### Entidade Costumer
- Idade é um dado computado através da data de nascimento;
- Cidade *não* é uma chave estrangeira para a entidade Cidade; (foge do escopo do projeto a criação de uma rotina de validação para verificação de existência do estado); 

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