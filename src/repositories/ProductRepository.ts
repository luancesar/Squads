
import Product from '../models/schemas/Product';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(Product)
class ProductRepository extends Repository<Product>{
 

}

export default ProductRepository;




// export async function update(req, res) {

//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   return res.json(product);
// }
// export async function destroy(req, res) {

//   await Product.findByIdAndDelete(req.params.id);
//   return res.send();
// }