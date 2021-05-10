export const swaggerData = {
  "swagger": "2.0",
  "info":{
    "description":"Uma API Simples de cadastro de Cidades e Clientes",
    "version":"1.0.0",
    "title":"compasso-node",
    "contact":{
      "email":"fabiomelo@me.com"
    },
    "license":{
      "name":"MIT",
      "url":"https://opensource.org/licenses/MIT"
    }
  },
    "host": "localhost:3000",
    "basePath": "/api/v1",
    "schemes": [
      "http"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/cities/create": {
        "post": {
          "description": "",
          "summary": "Create City",
          "tags": [
            "Cities"
          ],
          "operationId": "CreateCity",
          "deprecated": false,
          "produces": [
            "application/json"
          ],
          "consumes": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "Content-Type",
              "in": "header",
              "required": true,
              "type": "string",
              "description": ""
            },
            {
              "name": "Body",
              "in": "body",
              "required": true,
              "description": "",
              "schema": {
                "$ref": "#/definitions/CreateCityRequest"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          }
        }
      },
      "/cities/find-by-name": {
        "get": {
          "description": "",
          "summary": "Find City by Name",
          "tags": [
            "Cities"
          ],
          "operationId": "FindCitybyName",
          "deprecated": false,
          "produces": [
            "application/json"
          ],
          "consumes": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "name",
              "in": "query",
              "required": true,
              "type": "string",
              "description": ""
            },
          ],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          }
        }
      },
      "/cities/find-by-state": {
        "get": {
          "description": "",
          "summary": "Find City by State",
          "tags": [
            "Cities"
          ],
          "operationId": "FindCitybyState",
          "deprecated": false,
          "produces": [
            "application/json"
          ],
          "consumes": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "state",
              "in": "query",
              "required": true,
              "type": "string",
              "description": ""
            },
          ],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          }
        }
      },
      "/customers/create": {
        "post": {
          "description": "",
          "summary": "Create Customer",
          "tags": [
            "Customers"
          ],
          "operationId": "CreateCustomer",
          "deprecated": false,
          "produces": [
            "application/json"
          ],
          "consumes": [
            "application/json"
          ],
          "parameters": [

            {
              "name": "Body",
              "in": "body",
              "required": true,
              "description": "",
              "schema": {
                "$ref": "#/definitions/CreateCustomerRequest"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          }
        }
      },
      "/customers/customer/{id}": {
        "put": {
          "description": "",
          "summary": "Update Customer Name",
          "tags": [
            "Customers"
          ],
          "operationId": "UpdateCustomerName",
          "deprecated": false,
          "produces": [
            "application/json"
          ],
          "consumes": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "",
      
            },
            {
              "name": "Body",
              "in": "body",
              "required": true,
              "description": "",
              "schema": {
                "$ref": "#/definitions/UpdateCustomerNameRequest"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          }
        },
        "delete": {
          "description": "",
          "summary": "Delete Customer",
          "tags": [
            "Customers"
          ],
          "operationId": "DeleteCustomer",
          "deprecated": false,
          "produces": [
            "application/json"
          ],
          "consumes": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "",
      
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          }
        },
        "get": {
          "description": "",
          "summary": "Find Customer By ID",
          "tags": [
            "Customers"
          ],
          "operationId": "FindCustomerByID",
          "deprecated": false,
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "",
      
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          }
        }
      },
      "/customers/find-by-name": {
        "get": {
          "description": "",
          "summary": "Find Customer By Name",
          "tags": [
            "Customers"
          ],
          "operationId": "FindCustomerByName",
          "deprecated": false,
          "produces": [
            "application/json"
          ],
          "parameters": [
            {
              "name": "name",
              "in": "query",
              "required": true,
              "type": "string",
              "description": ""
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "headers": {}
            }
          }
        }
      }
    },
    "definitions": {
      "CreateCityRequest": {
        "title": "CreateCityRequest",
        "example": {
          "name": "João Pessoa",
          "state": "PB"
        },
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "state": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "state"
        ]
      },
      "CreateCustomerRequest": {
        "title": "CreateCustomerRequest",
        "example": {
          "name": "Jose",
          "id_": "06b9c5cf-1751-4df5-bad1-b601d308ef53",
          "birthdate": "2020-02-22",
          "cityOfResidence": {
            "name": "João Pessoa",
            "state": "PB"
          },
          "gender": "Male"
        },
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "id_": {
            "type": "string"
          },
          "birthdate": {
            "type": "string"
          },
          "cityOfResidence": {
            "$ref": "#/definitions/CityOfResidence"
          },
          "gender": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "id_",
          "birthdate",
          "cityOfResidence",
          "gender"
        ]
      },
      "CityOfResidence": {
        "title": "CityOfResidence",
        "example": {
          "name": "João Pessoa",
          "state": "PB"
        },
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "state": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "state"
        ]
      },
      "UpdateCustomerNameRequest": {
        "title": "UpdateCustomerNameRequest",
        "example": {
          "name": "Fabiana"
        },
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      },
      "DeleteCustomerRequest": {
        "title": "DeleteCustomerRequest",
        "example": {
          "name": "Fabio3",
          "birthdate": "2020-02-22",
          "cityOfResidence": {
            "name": "João Pessoa",
            "state": "PB"
          },
          "gender": "Male"
        },
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "birthdate": {
            "type": "string"
          },
          "cityOfResidence": {
            "$ref": "#/definitions/CityOfResidence"
          },
          "gender": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "birthdate",
          "cityOfResidence",
          "gender"
        ]
      }
    },
    "tags": [
      {
        "name": "Cities",
        "description": ""
      },
      {
        "name": "Customers",
        "description": ""
      }
    ]
  }