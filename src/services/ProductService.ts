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

    public async create({name, description, value}: Request): Promise<Product>{
        const productRepository = getCustomRepository(ProductRepository)

       
        const product = productRepository.create({name, description, value});

        await productRepository.save(product);

        return product
    }

    public async list(): Promise<Product[]>{
        
        const productRepository = getCustomRepository(ProductRepository)

        const products = productRepository.find();

        return products;
    }

    public async filterList({name}: Request): Promise<Product[]>{
        const productRepository = getCustomRepository(ProductRepository)

        const products = productRepository.find({where : {name}});

        return products
    }

}

export default CreateProductService;