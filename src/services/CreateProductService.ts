import Product from '../models/schemas/Product'
import ProductRepository from '../repositories/ProductRepository';
import { getCustomRepository } from 'typeorm';


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

    public async execute({name, description, value}: Request): Promise<Product>{
        const productRepository = getCustomRepository(ProductRepository)

       
        const product = productRepository.create({name, description, value});

        await productRepository.save(product);

        return product
    }

}

export default CreateProductService;