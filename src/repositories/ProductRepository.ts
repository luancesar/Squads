
import Product from '../models/schemas/Product';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Product)
class ProductRepository extends Repository<Product>{

    public async findByName(name: string): Promise<Product | undefined>{
        const product = await this.findOne({where : {name}})   

        return product
    }
}

export default ProductRepository;