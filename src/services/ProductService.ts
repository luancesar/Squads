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

        const products = await productRepository.find();

        return products;
    }

    public async filterList(id: string): Promise<Product | null>{
        const productRepository = getCustomRepository(ProductRepository)

        const product = await productRepository.findOne(id);

        return product || null
    }

    public async delete(id: string){
        const productRepository = getCustomRepository(ProductRepository)

        const product = await productRepository.findOne(id);

        if(product?.id)
            productRepository.delete(product)
        else
            throw Error("Produto não encontrado")
    }

    public async update(id:string, {name, description, value}: Request): Promise<Product | null>{
        const productRepository = getCustomRepository(ProductRepository)

       
        await productRepository.update(id, {name, description, value})
        
        const product = await this.filterList(id);

        return product
    }


}

export default CreateProductService;