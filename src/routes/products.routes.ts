import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import { getCustomRepository } from 'typeorm';
import  CreateProductService from '../services/ProductService'



const productsRouter = Router(); 



//Cria um novo produto
productsRouter.post('/',async (req, res) => {
    try{

        const {name, description, value} = req.body;

        const productRepository = getCustomRepository(ProductRepository);
        const productService = new CreateProductService(productRepository)
        
        const product = await productService.create({name, description,value})

        return res.json(product);
        
    }catch (err){
        return res.status(400).json({error: err.message})
    }
});

//Lista todos os produtos
productsRouter.get('/', async (req, res) => {
    try{
        const productRepository = getCustomRepository(ProductRepository);
        const productService = new CreateProductService(productRepository)
        const products = await productService.list();
        
        return res.json(products)

    } catch (err){
        return res.status(400).json({error: err.message})
    }
});


//Lista o produto que tem o name enviado por paramentro
productsRouter.get('/filterList', (req, res) => {
    try{
        const {name} = req.body;
        
        const productRepository = getCustomRepository(ProductRepository);
        const productService = new CreateProductService(productRepository)
        
        const product = productService.filterList(name);
        

        return res.json(product)
    } catch (err){
        return res.status(400).json({error: err.message})
    }
});



// //Atualiza as informações de um produto
// productsRouter.put('/products/:id', update);

// //Atualiza as informações de um produto
// productsRouter.delete('/products/:id', destroy);

export default productsRouter;