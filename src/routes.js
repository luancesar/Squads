const express = require('express');
const ProductController = require('./controller/ProductController');
const routes = express.Router(); 

//Lista todos os produtos
routes.get('/products', ProductController.list);

//Lista o produto que tem o id enviado por paramentro
routes.get('/products/:id', ProductController.show);

//Cria um novo produto
routes.post('/products', ProductController.create)

//Atualiza as informações de um produto
routes.put('/products/:id', ProductController.update);

//Atualiza as informações de um produto
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;