# Squads

Olá, esse repositório contém uma API REST em NodeJs e Typescript.


# REQUISIÇÕES

  GET http://localhost:3001/products
  - Lista todos os produtos cadastrados
  

  GET http://localhost:3001/products/filterList (body - {id:string})
  - Lista o produto que corresponde ao id enviado
  

  POST http://localhost:3001/products (body - {name:string, description?:string, value:string})
  - Cria um novo produto
  

  DELETE http://localhost:3001/products (body - {id:string})
  - Deleta o produto que corresponde ao id enviado
  

  PUT http://localhost:3001/products (body - {id:string, name:string, description?:string, value:string})
  - Atualiza o name, description e value do produto que corresponde ao id enviado 
  


# COMANDOS

  Executar o seguinte comando para rodar em ambiente local:
  
    $ docker-compose up -d
    
    
    
# BIBLIOTECAS

  express
  - Framework que facilita a criação de API pois gerencia requisições de diferentes verbos HTTP.
    
  typeorm
  - Faz o gerenciamento de relações de objeto que é executado no Node.js , ele deve ser utilizado com Typescript.
    
    
    
# ARQUITETURA
  
  model/schema
  - arquivos dos schemas da API - ( criamos os modelos de como a API e o Banco de Dados deve enxergar a entidade )
  
  repositories
  - repository da entidade usada na API - ( utilizamos para armazenar querys personalizadas )
    
  routes
  - rotas do sistema - ( local onde criamos nossas requisições )
    
  services
  - services da entidade - ( local onde criamos as regras de negocio da nossa API )
    
  ormconfig.json
  - arquivo de configuração do banco de dados
  
  
  
  

