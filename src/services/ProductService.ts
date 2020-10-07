import Product from '../models/schemas/Product'
import ProductRepository from '../repositories/ProductRepository';
import { getCustomRepository } from 'typeorm';
import { json } from 'express';


interface Request{
    name: string;
    description: string;
    value: string;
}

class CreateProductService {

    productRepository: ProductRepository;

    constructor(productRepository: ProductRepository){
        this.productRepository = productRepository; 
    }

    public async create({name, description, value}: Request): Promise<Product>{
        const productRepository = getCustomRepository(ProductRepository)

        const findProduct = await productRepository.findByName(name);

        if(findProduct)
           throw Error("Ja existe um produto com esse nome") ;
        

        if(!value)
            throw Error("É necessário inserir um valor") ;


        const newProduct = productRepository.create({name, description, value});
        await productRepository.save(newProduct);
        
        return newProduct
    }

    public async list(): Promise<Product[]>{
        
        const productRepository = getCustomRepository(ProductRepository)

        const products = await productRepository.find();

        return products;
    }

    public async filterList(id: string): Promise<Product>{
        const productRepository = getCustomRepository(ProductRepository)

        const product = await productRepository.findOne(id);

        if(!product)
            throw Error("Produto não encontrado")

        return product
    }

    public async delete(id: string){
        const productRepository = getCustomRepository(ProductRepository)

        const product = await productRepository.findOne(id);

        if(product?.id)
            productRepository.delete(product)
        else
            throw Error("Produto não encontrado")
    }

    public async update(id:string, {name, description, value}: Request){
        const productRepository = getCustomRepository(ProductRepository)

        const findProduct = await productRepository.findByName(name);

        if(findProduct)
           throw Error("Ja existe um produto com esse nome") ;
        
        if(!value)
            throw Error("É necessário inserir um valor") ;

        const product = await this.filterList(id);

        if(!product)
            throw Error("Produto não encontrado")

        
        await productRepository.update(id, {name, description, value})
    }


}

export default CreateProductService;