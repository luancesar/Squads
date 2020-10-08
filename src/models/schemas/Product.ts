import { Entity, Column, PrimaryGeneratedColumn, ObjectID, ObjectIdColumn} from 'typeorm';


@Entity('products')
class Product{
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string;

  @Column()
  description:string;

  @Column()
  value: string;

};

export default Product
